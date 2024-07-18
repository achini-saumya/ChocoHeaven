import React from 'react';
import './Footer.css'
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div name='contact' className='fContainer'>
        <h1>Contact Us</h1>
        <div className='fContainer1'>
            <div className='fBox1'>
                <IoLocationSharp className='fIcon1' />
                <p>123 Main Street, Colombo <br/>Sri Lanka</p>

            </div>
            <div className='fBox1'>
                <MdEmail className='fIcon1' />
                <p>info@chocoheaven.com</p>
                <p>hr@chocoheaven.com</p>

            </div>
            <div className='fBox1'>
                <FaPhone className='fIcon1' />
                <p> +94 1122 200 200 - Sales and Services</p>
                <p> +94 7122 200 200 - Whatsapp </p>

            </div>

        </div>
        <hr></hr>

        <div className='fContainer2'>

            <div className='fBox3'>
                <FaFacebook className='fIcon2'/>
                <FaInstagram className='fIcon2'/>
                <FaTwitter className='fIcon2'/>
            </div>

            <div className='fBox2'>
            <p>&copy; 2024 chocoheaven. All rights reserved.</p>
            </div>       
        </div>
      </div>
         
    </>
  )
}

export default Footer;