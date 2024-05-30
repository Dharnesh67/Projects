import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { ImPhoneHangUp } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { PiPresentationBold } from "react-icons/pi";
import { FaClosedCaptioning } from "react-icons/fa6";
const callpagefooter = () => {
  return (
    <div className='h-[8vh] bg-white absolute w-screen bottom-0 flex flex-1 items-center justify-between p-2 font-bold text-[10px] md:text-lg'>
       <div className="left-item">
        <div className="iconblock flex items-center gap-2">
          Meeting details
          <IoIosArrowUp/>
        </div>
       </div>
       <div className="center-item">
        <div className="iconblock flex items-center gap-2 md:gap-5">
         <div className="div p-3 border-2 border-slate-600 rounded-full text-slate-800  cursor-pointer hover:-translate-y-2 transition-all text-sm md:text-2xl "> <FaMicrophone /></div>
         <div className="div p-3 border-2 border-red-600 rounded-full text-red-600 cursor-pointer hover:-translate-y-2 transition-all text-[12px] md:text-2xl "> <ImPhoneHangUp /></div>
         <div className="div p-3 border-2  border-slate-600 rounded-full text-slate-800 cursor-pointer hover:-translate-y-2 transition-all text-sm md:text-2xl "> <FaVideo /></div>
        </div>
       </div>
       <div className="right-item">
        <div className="iconblock flex items-center gap-5 text-[12px] md:text-lg ">
        <div className=" cursor-pointer caption flex  flex-col justify-center items-center">
          <FaClosedCaptioning/>
          Captions
        </div>
        <div className=" cursor-pointer caption flex  flex-col justify-center items-center">
         <PiPresentationBold />
          Present now
        </div>
        </div>
       </div>
    </div>
  )
}

export default callpagefooter
