import { useState,useCallback,useEffect,useRef, use} from 'react'
import './App.css'        

function App() {
  const [length, setlength] = useState(8)
  const [numberall , setnumberall] = useState(false);
  const [charall , setcharall] = useState(false);   
  const [password , setpassword] = useState("");

  //ref hook 
  const passwordRef = useRef(null);
  
const generatePassword = useCallback(() =>{
  let pass = "" ;
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberall) {
    str += "0123456789";
  }
  if(charall) {
    str += "!@#$%^&*()_+[]{}|;:,.<>?";
  }
  for(let i=0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * str.length+1);
    pass += str[randomIndex];
  }
    setpassword(pass);

} , [length, numberall, charall,setpassword]);   

useEffect(() => {
  generatePassword();
}, [length, numberall, charall, generatePassword]);

const Copypassword = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)

},[password]);
  return (
    <>
    <div className='w-full px max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-400'>
      <h1 className='text-center text-white py-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3 bg-amber-50'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />

        <button 
        onClick={Copypassword}
        className='outline-none bg-orange-500 text-white py-2 px-4 hover:bg-orange-600'>
          copy
        </button>
      </div>
      <div className='flex gap-x-2'>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={60}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}} 
        />
        <label >length:{length}</label>
      </div>
     </div>

     <div className='flex items-center gap-x-2 my-4'>
      <input type="checkbox"
      defaultChecked = {numberall}
      id='numberInput'
      onChange={() => {
        setnumberall((prev) => !prev);
      }} />
      <label >Numbers</label>
     </div>
     <div className='flex items-center gap-x-2 my-4'>
      <input type="checkbox"
      defaultChecked = {charall}
      id='numberInput'
      onChange={() => {
        setcharall((prev) => !prev);
      }} />
      <label >Char</label>
     </div>
     </div>
    </div>
    </>
  )

}
export default App;
