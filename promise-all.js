var allFunc =(funcs)=>{
   let count = 0;
    let nameMap ={};
    return new Promise((resolve,reject)=>{
        var doneCallback = (result,name)=>{
            count+=1;
            nameMap[name] = result;
            if(count == funcs.length){
                console.log('promise all 返回')
                let re  =[];
                funcs.forEach(fun=>{
                    re.push(nameMap[fun.name])
                })
                resolve(re)
            }
        }

        var failCallback = ()=>{
            console.log('promise all reject')
            reject()
        }
        funcs.forEach(fun=>{
            nameMap[fun.name] = undefined;
            fun().then((res)=>{
                doneCallback(res,fun.name)
            },(reject)=>{
                failCallback()
            })

        })

    })
}


let promiseA = ()=> {
    console.log('promiseA执行')
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
        console.log('promiseA返回')
        resolve("promiseA")
    },1000);
})
}

let promiseB =()=>{
    console.log('promiseB执行')
   return new Promise((resolve,reject)=>{ setTimeout(()=>{
       console.log('promiseB返回')
        resolve("promiseB")
    },1000);
})
}

let promiseC = ()=>{
    console.log('promiseC 执行')
    return new Promise((resolve,reject)=>{ setTimeout(()=>{
        console.log('promiseC reject')
        resolve("promiseC")
    },1000);
})
}


allFunc([promiseA,promiseB,promiseC]).then((result)=>{
    console.log('promise all 结果=>',result)
})
