import React from 'react'
import choose from '../assets/SliderImages/1.jpg'

const Choose = () => {
  return (
    <div className='py-20 bg-gray-100 '>
      <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-3xl font-bold mb-4 px-4 lg:px-0'>Why Choose <span className='text-sky-500'>Seven Hills?</span></h2>
          <p className='max-w-lg px-4 lg:px-0'>We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
          <div className='px-4 lg:px-0 mt-8 mb-6'>
            <h3  className='text-xl font-bold'>Trained Professionals</h3>
            <p className='text-xs'>Our team consists of highly trained and certified professionals who are dedicated to providing top-notch service and support.</p>
          </div>
          <div className='px-4 lg:px-0 mt-8 mb-6'>
            <h3 className='text-xl font-bold'>Comprehensive Services</h3>
            <p className='text-xs'>We offer a wide range of services to meet all your facility management needs, from maintenance to operations.</p>
          </div>
          <div className='px-4 lg:px-0 mt-8 mb-6'>
            <h3 className='text-xl font-bold'>24/7 Support</h3>
            <p className='text-xs'>Our dedicated support team is available around the clock to address any issues or concerns you may have.</p>
          </div>
        </div>
        <div className='mt-6 lg:mt-0 px-4 lg:px-0 w-full lg:w-1/2 flex justify-center items-center'>
          <img src={choose} className='rounded-full object-cover' alt="Choose Us" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Choose