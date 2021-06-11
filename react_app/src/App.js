import React from "react";

// function Food({favourite}){
//   return <h1>I Like {favourite}</h1>;
// }
function Food(props){
  return <h1>I Like {props.favourite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>    
      <Food favourite="kimchi" />
      <Food favourite="hamberger" />      
    </div>
  );
}

export default App;
