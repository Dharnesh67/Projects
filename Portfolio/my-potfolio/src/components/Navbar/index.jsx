import React from 'react';
import { useState, useEffect } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';
const data = [
  {
    id: 1,
    title: "Home",
    path: "/"
  },
  {
    id: 2,
    title: "About",
    path: "/about"
  },
  {
    id: 3,
    title: "Skills",
    path: "/skills"
  },
  {
    id: 4,
    title: "Resume",
    path: "/resume"
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact"
  }
]
const Navbar = () => {
  const [icon, seticon] = useState(false)
  const toggleicon = () => {
    seticon(!icon)
  }
  return (
    <>
      <div className="navbar">
        <div className="left"> <Link to={'/'} className='navbar_logo'>
          <FaReact size={40} />
        </Link> </div>
        <div className="right"><ul className={`menu ${icon?'active':''}`}>

          {data.map((item) => (

            <li key={item.id} className='menu_item'>
              <Link to={item.path} className='menu_link'>
                {item.title}
              </Link>
            </li>

          ))
          }
        </ul>
          <div className="navicon" onClick={toggleicon}>
            {
              icon ? <HiX size={40} /> : <FaBars size={40} />

            }
          </div>
        </div>

      </div>
      {/* </div> */}
    </>
  )
}

export default Navbar