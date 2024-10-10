import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in-up"
         data-aos-duration="1000" >
          <a href='https://www.google.com/' target='_blank' className="items"><FaInstagramSquare className='icons' /></a>
          <a href='https://www.google.com/' target='_blank' className="items"><FaLinkedin  className='icons'/>
          </a > 
          <a href='' target='_blank' className="items"><FaSquareXTwitter  className='icons'/>
          </a > 
          <a  href='' target='_blank' className="items"><FaGithub className='icons'/>
          </a > 
          <a href='mailto:fouzianazneen1216@gmail.com' target='_blank' className="items"><IoMdMail className='icons'/>
          </a >
        </div>
      </div>
    </>
  )
}

export default Contact
