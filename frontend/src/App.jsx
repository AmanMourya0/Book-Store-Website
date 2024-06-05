import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom';
import Course from './course/Course';
const App = () => {
  return (
    <>
    <div className=' text-black dark:bg-slate-900 dark:text-white light:bg-slate-100 '>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Courses" element={<Course/>} />
    </Routes>
    </div>
    </>
  )
}

export default App