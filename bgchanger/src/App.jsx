import './App.css';
import { useState } from 'react';
import Toolbar from './compoents/Toolbar';
function App() {
  const [color,setcolor] = useState("red");

  const bgcolor = ["red" , "blue" , "green" , "purple" , "orange" ,"teal"]
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor :color}}>
        <Toolbar bgcolors ={bgcolor} setcolor={setcolor}/>
        hello
      </div>
    </>
  );
}

export default App;
