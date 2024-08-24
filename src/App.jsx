import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from  './components/Home'
import Manager from  './components/Manager'



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/manager' element={<Manager/>}  />
        
      </Routes>
    </>
  )
}

export default App
