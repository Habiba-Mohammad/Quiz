import React from 'react'
import mainImage from "../images/pngegg (4).png"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
   <>
  <h1 className=' mt-20  text-amber-500  font-bold text-center lg:text-6xl  '> Let's Quiz </h1>

   		<div className='lg:flex lg:flex-row sm:flex-col  lg:gap-60 '>

       <img className="relative right-50 " src={mainImage}/>

       <div className='flex ml-10 lg:flex-col w-96 gap-7 hover:ease-in duration-300 text-center  mr-40 mt-28 ' >
<Link   className=" w-22 font-bold lg:text-6xl  transition duration-500 ease-in-out 
                         hover:text-amber-500 transform 
                       hover:-translate-y-1 hover:scale-110 hover:font-bold
                        h-15  text-blue-500 lg:mt-10 lg:mb-10 " to="/English"> English</Link>

<Link className=" w-22 font-bold lg:text-6xl  transition duration-500 ease-in-out 
                         hover:text-amber-500 transform 
                       hover:-translate-y-1 hover:scale-110 hover:font-bold
                        h-15  text-blue-500  lg:mt-10 lg:mb-10" to="/Arabic"> Math  </Link>

<Link  className=" w-22 font-bold lg:text-6xl  transition duration-500 ease-in-out 
                         hover:text-amber-500 transform 
                       hover:-translate-y-1 hover:scale-110 hover:font-bold
                        h-15  text-blue-500 lg:mt-10 lg:mb-10" to="/IqQuiz"> Science  </Link>
</div>
    {/* <div className='ml-14 mt-56 font-bold text-blue-400 lg:text-4xl sm:text-l'> different quizes for children in Arabic,English and IQ</div> */}

    </div>
   </>
  )
}

export default Hero