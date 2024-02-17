import React from "react";

class Greeting extends React.Component{
    constructor(){
        super();
        this.state={name:"Aditya"}
    }

    componentDidMount(){
        console.log("Mounted to the DOM.")
    }
    
    render(){
        return <h1>Hello {this.state.name}</h1>
    }
}

export default Greeting;