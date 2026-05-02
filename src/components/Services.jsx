import React from 'react'
import service1 from "../assets/SliderImages/1.jpg"
import service2 from "../assets/SliderImages/2.jpg"
import service3 from "../assets/SliderImages/3.jpg"
import service4 from "../assets/SliderImages/4.jpg"
import service5 from "../assets/SliderImages/5.jpg"
import service6 from "../assets/SliderImages/6.jpg"
import service7 from "../assets/SliderImages/7.jpg"

const services = [
  {
    id: 1,
    title: "House Keeping",
    image: service1,
    link: "",
    description: "Housekeeping services include cleaning, laundry, and other domestic tasks to maintain a clean and organized living space. These services can be provided on a regular basis or as needed, and may include tasks such as dusting, vacuuming, mopping, and organizing."
  },
  {
    id: 2,
    title: "Technical",
    image: service2,
    link: "",
    description: "Technical services include maintenance, repairs, and installations for various systems and equipment. Our team of skilled professionals ensures that your property's technical infrastructure is functioning optimally."
  },
  {
    id: 3,
    title: "Pest Control",
    image: service3,
    link: "",
    description: "Pest control services include identification, treatment, and prevention of various pests that may infest your property. Our team uses safe and effective methods to eliminate existing infestations and prevent future ones."
  },
  {
    id: 4,
    title: "General Staffing",
    image: service4,
    link: "",
    description: "General staffing services include providing trained personnel for various roles such as receptionists, security guards, maintenance staff, and more. We ensure that our staff is well-trained and professional to meet your specific needs."
  },
  {
    id: 5,
    title: "Security",
    image: service5,
    link: "",
    description: "Security services include providing trained security personnel to protect your property and ensure the safety of your residents and assets. Our security staff is equipped to handle various situations and maintain a secure environment."
  },
  {
    id: 6,
    title: "Man Power Supply",
    image: service6,
    link: "",
    description: "Man power supply services include providing skilled labor for various construction and maintenance projects. Our team of experienced workers ensures that your projects are completed efficiently and to the highest standards."
  },
  {
    id: 7,
    title: "Office Support",
    image: service7,
    link: "",
    description: "Office support services include administrative assistance, data entry, and other tasks to help your office run smoothly. Our team of professionals is dedicated to providing reliable and efficient support to meet your office needs."
  }
]

const Services = () => {

  return (
    <div  className='py-20 bg-cover bg-center' style={{ backgroundImage: `url('${service1}')` }}>
      <div className="max-w-7xl mx-auto">
        <h2 className='text-3xl font-bold mb-4'>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services