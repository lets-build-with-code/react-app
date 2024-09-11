import './App.css';
import { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor() {
    super();
    _fullName = {
      fristname:'sun',
      lastname : 'sha'
    }
  }

  render() {
    return <Child 
               fullName={firstname: 'sun', lastname: 'sha'}
               age={28}
            /> 
  }
}

export default App;
