import React from 'react'

function Cards2( {item} ) {
  return (
    <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
    <figure>
        <img
        src={item.image}
        alt="" />
    </figure>
    <div className="card-body">
        <h1 className="card-title">{item.brand}</h1>
        <h2 className='text-semi-bold'>{item.from}</h2>
        <p>{item.matter}</p>
        <div className="card-actions justify-between">
        <button className="btn btn-primary">Know more</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Cards2