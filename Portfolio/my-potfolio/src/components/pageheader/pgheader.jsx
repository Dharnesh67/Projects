import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
const PG = (props) => {
  // const { TITLE, logo } = props
  let title = props.title.replace('/', '');
  return (
    <div className='pgheader'>
      <h1>{title}</h1>
      <FaReact className='logo' size={50}/>
    </div>
  )
}

export default PG
