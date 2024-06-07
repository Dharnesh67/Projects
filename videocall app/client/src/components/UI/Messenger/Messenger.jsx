import React, { useState } from "react";
import { FaUserFriends, FaComments, FaPaperPlane } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Messenger = ({ setmessenger, sendmsg, messagelist }) => {
  const [msg, setmsg] = useState("");

  const close = () => {
    setmessenger(false);
  };

  const handlechange = (e) => {
    setmsg(e.target.value);
  };

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      sendmsg(msg);
      setmsg("");
    }
  };

  const handlesendmsg = () => {
    sendmsg(msg);
    setmsg("");
  };

  return (
    <div className="message flex flex-col h-[92vh] bg-gray-100 w-[300px] absolute right-0 z-10">
      <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div className="text-lg font-bold">Messenger</div>
        <button onClick={close} className="text-lg font-bold">
          <ImCross />
        </button>
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
          {messagelist.map((item, index) => (
            <div key={index} className="message-item mb-2">
              <div className="sender flex justify-between text-sm text-gray-500">
                <span>{item.user}</span>
                <small>{new Date(item.time).toLocaleTimeString()}</small>
              </div>
              <p className="text-gray-800">{item.msg}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-200 flex items-center">
        <input
          type="text"
          className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Send message to everyone"
          value={msg}
          onChange={handlechange}
          onKeyDown={handlekeydown}
        />
        <button
          onClick={handlesendmsg}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Messenger;
