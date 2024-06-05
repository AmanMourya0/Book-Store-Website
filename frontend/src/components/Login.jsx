import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-black">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <label>Email</label><br />
                <input type="email" placeholder='Enter Your Email' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                </div>
                <div className='space-y-2' >
                <label>Password</label><br />
                <input type="password" placeholder='Password' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                </div>
                <div className='flex justify-around'>
                <button className='bg-pink-500 px-4 py-1 border rounded-md border-none ' type='button'>Login</button>
                <p>not regitered?<Link className='text-blue-600 underline' to={'/SignUp'}>SignUp</Link></p>
                </div>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default Login