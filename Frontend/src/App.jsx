import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Signup from './pages/signup/Signup.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'

const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} />: <></> }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
