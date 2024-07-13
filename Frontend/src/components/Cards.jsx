import React from 'react';

function Cards({ item }) {
  return (
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
    <figure>
        <img
        src={item.pic}
        alt="" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-between">
        <button className="btn btn-primary">Know more</button>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Cards;
