import React from "react";
// import B from "../utils/button";
import Button from "../utils/Button1";
import { IoHome, IoSendSharp } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import { CiSaveDown2 } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { useState } from "react";
import Button2 from "../utils/Button2";
import { chatSession } from "../gemini";
import { marked } from 'marked';
const Chatpage = () => {
  const [input, setinput] = useState('')
  const [output, setoutput] = useState('')
  const handlesend = async () => {
    const prompt="the output should be structured and specific output for the given input also if needed include the text formatting and the text should be in the form of a paragraph also do not use any ** thing for the text formatting "
    const response = await chatSession.sendMessage(input);
    let message = response.response.text();
    setoutput(message)
  }
  return (
    <div>
      <div className="bg-slate-900 h-screen text-white flex">
        <div className="sidebar border-r border-gray-500 h-full md:w-1/3  sm:w-1/2 lg:w-1/4">
          <div className="upperside h-full ">
            <div className="uppersidetop flex justify-around items-center pt-2 ">
              <img src="openai.png" alt="" className="invert" width={45} />
              <p className="lg:text-5xl md:text-4xl ">CHATBOT</p>
            </div>
            <div className="mid flex flex-col justify-between  h-[90%] mt-5">
              <div className="uppersidemid border-t  p-5 flex justify-center items-center ">
                <Button />
                {/* <Button2/> */}
              </div>
              <div className="uppersidebottom border-t p-2 flex flex-col  justify-start items-center h-full gap-2 ">
                <div className="query flex items-center bg-transparent p-3 w-full  rounded-lg  gap-2  border-x-2  border-x-white border-y border-y-slate-700">
                  <div className="icon">
                    <FaMessage />
                  </div>
                  <div className="msg">Hello</div>
                </div>
              </div>
              <div className="lowerside border-t-2 p-2  text-xl">
                <div className="item flex  items-center gap-5 m-3 cursor-pointer ">
                  <IoHome />
                  <div>Home</div>
                </div>
                <div className="item flex  items-center gap-5 m-3 cursor-pointer">
                  <CiSaveDown2 />
                  <div>Saved</div>
                </div>
                <div className="item flex items-center gap-5 m-3 cursor-pointer">
                  <GiUpgrade />
                  <div>Upgrade Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right  h-full w-full p-5 flex flex-col items-center">
          <div className="chatbox h-full flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {/* UserInput */}
            {input!='' && <div className="userinput rounded-lg flex items-start justify-between gap-2 bg-slate-950 p-2">
              <img src="male.svg" alt="img" className="w-16" />
              <p className="text mt-2">
               {input}
              </p>
            </div>}
           {output!='' && <div className="chatbotoutput rounded-lg flex items-start justify-between gap-2 bg-cyan-950 p-2">
              <img src="robott.png" alt="img" className="w-16" />
              <p className="text mt-2">
                {output}
              </p>
            </div>}
          </div>

          <div className="chatfooter bottom-0 lg:w-2/3 md:w-full">
            <div className="input bg-gray-800 rounded-lg flex justify-between items-center p-2 gap-2">
              <div className="text w-full">
                <input
                  onChange={(e) => {
                    setinput(e.target.value)
                  }}
                  className="w-full bg-transparent p-2"
                  type="text"
                  placeholder="Send Your Message..."
                />
              </div>
              <div onClick={handlesend} className="send text-2xl cursor-pointer">
                <IoSendSharp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
