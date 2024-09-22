import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname : 'sun',
      lastName : 'sha'
    }
    // this.firstname = "sun";
    // this.lastname = "sha";
    // this.updateValues = this.updateValues.bind(this);
  }

  render() {
    return <div>
       <h1>{this.state.firstname} - {this.state.lastName} </h1>
       <button onClick={ () => { this.setState({firstname : 'sam'})} }>Update</button>
    </div>
  }
    // get firstName() {
  //   return this.firstname
  // }
  // set _firstName(value) {
  //   this.firstname = value
  // }
  // get lastName() {
  //   return this.lastname
  // }
  // set _lastName(value) {
  //   this.lastname = value
  // }

  // updateValues = () => {
  //   console.log({first : this.firstName, last : this.lastName});
  //   this.forceUpdate();
  //   this._firstName = 'sam'; this._lastName = 'ver' 
  // }
}

export default App;

