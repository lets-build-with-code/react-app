import './App.css';
import { Component } from 'react';
import Child from './Child';
import ErrorWrapper from './ErrorWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: 'sun',
      lastname: 'sha',
      count : 0,
      triggerError: false
    }

   
  }

  render() {

    return <div>
      <Child
              fullName={this.state}
              count = {this.state.count}
              age={28}
            />
            
            <button onClick={() => {this.setState({firstname:'sam', count : this.state.count + 1, triggerError: !this.state.triggerError })}}>Update</button>
          </div>
  }
}

export default App;
