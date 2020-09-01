var obj ={

}

Object.defineProperty(obj,"myName",{
    get(){
        return "wangkly" +"hello"
    },
    set(newValue){
        console.log('set===>',newValue)
    }
})

obj.myName = "lalalallala"

console.log(obj.myName)

console.log('===>',Object.getOwnPropertyNames(obj))