import React from 'react'
import group from "../assets/images/Group.png"
import group1 from "../assets/images/Group(1).png"
import group2 from "../assets/images/Group(2).png"
import "./Decoration.css"

function Decoration() {
  return (
    <div className='mt-5'>
        <img src={group} className='decor-images pl-3 pl-lg-5'/>
        <div className='decor-text'>
            Making <span style={{color: '#B74447'}}>events</span> come alive
        </div>
        <div className='d-flex justify-content-between px-3 px-lg-5'>
            <img src={group1} className='decor-images'/>
            <img src={group2} className='decor-images'/>
        </div>
    </div>
  )
}

export default Decoration