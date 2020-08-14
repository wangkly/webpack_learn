

var asyncFunc = async ()=>{
    let reuslt = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(111)
        },1000)
    })

    console.log('result===>',reuslt)
}

asyncFunc()