import React,{useState} from'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  function increase(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }
  return (
    <div className="App">
      <div className="btn">
      <button onClick={decrease}><Subtract/button>
      <span>{count}</span>
      <button onClick={increase}>Addition</button>
      
      </div>
    </div>
  );
}

export default App;
