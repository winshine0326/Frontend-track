import './App.css'
import React from 'react'
import UseEffect1 from './UseEffect1'
import { Link, Routes,Route } from 'react-router-dom'
import About from './About'
import Home from './Home'

function App() {

  return (
    <>
    <nav>
      <Link to="/">홈</Link> | <Link to="/about">소개</Link>
    </nav>
      {/* <UseEffect1/> */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
