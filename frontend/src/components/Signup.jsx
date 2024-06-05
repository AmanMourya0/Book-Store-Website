import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <>
        <div className='flex h-screen justify-center items-center '>
        {/* <dialog id="my_modal_3" className="modal"> */}
        <div className="box-modal bg-white dark:bg-black rounded-md p-10">
            <h1 className='text-2xl text-center font-extrabold mb-10 text-white'>Book Store</h1>
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to={'/'}>✕</Link>
            </form>
            {/* <h3 className="font-bold text-lg">Login</h3> */}
            <div className='space-y-4'>
            <div className='space-y-2'>
                <label>Name</label><br />
                <input type="text" placeholder='Enter Your fullName' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                </div>
              <div className='space-y-2'>
                <label>Email</label><br />
                <input type="email" placeholder='Enter Your Email' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                </div>
                <div className='space-y-2' >
                <label>Password</label><br />   
                <input type="password" placeholder='Create Password' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                </div>
                <div className='flex justify-around py-3'>
                <button className='bg-pink-500 px-4 py-1 border rounded-md border-none ' type='button'>SignUp</button>
                <p>regitered?<button type="submit" className='text-blue-600 underline' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button></p><Login/>
                </div>
            </div>
        </div>
        {/* </dialog> */}
    </div>
    </>
  )
}

export default Signup