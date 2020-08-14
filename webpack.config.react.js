var path =require('path');
var webpack = require('webpack');

module.exports={
    mode:'development',
    entry:{
        react:['react','react-dom']
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'_dll_[name].js',
        library:'react_dll'
    },
    plugins:[
        new webpack.DllPlugin({
            format:true,
            name:'react_dll',//需与output.library一致
            path: path.join(__dirname, 'dist/manifest.json'),
        })
    ]

}