import React,{Component} from 'react'

export default class MyCompoonent extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('componentdidmount')
    }

    sayHello=()=>{
        console.log('hello')
    }

    render(){
        return(
            <div>
                this is my component
            </div>
        )
    }


}