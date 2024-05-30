import React from 'react'
import Navbar from '../Navbar/Navbar'
import { IoMdVideocam } from "react-icons/io";
import { Link } from 'react-router-dom';
const Homepage = () => {
  const send = (id) => {
    console.log('clicked')
  }
  return (
    <div>
      <Navbar />
      <div className="content flex flex-col justify-center items-center h-[95vh] w-screen text-sm md:text-lg"> 
        <div className="heading text-lg md:text-3xl w-screen justify-center flex font-bold  text-slate-800 "><p className='text-center mx-10'>Crystal Clear Conversations, Anytime, Anywhere. Your Window to Loved Ones and Business.</p>
        </div>
        <div className="buttons my-5 flex justify-evenly w-screen" >
          <button className=' flex items-center gap-3 md:px-2 md:py-2 rounded-sm font-bold bg-blue-400 hover:bg-blue-500'>
          <IoMdVideocam/>  New Meeting
          </button>
          <div className="input flex  gap-2 ">
            <input  type="text" placeholder='Enter Meeting Code' className='rounded-sm border border-teal-400 text-center' />
            <button onClick={send} className='bg-blue-400 md:px-3  rounded-sm font-bold hover:bg-blue-500 '>Join</button>
          </div>
          
        </div>
      </div>
      <footer
      class="absolute  w-screen bg-blue-500 text-slate-800 font-bold h-[4vh] bottom-0 flex items-center justify-center text-sm md:text-lg"
    >
      &copy;Developed By Dharmesh Raikwar
    </footer>
    </div>
  )
}

export default Homepage
