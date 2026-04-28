import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
      <div>
        <img src="src/assets/Seven_Hills_Logo.png" alt="logo" className='w-25' />
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-end py-1'>
          <div className='flex space-x-2 items-center'>
            <FaEnvelope className='text-sky-500'/>
            <span>info@sevenhillsfs.com</span>
          </div>
          <div className='flex space-x-2 items-center ml-8'>
            <FaPhoneAlt className='text-sky-500'/>
            <span>(123) 456-7890</span>
          </div>
        </div>
        <div className='flex space-x-4 border-t border-t-gray-300 py-1'>
          <a href="">Home</a>
          <div className='group'></div>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Clients</a>
          <a href="">Gallery</a>
          <a href="">Careers</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div>
        <button className='px-5 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 cursor-pointer'>Get a Quote</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar