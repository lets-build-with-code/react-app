import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {

      return <div> 
        <h1>Full Name : {this.props.fullName.firstname} {this.props.fullName.lastname}</h1>
        <h2>Age : {this.props.age}</h2>
             </div>
    }
  }

  export default Child;