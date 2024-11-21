import React from 'react'
import './Header.css'
import { IoSearchSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdExpandMore } from "react-icons/md";
function Header() {
  return (
    <div className='header'>
        <img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" alt="airbnblogo" className='header_icon' />

        <div className='header_center'>
            <input type="text" />
            <IoSearchSharp />
        </div>

        <div className='header_right'>
            <p>Become a host</p>
            <FaGlobe />
            <MdExpandMore />
            <VscAccount />

        </div>
    </div>
  )
}

export default Header