import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/Wishlist'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
    </div>
  )
}

export default App