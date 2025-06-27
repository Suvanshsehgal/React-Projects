import './App.css'
import React, { useState } from 'react';


function App() {
  let hiii = 5;

  const [counter , setcounter] = useState(hiii);

  const addValue = () =>{
    setcounter(counter+1);
    console.log(`button clicked ${counter}`)
  }

  const subvalue = () =>{
    setcounter(counter-1);
  }

  

  return (
    <>
     <h1>Hello world</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={subvalue}>Remove Value</button>
    </>
  )
}

export default App;