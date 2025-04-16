import './App.css'
import React from 'react'
import UseEffect1 from './UseEffect1'
import { Link, Routes,Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Blog from './Blog'
import NoPage from './NoPage'

function App() {

  return (
    <>
    <nav>
      <Link to="/">홈</Link> | <Link to="/about">소개</Link>| <Link to="/blog">블로그</Link>
    </nav>
      {/* <UseEffect1/> */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
    </>
  )
}

export default App
