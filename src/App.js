import './App.css';
import { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor() {
    super();
    this._fullName = {
      fristname:'sun',
      lastname : 'sha'
    }
  }

  render() {
    return <Child 
               fullName={this._fullName}
               age={28}
            /> 
  }
}

export default App;
