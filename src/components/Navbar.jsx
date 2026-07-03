import React, { useState } from "react";
import { FaAlignJustify, FaChevronDown, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/Seven_Hills_Logo.png";


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  co

  return (
    <div className="bg-white border-b border-b-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-0">
        <div>
          <img src={Logo} alt="logo" className="w-12 lg:w-25" />
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row justify-end py-1">
            <div className="flex space-x-2 items-center">
              <FaEnvelope className="text-sky-500" />
              <span>hr@sevenhillsfs.com</span>
            </div>
            <div className="flex space-x-2 items-center ml-8">
              <FaPhoneAlt className="text-sky-500" />
              <span>+9140 35511829</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4 border-t border-t-gray-300 py-2">
            <a href="" className="flex items-center space-x-1 font-medium px-3">Home</a>
            <div className="group">
              <a href="" className="flex items-center space-x-1 font-medium px-3">
                <span>About Us</span>
                <FaChevronDown className="text-xs" />
              </a>
              <div className="absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Company Profile</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">History</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Leadership</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Accolades</a>
              </div>
            </div>
            <div className="group">
              <a href="" className="flex items-center space-x-1 font-medium px-3">
                <span>Industries</span>
                <FaChevronDown className="text-xs" />
              </a>
              <div className="absolute hidden group-hover:block rounded-md w-50 bg-white shadow-lg">
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Aviation</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Pharma & Healthcare</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Information Technology</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Manufacturing</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Retailing</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Hospitality</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Finance</a>
              </div>
            </div>
            <div className="group">
              <a href="" className="flex items-center space-x-1 font-medium px-3">
                <span>Services</span>
                <FaChevronDown className="text-xs" />
              </a>
              <div className="absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
                <a href="" className="block px-4 py-2 hover:bg-gray-100">House Keeping</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Technical</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Pest Control</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">General Staffing</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Security</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Man Power Supply</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Office Support</a>
              </div>
            </div>
            <div className="group">
              <a href="" className="flex items-center space-x-1 font-medium px-3">
                <span>Locations</span>
                <FaChevronDown className="text-xs" />
              </a>
              <div className="absolute hidden group-hover:block rounded-md w-44 bg-white shadow-lg">
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Shamshabad</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Turkapally</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Chandan Veli</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Secunderabad</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Hyderabad</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Telangana</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Andhra Pradesh</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Karnataka</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Tamil Nadu</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">PAN India</a>
              </div>
            </div>
            <a href="" className="flex items-center space-x-1 font-medium px-3">Clients</a>
            <a href="" className="flex items-center space-x-1 font-medium px-3">Gallery</a>
            <a href="" className="flex items-center space-x-1 font-medium px-3">Careers</a>
            <a href="" className="flex items-center space-x-1 font-medium px-3">Contact Us</a>
          </div>
        </div>
        <div className="">
          <button className="px-5 py-2 hidden lg:block bg-sky-500 text-white rounded-full hover:bg-sky-600 cursor-pointer">Get a Quote</button>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden">
            {" "}{mobileMenu ? (<span className="font-bold text-xl">X</span>) : (<FaAlignJustify/>)}
          </button>
        </div>
      </div>
      { mobileMenu && (
        <div className={`${mobileMenu ? "block" : "hidden"} lg:hidden`}>
          <div className="py-3 flex flex-col space-y-2 max-h-[80vh] pl-4 overflow-y-auto">
            <a href="">Home</a>
            <div>
              <button onClick={() => setAboutDropdown(!aboutDropdown)} className="flex items-center">
                <span>About Us</span>
                <FaChevronDown className="text-xs ml-2" />
              </button>
              { aboutDropdown && (
                <div className="flex flex-col space-y-2">
                  <a href="" className="pl-4">Company Profile</a>
                  <a href="" className="pl-4">History</a>
                  <a href="" className="pl-4">Leadership</a>
                  <a href="" className="pl-4">Accolades</a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIndustriesDropdown(!industriesDropdown)}
                className="flex items-center"
              >
                <span>Industries</span>
                <FaChevronDown className="text-xs ml-2" />
              </button>
              { industriesDropdown && (
                <div className="flex flex-col space-y-2">
                  <a href="" className="pl-4">Aviation</a>
                  <a href="" className="pl-4">Pharma & Healthcare</a>
                  <a href="" className="pl-4">Information Technology</a>
                  <a href="" className="pl-4">Manufacturing</a>
                  <a href="" className="pl-4">Retailing</a>
                  <a href="" className="pl-4">Hospitality</a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center"
              >
                <span>Services</span>
                <FaChevronDown className="text-xs ml-2" />
              </button>
              { servicesDropdown && (
                <div className="flex flex-col space-y-2">
                  <a href="" className="pl-4">House Keeping</a>
                  <a href="" className="pl-4">Technical</a>
                  <a href="" className="pl-4">Pest Control</a>
                  <a href="" className="pl-4">General Staffing</a>
                  <a href="" className="pl-4">Security</a>
                  <a href="" className="pl-4">Man Power Supply</a>
                  <a href="" className="pl-4">Office Support</a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setLocationsDropdown(!locationsDropdown)}
                className="flex items-center"
              >
                <span>Locations</span>
                <FaChevronDown className="text-xs ml-2" />
              </button>
              { locationsDropdown && (
                <div className="flex flex-col space-y-2">
                  <a href="" className="pl-4">Shamshabad</a>
                  <a href="" className="pl-4">Turkapally</a>
                  <a href="" className="pl-4">Chandan Veli</a>
                  <a href="" className="pl-4">Secunderabad</a>
                  <a href="" className="pl-4">Hyderabad</a>
                  <a href="" className="pl-4">Telangana</a>
                  <a href="" className="pl-4">Andhra Pradesh</a>
                  <a href="" className="pl-4">Karnataka</a>
                  <a href="" className="pl-4">Tamil Nadu</a>
                  <a href="" className="pl-4">PAN India</a>
                </div>
              )}
            </div>
            <div>Clients</div>
            <div>Gallery</div>
            <div>Careers</div>
            <div>Contact Us</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;