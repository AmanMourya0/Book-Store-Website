import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-black">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            
            <h3 className="font-bold text-lg mb-5">Login</h3>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <label>Email</label><br />
                <input {...register("email", { required: true })} type="email" placeholder='Enter Your Email' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                </div>
                <div className='space-y-2' >
                <label>Password</label><br />
                <input {...register("password", { required: true })} type="password" placeholder='Password' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                </div>
                <div className='flex justify-around'>
                <button className='bg-pink-500 px-4 py-1 border rounded-md border-none ' type='submit'>Login</button>
                <p>not regitered?<Link className='text-blue-600 underline' to={'/SignUp'}>SignUp</Link></p>
                </div>
            </div>
            </form>
        </div>
        </dialog>
    </div>
  )
}

export default Login