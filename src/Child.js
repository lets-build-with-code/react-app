import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props);      
    }


    render() {
      if(this.props.count > 2) {
        throw new Error('Child Error')
      }
      return <div> 
        <h1>Full Name : {this.props.fullName.firstname} {this.props.fullName.lastname}</h1>
        <h2>Age : {this.props.age}</h2>
             </div>
    }
  }

  export default Child;