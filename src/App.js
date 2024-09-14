import './App.css';
import { Component } from 'react';
import Child from './Child';

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

    return <div>
      {!this.state.hideChild && <Child fullName={this.state}
              count = {this.state.count}
              age={28}
            />}
            <button onClick={() => {this.setState({firstname:'sam', count : this.state.count + 1, hideChild : !this.state.hideChild})}}>
              {(this.state.hideChild) ? 'Show' : 'Hide'}</button>
          </div>
  }
}

export default App;
