import React from 'react'
import icon from "../assets/images/icon.png"
import "./Navbar.css"
import image from "../assets/images/Rectangle.png"

function Navbar() {
  return (
    <div className='mt-5'>
        <div className='d-flex justify-content-center pt-3 pt-lg-3 pb-4'>
            <img src={icon}/>
        </div>
        <p className='text-white text-center p-0 title-text'>SURYA VISUAL MEDIA</p>
        <div className='navbar-custom d-flex justify-content-around mt-5 pt-4'>
            <p className='navitem'>HOME</p>
            <p className='navitem'>ABOUT US</p>
            <p className='navitem'> SERVICES</p>
            <p className='navitem'>GALLERY</p>
            <p className='navitem'>CONTACT</p>
        </div>
        <div className='d-flex justify-content-center mt-3 mt-lg-5'>
            <img src={image} className='mt-3 mt-lg-5  home-image'/>
        </div>
    </div>
  )
}

export default Navbar