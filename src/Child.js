import { useEffect } from "react";

function Child(props) {

  useEffect(() => {
    console.log({fact : 'Component mount'});
    return () => {
      console.log({fact : 'Component will unmount.'})
    }
  }, []);
  
  return (
    <div className="container">
      <h1>Child Component</h1>
    </div>
  );
}

export default Child;
