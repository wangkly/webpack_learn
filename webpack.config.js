const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack'); //to access built-in plugins
// require("@babel/polyfill");
// require('jquery');
var MyPlugin = require('./my_plugin');

module.exports={
    optimization:{
        minimize: false,
        splitChunks:{
            automaticNameDelimiter: '~',
            cacheGroups:{
                commons:{
                    name:'commons',
                    chunks:'initial',
                    minChunks:2
                }
            }
        }
    },
    mode: "development", // enabled useful tools for development
    // entry:["@babel/polyfill","./src/index.js"],
    entry:"./src/index.js",
    output:{
        filename:'[hash:8]-bundle.js',
        path:path.resolve(__dirname,'dist'),
        chunkFilename: '[name]-[hash:8].js',
    },
    module:{
        rules:[
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [{
                    loader:"babel-loader?cacheDirectory=true"
                    },{
                    loader:'my-loader',
                    options:{
                    keywords:'my-loader',
                    async:true
                    }
                }]
              },
              {
                  test:/\.css/,
                  use:[{
                      loader:MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true
                      },
                  },'css-loader']
              }
        ]
    },
    devtool:'source-map',
    // externals: { 
    //     jquery: '$'  //import $ from "jquery";不会重复打包 jQuery
    // },
    plugins:[
        new webpack.ProgressPlugin(),
        new webpack.DllReferencePlugin({
            name:'react_dll',
            context: __dirname,
            manifest:require('./dist/manifest.json')
        }),
        new HtmlWebpackPlugin({
            title:'React_webpack_learn',
            template:'./index.ejs'
        }),
        new webpack.DefinePlugin({
            __DEV__: true
        }),
        new webpack.ProvidePlugin({//每个模块都注入一个全局变量
            $: 'jquery',
            jQuery: 'jquery'
        }),

        new MiniCssExtractPlugin({
            filename:'bundle.css'
        }),
        new MyPlugin({
            name:'my_plugin'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolveLoader:{//加载本地loader
        modules:['node_modules',"./src/loaders"]
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        port: 3000,
        hot:true
    }


}