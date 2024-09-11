import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname : 'sun',
      lastname : 'sha'
    }    
  }

  render() {
    return <div>
          <h1>Full Name : {this.state.firstname} {this.state.lastname}</h1>
          <button onClick={() => {this.setState({firstname : 'sam'})}}> update</button>
      </div>      
  }
}




export default App;
