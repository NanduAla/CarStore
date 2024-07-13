import React from 'react'
import models from '../../public/models.json'
import Cards2 from './Cards2';
function Models() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className='mt-28 item-center justify-center text-center'>
            <h1 className="text-2xl font-semibold md:text-4xl">
                Get Your Favorite   
                <span className='text-blue-500'>  CAR!!</span>
            </h1>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                models.map((item)=>(
                    <Cards2 key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  );
}

export default Models;