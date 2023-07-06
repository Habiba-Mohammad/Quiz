import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

const Nav = () => {
  return (
<>
<div className={` m-2 p-2 text-center sm:flex-col lg:flex-grow  lg:flex lg:items-center lg:w-auto lg:text-3xl bg-amber-00`} >
        <div className="text-xl  lg:flex-grow">
          <Link to="/" className="block mt-4 
lg:inline-block lg:mt-0 text-white-200 mr-4 
 text-blue-500 max-w-xs transition duration-300 ease-in-out hover:scale-150">
            Home 
          </Link>
       <Link to="About" className="block mt-4 
lg:inline-block lg:mt-0 text-white-200 mr-4 
 text-blue-500 max-w-xs transition duration-300 ease-in-out hover:scale-150">
            About Us
          </Link>
  <Link to="ContactUs" className="block mt-4 
lg:inline-block lg:mt-0 text-white-200 mr-4 
 text-blue-500 max-w-xs transition duration-300 ease-in-out hover:scale-150">
            Contact Us
          </Link>
        </div>
        <div>
        </div>
</div>
</>
  )
}

export default Nav