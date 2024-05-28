import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
const callpageheader = () => {
  const currentDate = new Date();
  const time = new Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric' }).format(currentDate);
  console.log(time); // Output: "HH:MM", 24-hour format
  return (
    <div className='transition-all h-10 bg-white absolute w-[100vw] md:w-[30vw] top-0 right-0  md:rounded-bl-xl p-2'>
      <div className="icon flex justify-between items-center h-[100%] text-slate-800">
        <FaUsers size={30} className='cursor-pointer hover:bg-slate-200 hover:rounded-lg ' />
      <div className="message relative">
      <FaMessage size={30} className='cursor-pointer hover:text-green-600 hover:bg-slate-200 hover:rounded-lg ' />
      <span className='alert absolute bg-green-500 w-[10px] h-[10px] rounded-full top-0 right-0 '></span>
      </div>
        <div className="time font-bold hover:bg-slate-200 hover:rounded-lg "> {time} </div>
        <CgProfile size={30} className='cursor-pointer hover:bg-slate-200 hover:rounded-lg ' />
      </div>
    </div>
  )
}

export default callpageheader
