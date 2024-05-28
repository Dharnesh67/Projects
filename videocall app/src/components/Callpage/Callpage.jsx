import React from 'react'

const Callpage = () => {
  const title=location.pathname.replace('/','');
  return (
    <div>
   <h1 className='text-5xl'>{title}</h1>
    </div>
  )
}

export default Callpage
