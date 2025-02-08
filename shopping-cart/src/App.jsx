import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './navabr'
import ShopPage from './ShopPage'
import CartPage from './CartPage'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ShopPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
