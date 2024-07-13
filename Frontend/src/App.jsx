import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Cars from './cars/Cars'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App