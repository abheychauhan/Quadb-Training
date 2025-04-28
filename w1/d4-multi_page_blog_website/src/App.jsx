import React from 'react'
import Header from './Components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
import About from './Components/About'
import BlogDetails from './Components/BlogDetails'

function App() {
  return (

    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/:id' element={<BlogDetails/>} />
        
        <Route path='/about' element={<About/>}/>

      </Routes>
    </div>
    
  )
}

export default App