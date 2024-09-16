import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props); 
        this.user = [
          {name: 'sun' , type: 'admin'},
          {name: 'sam' , type: 'supervisor'}
        ]     
    }

    sendData = () => {
      this.props.onReceive(this.user)
    }

    render() {
      return <div className="container"> 
             <p>Child Componet</p>
             <button onClick={this.sendData}>Send Data To Parent</button>
          </div>
    }
  }

  export default Child;
  