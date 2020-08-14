import {useState,useEffect} from 'react'


function testHook(){
    let {count,setCount} = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            console.log(count)
        },1000)   
    },[])

    return (
        <div>
            {{count}}
            <button onClick={(count) => setCount(count+1)}></button>
        </div>
    )

}