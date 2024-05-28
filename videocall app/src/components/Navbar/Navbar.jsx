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
        <div className='h-[6vh] flex border-b-2 shadow-lg shadow-sky-200  w-screen justify-between items-center p-4'>
            <div className="left text-5xl  md:text-6xl text-sky-600 mx-5"><IoMdVideocam /></div>
            <div className="right ">

                <div className="icons flex gap-5">
                    <div className="timedate flex gap-3"> <div className="time text-slate-500 text-sm md:text-lg">{timestamp}</div>
                        <div className="date text-slate-500 text-sm md:text-lg">{date}</div></div>
                    <MdOutlineMessage className='md:text-3xl text-xl' />
                    < IoMdSettings className='md:text-3xl text-xl' />
                    <FaUser className='md:text-3xl text-xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
