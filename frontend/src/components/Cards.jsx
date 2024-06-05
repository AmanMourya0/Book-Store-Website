import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-4 my-3 p-3' >
    <div className="text-white card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline hover:bg-pink-500 duration-200">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-500">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards