import React from 'react'
import { useState } from 'react' 
//  random image generator 
const page = () => {
    const [image, setimage] = useState()
    const f = async () => {
        let res= await fetch('https://picsum.photos/200/300')
        console.log(res.url)
        setimage(res.url)
        console.log("button clicked")
    }
  return (
    <div>
      <button className='bg-red-500 rounded-md p-10' onClick={f} >Button</button>
      <img src={image} alt="1" />
    </div>
  )
}

export default page
