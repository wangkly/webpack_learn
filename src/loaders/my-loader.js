const loaderUtils = require('loader-utils');
module.exports = function(source){
    const options = loaderUtils.getOptions(this);
    console.log('my-loader options ==>',options);
    var async = options.async;
    if(async){
        var callback = this.async();//异步loader
        setTimeout(() => {
            console.log('延时2秒返回');
            var reg = new RegExp( '异步加载' , "g" )
            source = source.replace(reg,"通过异步加载")
            callback(null,source);
        }, 500);
    
    }else{
        this.callback(null,source);
        return;
    }
}