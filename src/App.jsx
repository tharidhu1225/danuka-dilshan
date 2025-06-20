import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import ResponseTest from './pages/admin/responseTest'
import { GoogleOAuthProvider } from '@react-oauth/google'
import PhotographerHomePage from './pages/UserInterface'
import Register from './pages/register'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div className='bg-primary'>
     <BrowserRouter>
      <Toaster position='top-right'/>
      <GoogleOAuthProvider clientId='474190677487-al5kcu80p13msbvmmf8tu52d8la5bgie.apps.googleusercontent.com'>
      <Routes path="/*">
        <Route path="/" element={<PhotographerHomePage/>}/>         
        <Route path="/home/*" element={<HomePage/>}/>   
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/rejister" element={<Register/>}/>
        <Route path="/admin/*" element={<AdminHomePage/>}/>             
      </Routes>
      </GoogleOAuthProvider>
     </BrowserRouter>
    </div>
  )
}

export default App
