import React, { useState } from "react";
// import Button from "../utils/Button1";
import Button2 from "../utils/Button2";
import { IoHome, IoSendSharp } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import { CiSaveDown2 } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { chatSession } from "../gemini";
import Markdown from 'react-markdown'
import Cube from "./Cube";
import { Link } from "react-router-dom";
import {  UserButton } from '@clerk/clerk-react';

const Chatpage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Welcome to the chatbot!",
      isbot: true,
    },
  ]);

  const handleSend = async () => {
    const prompt = "use the previous message to generate a response if it is available or ignore it if it is not available\n";
    const prevmessages = messages.map((message) => message.text).join("\n");
    const response = await chatSession.sendMessage(input + prompt + 'previous message:' + prevmessages);
    let message = response.response.text(); // await the text() function
    setMessages([
      ...messages,
      { text: input, isbot: false },
      { text: message, isbot: true },
    ]);

    setInput(""); // Clear input after sending
  };

  return (
    <div>
      <div className="fixed z-0  flex justify-center items-center" >
        <Cube />
      </div>
      <div className=" h-screen text-white flex absolute w-screen">
        {/* Sidebar */}
        <div className="sidebar border-r border-gray-500 h-full md:w-1/3 sm:w-1/2 lg:w-1/4">
        
          <div className="upperside h-full ">
              
            <Link to={`/`}> <div className="uppersidetop flex justify-around items-center pt-2 ">
              <img src="openai.png" alt="OpenAI logo" className="invert" width={45} />
              <p className="lg:text-5xl md:text-4xl">CHATBOT</p>
            </div></Link>
            <div className="mid flex flex-col justify-between h-[90%] mt-5">
              <div className="uppersidemid border-t p-5 flex justify-center items-center">
                <div onClick={
                  () => {
                    setMessages([
                      {
                        text: "Welcome to the chatbot!",
                        isbot: true,
                      }
                    ])
                  }
                }>
                  <Button2 />
                </div>
              </div>
              <div className="uppersidebottom border-t p-2 flex flex-col justify-start items-center h-full gap-2">
                <div className="query flex items-center bg-transparent p-3 w-full rounded-lg gap-2 border-x-2 border-x-white border-y border-y-slate-700">
                  <div className="icon">
                    <FaMessage />
                  </div>
                  <div className="msg">Hello</div>
                </div>
              </div>
              <div className="lowerside border-t-2 p-2 text-xl">
                <Link to={`/`}>
                  <div className="item flex items-center gap-5 m-3 cursor-pointer">
                    <IoHome />
                    <div>Home</div>
                  </div>
                </Link>
                <div className="item flex items-center gap-5 m-3 cursor-pointer">
                  <CiSaveDown2 />
                  <div>Saved</div>
                </div>
                <div className="item flex items-center gap-5 m-3 cursor-pointer">
                  <GiUpgrade />
                 <Link to={`https://buy.stripe.com/test_00g00qa149pq9byfYZ`}>
                 <div>Upgrade Now</div>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chatbox */}
        <div className="right h-full w-full  flex flex-col items-center">
          <div className="border border-white w-full p-2 mb-1">
          <UserButton />
          </div>
          <div className="chatbox h-full flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 font-extrabold">
            {messages.map((message, index) => {
              if (!message.isbot) {
                return (
                  <div
                    key={index}
                    className="userinput rounded-lg flex items-start justify-between gap-2 border border-white p-2 bg-[#121a21] bg-opacity-50"
                  >
                    <img src="male.svg" alt="User avatar" className="w-16" />
                    <p className="text mt-2">
                      <Markdown>{message.text}</Markdown>
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="chatbotoutput rounded-lg flex items-start justify-between gap-2 border border-white p-2 bg-[#121a21] bg-opacity-50"
                  >
                    <img src="robott.png" alt="Bot avatar" className="w-16" />
                    <p className="text mt-2"> <Markdown>{message.text}</Markdown></p>
                  </div>
                );
              }
            })}
          </div>

          {/* Chat input */}
          <div className="chatfooter bottom-0 lg:w-2/3 md:w-full">
            <div className="input bg-gray-800 rounded-lg flex justify-between items-center p-2 gap-2">
              <div className="text w-full">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-transparent p-2"
                  type="text"
                  placeholder="Send Your Message..."
                />
              </div>
              <div onClick={handleSend} className="send text-2xl cursor-pointer">
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
