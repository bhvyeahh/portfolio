import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Socials from './pages/Socials'
import Contact from './pages/Contact'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/socials' element = {<Socials/>}/>
        <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App
