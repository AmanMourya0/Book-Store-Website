import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';
function Courses() {
  return (
    <>
    <div className='mt-14 max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='items-center justify-center text-center'>
      <h1 className='py-6 text-2xl font-semibold md:text-4xl'>WE ARE HAPPY TO <span className='text-pink-500'>SEE YOU</span>....</h1>
      <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellat iste temporibus. Natus itaque inventore doloremque nulla ducimus ipsa repellendus sed iusto eveniet corrupti. Ducimus minima beatae et? Labore, eos?</p>
      <Link to='/'><button className='bg-pink-500 px-3 py-2 rounded-md hover:bg-pink-600 duration-300 mt-6'>Back</button></Link>
    </div>
    <div className='mt-12 md:grid grid-cols-4'>
    {list.map((item) => 
        (<Cards item={item} key={item.id} />
        )) }
    </div>
    </div>
    </>
  )
}

export default Courses