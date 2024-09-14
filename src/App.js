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
      hideChild : false
    }
  }

  render() {
  // if(this.state.count > 1) {
  //   throw new Error('App Error');
  // }
    return <div>
       <Child fullName={this.state}
              count = {this.state.count}
              age={28}
            />
    
      
            <button onClick={() => {this.setState({firstname:'sam', count : this.state.count + 1})}}>
              count
            </button>
          </div>
  }
}

export default App;
