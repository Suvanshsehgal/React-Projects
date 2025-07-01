import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './compoents/Login'
import Profile from './compoents/Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hello world i am under water </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
