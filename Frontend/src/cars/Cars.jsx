import React from 'react'
import Navbar from '../components/Navbar'
import Models from '../components/Models'
import Footer from '../components/Footer'

function Cars() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        <Models />
    </div>
    <Footer/>

    </>
  )
}

export default Cars