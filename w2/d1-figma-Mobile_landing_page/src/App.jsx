import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import Faq from './components/Faq'
import Error404 from './pages/Error404'

function App() {
  return (
    <div className=' w-full h-full transiton duration-300'>
      {/* <Nav/> */}
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed bottom-5 right-5 z-50 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white shadow-md"
      >
        🌓
      </button>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/err' element={<Error404/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App