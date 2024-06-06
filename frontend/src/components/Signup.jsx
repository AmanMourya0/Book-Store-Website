import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Login from './Login'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className='flex h-screen justify-center items-center '>
        <div className="w-[600px]">
        <div className="modal-box bg-white text-black dark:bg-black dark:text-white rounded-md p-10">
            <h1 className='text-2xl text-center font-extrabold mb-10'>Book Store</h1>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link>
            
            {/* <h3 className="font-bold text-lg">Login</h3> */}
            <div className='space-y-4'>
            <div className='space-y-2'>
                <label>Name</label><br />
                <input {...register("name", { required: true })} type="text" placeholder='Enter Your fullName' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                {errors.name && <span className='text-sm text-red-600'>*This field is required</span>}
                </div>
              <div className='space-y-2'>
                <label>Email</label><br />
                <input {...register("email", { required: true })} type="email" placeholder='Enter Your Email' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                {errors.email && <span className='text-sm text-red-600'>This field is required</span>}</div>
                <div className='space-y-2' >
                <label>Password</label><br />   
                <input {...register("password", { required: true })} type="password" placeholder='Password' className='bg-white px-6 py- w-80 border rounded-sm'/><br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}</div>
                <div className='flex justify-around py-3'>
                <button type="submit" className='bg-pink-500 px-4 py-1 border rounded-md border-none '>SignUp</button>
                <p>regitered?<button type="submit" className='text-blue-600 underline' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button></p><Login/>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup