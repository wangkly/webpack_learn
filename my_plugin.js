
function MyPlugin(options){
    console.log('myPlugin options ========>',options)
}


MyPlugin.prototype.apply = function(compiler){
    compiler.plugin('done',function(compilation,callback){
        // console.log('*************** MyPlugin **************************',process.env.NODE_ENV);
        let {options} = compiler;
        // console.log('compiler ====>',options);
        // console.log('compilation ====>',compilation);
    })
    compiler.plugin('emit', (compilation, callback) => {
        // // 读取名称为 fileName 的输出资源
        const asset = compilation.assets;
        console.log('compilation.assets====>',Object.keys(asset) );
        // // 获取输出资源的内容
        // asset.source();
        // // 获取输出资源的文件大小
        // asset.size();
        callback();
      })


      compiler.hooks.afterEmit.tapPromise('PromiseTap',(compilation)=>{
        return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    resolve();
                }, 3000);
        }).then(()=>{
            console.log('===then==');
        })

      })
}

module.exports = MyPlugin;