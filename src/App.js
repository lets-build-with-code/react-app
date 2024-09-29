import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [show , setShow] = useState(true);
  return (
    <div>
      <h1>Parent Component</h1>
      { show && <Child /> }
      <button onClick={() => setShow(!show)}>{ show ? 'HIde' : 'Show'}</button>
    </div> 
  );
}
export default App;
