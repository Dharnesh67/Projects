import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between body bg-frnt sticky mb-10 py-5'>
      {/* <div className="title p-7 font-bold  text-5xl font-sans flex items-center justify-center"> MY Taskido APP</div> */}
      <div className="logo">
        <span className='font-bold text-xl mx-8'>TASKiDO</span>
      </div>
      <ul className='flex gap-8 mx-9 justify-end '>
        <li className='cursor-pointer hover:font-bold transition-all  '>HOME</li>
        <li className='cursor-pointer hover:font-bold transition-all  '>TASKS</li>
      </ul>
    </nav>
  )
}

export default Navbar
