import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="bg-gray-700 p-4 flex justify-between items-center">
            <div className="text-white text-lg font-bold">E-Commerce Store</div>
            <ul className="flex space-x-4">
            <li><Link to='/'  className="text-white hover:text-gray-400">Home</Link></li>
            <li><Link to="/cart" className="text-white hover:text-gray-400">Cart</Link></li>
            <li><Link to="/wishlist" className="text-white hover:text-gray-400">Wishlist</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar