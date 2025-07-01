import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {Githubinfo}from './components/Github/Github.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:'about',
        element:<About/>
      }
      ,{
        path:'contact',
        element:<Contact/>
      }
      ,{
        path:"user/:userid" ,
        element:<User/>
      }
      ,{
        path:"github" ,
        element:<Github/>,
        loader : Githubinfo,
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
