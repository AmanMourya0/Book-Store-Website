import React from 'react'

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
            <form action="">
                <label>Email</label><br />
                <input type="email" placeholder='Enter Your Email' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                <label>Password</label><br />
                <input type="password" /><br />
                <div className='flex '>
                <input type="submit" value='Login'/>
                not regitered?<a href="">Register</a>
                </div>
            </form>
        </div>
        </dialog>
    </div>
  )
}

export default Login