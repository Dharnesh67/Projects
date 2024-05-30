import React from 'react'
import { ImCross } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoCopy } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
const meetinginfo = (props) => {
  return (
    <div>
      <div className="meetingblock absolute top-[50px] w-[60vw] md:left-[50px] md:w-[32vw]   rounded-md p-[25px] bg-white a text-slate-700 text-sm ">
        <div className="meetingheader font-semibold flex items-center justify-between">
          <h2 className=' md:text-md '>Your Meet Is Ready</h2>
          <ImCross className='cursor-pointer' />
        </div>
        <button className='bg-green-600 md:text-sm md:px-2 md:py-2 rounded-full text-white flex items-center gap-2 font-semibold my-3 mx-0'>
          <FaUser/>
          Add Others</button>
          <p className='info md:text-lg'>or share meet to others using link</p>
          <div className="link flex items-center justify-evenly  bg-slate-200 rounded-md p-2 gap-2">
            <span className='border-2 border-slate-300 rounded-lg w-[70%]  flex-1 p-2 '>Meetlink</span>
            <IoCopy className='cursor-pointer' size={20}/>
          </div>
          <div className="permission w-[100%] flex items-center gap-2  justify-center">
            <div className="ico text-blue-500"><MdAdminPanelSettings size={30}/></div>
            <div className="txt text-[10px] md:text-sm m-2">people who use this meeting link must get your permission before they can join.</div>
          </div>
          <div className="smalltext">Joined as id: {props.title}</div>
      </div>
    </div>
  )
}

export default meetinginfo
