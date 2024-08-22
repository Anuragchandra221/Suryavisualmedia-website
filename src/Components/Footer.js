import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import insta from "../assets/images/insta.png"
import yt from "../assets/images/yt.png"
import React from 'react'
import { faPhone } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className='d-flex justify-content-between px-2 px-lg-5 pt-3'>
        <div className="">
            <img src={insta} className="mr-3" style={{width: '20px'}}/>
            <img src={yt} style={{width: '20px'}}/>
        </div>
        <div className="" style={{color: '#fff'}}>
            <FontAwesomeIcon className="mr-2" icon={faPhone} style={{fontSize: '20px', color: '#fff'}} />
            9999999999
        </div>
    </div>
  )
}

export default Footer