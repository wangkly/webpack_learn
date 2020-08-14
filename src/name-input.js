import React,{useState,useEffect,useRef} from 'react';

export default function NameInput(){
    const[name,setName] = useState(null);
    const[desc,setDesc] = useState(null);
    const lastQueryName = useRef(name)
    const inputRef = useRef(null);
    function handlerNameChange(name){
        setTimeout(()=>{
            setDesc(`经过查询${name} 是一个好名字${Math.random(10)}`);
        },1000)
    }

    useEffect(()=>{
        lastQueryName.current = name;
        setTimeout(()=>{
            console.log('上一次查询的名字是==>',lastQueryName.current);
            inputRef.current.focus();
        },2000)
    },[desc])


    function handleKeyDown(event){
        console.log('onkeyDown')
    }

    return(
        <div>
            <p>查询结果：{desc||''}</p>
            <input placeholder="请输入姓名" onChange={(e)=> setName(e.target.value)} ref={inputRef}/>
            <button onClick={()=> handlerNameChange(name)} onKeyDown={()=>handleKeyDown()}>查询</button>
        </div>
    )
}

