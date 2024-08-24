import React from 'react'
import { NavLink } from 'react-router-dom'

const Navabr = () => {
  return (
    <nav className='border-2 '>
      <ul className='flex justify-around items-center h-10'>
        <div className='font-extrabold text-2xl'>Pass<span className='text-green-400'>Sphere</span></div>
        <div className='flex justify-around  items-center w-100 '> 
          <NavLink className={(e)=>{return e.isActive? "transition duration-300 overline decoration-green-300 decoration-4 ":"transition-all hover:font-semibold"}}  to="/">Home</NavLink>
          <NavLink className={(e)=>{return e.isActive? "transition duration-300 overline decoration-green-300 decoration-4 ":"transition-all hover:font-semibold"}}  to="/manager">Manager</NavLink>
          <NavLink className={(e)=>{return e.isActive? "transition duration-300 overline decoration-green-300 decoration-4 ":"transition-all hover:font-semibold"}}  to="/about">About</NavLink>

        </div>
      </ul>
    </nav>
  )
}

export default Navabr
