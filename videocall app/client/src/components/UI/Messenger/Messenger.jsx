import React from "react";
import { FaUserFriends, FaComments, FaPaperPlane } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Messenger = () => {
  const close = () => {
   let a=document.querySelector('.message')
   let b=document.querySelector('.btn')
   b.addEventListener('click',()=>{
    console.log('clicked')
     a.style.display='none'
   })
  };
  return (
    <div className="message flex flex-col h-[92vh] bg-gray-100 w-[300px] absolute right-0 z-10">
      <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div className="text-lg font-bold">Messenger</div>
        <button onClick={close} className="text-lg font-bold"><ImCross className="btn"/></button>
      </div>
      <div className="flex justify-around bg-gray-200 py-2">
        <div className="tab flex items-center cursor-pointer p-2 text-gray-600 hover:text-gray-900">
          <FaUserFriends className="mr-2" />
          <p>People (1)</p>
        </div>
        <div className="tab flex items-center cursor-pointer p-2 text-gray-600 hover:text-gray-900 active:text-blue-500">
          <FaComments className="mr-2" />
          <p>Comments (1)</p>
        </div>
      </div>
      <div className="flex-grow p-4 overflow-auto">
        <div className="bg-white p-3 rounded-lg shadow-md mb-4">
          <div className="sender flex justify-between text-sm text-gray-500">
            <span>You</span>
            <small>10pm</small>
          </div>
          <p className="text-gray-800">Here comes an actual message</p>
        </div>
      </div>
      <div className="p-4 bg-gray-200 flex items-center">
        <input
          type="text"
          className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Send message to everyone"
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Messenger;
