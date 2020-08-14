import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
// import {Button,Input} from 'antd'
import NameInput from './name-input';
import MyComponent from './my-component'
import './style.css'


function loadAysnc(){
    import(/* webpackChunkName: "show" */ './show').then((show)=>{
        show.default('webpack');
        console.log('show===>',show)
    })
}
/**
 * test 方法不会阻塞
 * someAysnc 方法会阻塞，直到await后的promise resolve 后继续执行
 * 
 * someAsync 方法是异步的
 */
function test(){
    console.log('test 开始执行')
    someAysnc();
    console.log('test 结束执行')
}

async function someAysnc(){
    console.log('async 方法执行开始')
  let result =  await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('这是async await 内部的方法执行')
            resolve(111);
        },3000)
    })
    console.log('async 方法执行结束了',result)
}

// function* foo(x) {
//     var y = 2 * (yield (x + 1));
//     var z = yield (y / 3);
//     return (x + y + z);
//   }
  
//   var a = foo(5);
//   console.log('1',a.next()) // Object{value:6, done:false}
//   console.log('2',a.next()) // Object{value:NaN, done:false}
//   console.log('3',a.next()) // Object{value:NaN, done:true}
  
//   var b = foo(5);
//   console.log('4',b.next())  // { value:6, done:false }
//   console.log('5',b.next(12))// { value:8, done:false }
//   console.log('5',b.next(13)) // { value:42, done:true }

function* testGenerator(){
    let result  = yield new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("timeout")
            resolve(5);
        },1000)
    })
    console.log('result==>',result)

    let a = yield 1+1;

    console.log('a==>',a)
}
var gen =  testGenerator();
gen.next().value.then((res)=>{
    console.log('res===>',res);
    gen.next(res);
    console.log('gen==>',gen.next()) ;
})




function App (){
    // console.log('index===>',__DEV__);
    let [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `You clicked this button ${count} times`;
    })

    return(
        <div>
            <p>You clicked this button {count} times</p>
            <NameInput />
            <button onClick={()=>setCount( count + 1 )}>
                click
            </button>

            <button onClick={()=>loadAysnc()}>
                异步加载
            </button>

            <button onClick={()=>test()}>
                test
            </button>

            <MyComponent />

        </div>
    )
}

if (module.hot) { module.hot.accept(); }

const rootElement = document.getElementById('root');

ReactDOM.render(<App /> ,rootElement);