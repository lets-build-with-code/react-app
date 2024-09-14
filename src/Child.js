import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props);
        
    }
  
    componentDidMount() {
      console.log({componentDidMount: "inserting/adding component in Dom."})  
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log({shouldComponentUpdate : nextProps.count >= 3, nextProps, nextState});
      
        return nextProps.count >= 3;
    }

    componentDidUpdate(prevProps, prevState) {
      console.log({ComponentDidUpdate : true, prevProps, prevState});
    }

    render() {
      if (this.props.triggerError) {
        // try {
          throw new Error('I crashed!');
        // } catch (error) {
          
        // }
        
      }
      return <div> 
        <h1>Full Name : {this.props.fullName.firstname} {this.props.fullName.lastname}</h1>
        <h2>Age : {this.props.age}</h2>
             </div>
    }
  }

  export default Child;