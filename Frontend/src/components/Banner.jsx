import React from 'react'
import banner from '../../public/Banner.png'

function Banner() {
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className="space-y-5"> 
        <h1 className='text-5xl font-bold'> <span className="text-blue-500">Welcome</span> to CarStore!!</h1>
        <p className='text-xl'>A car store is a retail business selling new and pre-owned vehicles from various manufacturers, 
          offering financing, trade-in evaluations, and after-sales support. With showrooms and service departments, 
          they provide a seamless buying experience, focusing on customer satisfaction and reliability.</p>
        </div>
        </div>
        <div className='w-full md:w-1/2'>
        <img src={banner} alt=''></img>
        </div>
    </div>
    </>
  )
}

export default Banner