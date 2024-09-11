import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    // this.updateName = this.updateName.bind(this);
    this.state = {
      firstname : 'sun',
      lastname : 'sha'
    }
    //  this._firstname = 'Sun';
    //  this._lastname = 'Sha';
    
  }


  render() {
    return <div>
          <h1>Full Name : {this.state.firstname} {this.state.lastname}</h1>
          <button onClick={() => {this.setState({firstname : 'sam', lastname: 'ver'})}}> update</button>
      </div>      
  }
}




export default App;
