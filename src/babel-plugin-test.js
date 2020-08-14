import * as babel from "@babel/core";
var MybabelPlugin =require('./my-babel-plugin');
var code = `
import {Button} from 'antd';

var func = function(a){
	console.log(1+2);
      window.alert('hello world');
      return '';
}`;

var result  = babel.transform(code,{
    plugins:[
        MybabelPlugin 
    ]
})

console.log('result.code==>',result.code)


