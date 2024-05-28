import React from 'react'
import { IoMdVideocam } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
    const currentDate = new Date();
    const [timestamp, setTimestamp] = React.useState(currentDate.toLocaleTimeString());
    React.useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            setTimestamp(currentDate.toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const date = currentDate.toLocaleDateString();
    return (
        <div className='h-[6vh] flex shadow-lg shadow-slate-400  w-screen justify-between items-center p-4 bg-teal-400 absolute z-40' >
            <div className="left text-5xl  md:text-6xl text-slate-900 mx-5 cursor-pointer"><IoMdVideocam /></div>
            <div className="right ">

                <div className="icons flex gap-5 text-slate-900  ">
                    <div className="timedate flex gap-3 text-slate-900 "> <div className="time  font-bold  text-sm md:text-lg">{timestamp}</div>
                        <div className="date font-bold   text-sm md:text-lg">{date}</div></div>
                    <MdOutlineMessage className='md:text-3xl text-xl cursor-pointer' />
                    < IoMdSettings className='md:text-3xl text-xl cursor-pointer' />
                    <FaUser className='md:text-3xl text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
