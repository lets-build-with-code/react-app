import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [users, setUsers] = useState([])
  const getDataFromChild = (data) => {
    console.log(data);
    setUsers(data);
  }
  return (
    <div>
      <div className="container">
        <h3>Parent Component</h3>
        {users?.map((usr) => <li key={usr.id}>{usr.name} - {usr.department}</li>)}
      </div>
      <Child onReceive={getDataFromChild}/>
    </div>
  );
}




export default App;
