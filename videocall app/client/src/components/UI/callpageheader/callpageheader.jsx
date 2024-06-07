import React from "react";
import { FaUsers } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
const callpageheader = ({ setmessenger, messagealert, messenger, setmessagealert }) => {
  let isVisible = setmessenger;
  const currentDate = new Date();
  const time = new Intl.DateTimeFormat("default", { hour: "numeric", minute: "numeric" }).format(
    currentDate
  );
  const open = () => {
    isVisible(true);
  };
  const send = () => {
    window.location.href = "/";
  };
  let interval=null;
  return (
    <div className="transition-all h-10 bg-white absolute w-[100vw] md:w-[35vw] top-0 right-0  md:rounded-bl-xl p-2 ">
      <div className="icon flex justify-between items-center h-[100%] text-slate-800">
        <FaUsers size={30} className="cursor-pointer hover:bg-slate-200 hover:rounded-lg " />
        <div className="message relative">
          <FaMessage
            onClick={open}
            size={30}
            className="cursor-pointer  hover:bg-slate-200 hover:translate-y-1 transition-all"
          />
          {messagealert && (
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-green-600 rounded-full text-white flex justify-center items-center">
              1
            </div>
          )}
        </div>
        <div className="time font-bold hover:bg-slate-200 hover:rounded-lg "> {time} </div>
        <CgProfile
          onClick={send}
          size={30}
          className="cursor-pointer hover:bg-slate-200 hover:rounded-lg "
        />
      </div>
    </div>
  );
};

export default callpageheader;
