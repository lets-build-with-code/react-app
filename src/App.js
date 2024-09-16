import "./App.css";
import { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
     
    };
   
  }

  onReceiveData = (data) => {
    this.setState({ data });
  };

  items = (users) => {
    return users?.map(usr => <li>{usr.name} - {usr.type}</li>)
  };


  render() {
    
    return (
      <div className="container">
        <div className="container">
          <p>Parent</p>
          
          {this.items(this.state.data)}
        </div>
        <Child onReceive={this.onReceiveData} />
      </div>
    );
  }
}

export default App;
