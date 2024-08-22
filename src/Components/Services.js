import React from 'react'
import event from '../assets/images/eventmanagement.png'
import "./Services.css"
import led from '../assets/images/led.png'
import film from '../assets/images/film.png'

function Services() {
  return (
    <div className='mt-5'>
        <p className='about-heading text-left mx-auto'>
            SERVICES
        </p>
        <div className='services mx-auto'>
            <div className=' d-flex flex-wrap px-0 justify-content-center justify-content-md-between mx-lg-auto mt-4 mx-auto'>
                <div className='service d-flex flex-column align-items-center my-3 '>
                    <img src={film} className='mt-2 mx-2'/>
                    <p className='service-heading ml-3 mr-auto mt-3 mb-2'>Film Unit Services</p>
                    <p className='service-text ml-3 mr-auto mb-2'>Event Management</p>
                    <button className='ml-3 mr-auto mb-2 btn service-btn'>Explore</button>
                </div>
                <div className='service d-flex flex-column align-items-center my-3 mx-4'>
                    <img src={led} className='mt-2 mx-2'/>
                    <p className='service-heading ml-3 mr-auto mt-3 mb-2'>LED Wall Support</p>
                    <p className='service-text ml-3 mr-auto mb-2'>Event Management</p>
                    <button className='ml-3 mr-auto mb-2 btn service-btn'>Explore</button>
                </div>
                <div className='service d-flex flex-column align-items-center my-3'>
                    <img src={event} className='mt-2 mx-2'/>
                    <p className='service-heading ml-3 mr-auto mt-3 mb-2'>Event Management</p>
                    <p className='service-text ml-3 mr-auto mb-2'>Event Management</p>
                    <button className='ml-3 mr-auto mb-2 btn service-btn'>Explore</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services