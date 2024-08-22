import React from 'react'
import "./Footer2.css"
import icon from "../assets/images/icon.png"

function Footer2() {
  return (
    <div className='mt-5 footer-2 mx-auto' >
        <div className='row d-flex justify-content-center '>
            <div className='col-12 col-md-4 d-flex justify-content-center flex-column align-items-center'>
                <img src={icon} className='footer2-img'/>
                <p className='text-white mt-2 footer-heading'>SURYA VISUAL MEDIA</p>
            </div>
            <div className='col-12 col-md-8 d-flex justify-content-start align-items-start'>
                <p className='footer-text' >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                </p>
            </div>
        </div>
        <div className='footer-text mt-5 d-flex  flex-wrap justify-content-center justify-content-md-between'>
          <div>
            <p>Address</p>
            <p>Veemarkkade 8</p>
            <p>45453</p>
          </div>
          <div className='mx-5'>
            <p>Telephone 2323</p>
            <p>Fax 34243</p>
            <p>mail@mail.com</p>
          </div>
          <div className='mb-3 mt-2 mt-md-0' style={{color: "#B74447"}}>
            <i className="fa-brands fa-instagram mr-3"></i>
            <i className="fa-brands fa-facebook mx-3"></i>
            <i className="fa-brands fa-youtube mx-3"></i>
            <i className="fa-brands fa-x ml-3"></i>

          </div>
        </div>
    </div>
  )
}

export default Footer2