import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaChevronDown, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/Seven_Hills_Logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const handleEmailClick = () => { window.location.href = "mailto:hr@sevenhillsfs.com"; };
  const handlePhoneClick = () => { window.location.href = "tel:+914035511829"; };

  return (
    <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 xl:px-6 2xl:px-8">
        <div className="flex items-center justify-between h-[114px] xl:h-[144px] gap-2 2xl:gap-4">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="logo-link flex items-center">
              <img src={Logo} alt="logo" className="w-[145px] sm:w-[170px] xl:w-[200px] 2xl:w-[220px] object-contain logo-image"/>
            </Link>
          </div>
          <div className="hidden xl:flex flex-grow flex-col justify-center ml-4 2xl:ml-6 overflow-visible">
            <div className="flex justify-end items-center text-[18px] pb-2 gap-4 2xl:gap-6 text-nowrap">
              <div className="flex items-center gap-2 cursor-pointer transition-colors duration-300 group-meta" onClick={handleEmailClick}>
                <FaEnvelope className="text-pink-500 text-lg group-meta-hover:text-pink-500" />
                <span className="text-gray-800 tracking-wide font-semibold group-meta-hover:text-pink-500">hr@sevenhillsfs.com</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer transition-colors duration-300 group-meta" onClick={handlePhoneClick}>
                <FaPhoneAlt className="text-pink-500 text-base group-meta-hover:text-pink-500" />
                <span className="text-gray-800 tracking-wide font-semibold group-meta-hover:text-pink-500">+9140 35511829</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-2.5 w-full text-nowrap">
              <Link to="/" className="nav-link">Home</Link>
              <div className="relative group py-2">
                <button className="menu-btn"><span>About Us</span><FaChevronDown className="ml-1 2xl:ml-1.5 text-[12px] transition duration-300 flex-shrink-0 group-hover:rotate-180"/>
                </button>
                <div className="dropdown-menu invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <Link to="/company-profile" className="dropdown-item">Company Profile</Link>
                  <Link to="/history" className="dropdown-item">History</Link>
                  <Link to="/leadership" className="dropdown-item">Leadership</Link>
                  <Link to="/accolades" className="dropdown-item">Accolades</Link>
                </div>
              </div>
              <div className="relative group py-2">
                <button className="menu-btn"><span>Industries</span><FaChevronDown className="ml-1 2xl:ml-1.5 text-[12px] transition duration-300 flex-shrink-0 group-hover:rotate-180"/></button>
                <div className="dropdown-menu invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <Link to="/industries/aviation" className="dropdown-item">Aviation</Link>
                  <Link to="/industries/pharma-healthcare" className="dropdown-item">Pharma & Healthcare</Link>
                  <Link to="/industries/information-technology" className="dropdown-item">Information Technology</Link>
                  <Link to="/industries/manufacturing" className="dropdown-item">Manufacturing</Link>
                  <Link to="/industries/retailing" className="dropdown-item">Retailing</Link>
                  <Link to="/industries/hospitality" className="dropdown-item">Hospitality</Link>
                </div>
              </div>
              <div className="relative group py-2">
                <button className="menu-btn"><span>Services</span><FaChevronDown className="ml-1 2xl:ml-1.5 text-[12px] transition duration-300 flex-shrink-0 group-hover:rotate-180"/></button>
                <div className="dropdown-menu invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <Link to="/services/house-keeping" className="dropdown-item">House Keeping</Link>
                  <Link to="/services/technical" className="dropdown-item">Technical</Link>
                  <Link to="/services/pest-control" className="dropdown-item">Pest Control</Link>
                  <Link to="/services/general-staffing" className="dropdown-item">General Staffing</Link>
                  <Link to="/services/security" className="dropdown-item">Security</Link>
                  <Link to="/services/man-power-supply" className="dropdown-item">Man Power Supply</Link>
                  <Link to="/services/office-support" className="dropdown-item">Office Support</Link>
                </div>
              </div>
              <div className="relative group py-2">
                <button className="menu-btn"><span>Locations</span><FaChevronDown className="ml-1 2xl:ml-1.5 text-[12px] transition duration-300 flex-shrink-0 group-hover:rotate-180"/></button>
                <div className="dropdown-menu invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <Link to="/locations/shamshabad" className="dropdown-item">Shamshabad</Link>
                  <Link to="/locations/turkapally" className="dropdown-item">Turkapally</Link>
                  <Link to="/locations/chandan-veli" className="dropdown-item">Chandan Veli</Link>
                  <Link to="/locations/secunderabad" className="dropdown-item">Secunderabad</Link>
                  <Link to="/locations/hyderabad" className="dropdown-item">Hyderabad</Link>
                  <Link to="/locations/telangana" className="dropdown-item">Telangana</Link>
                  <Link to="/locations/andhra-pradesh" className="dropdown-item">Andhra Pradesh</Link>
                  <Link to="/locations/karnataka" className="dropdown-item">Karnataka</Link>
                  <Link to="/locations/tamil-nadu" className="dropdown-item">Tamil Nadu</Link>
                  <Link to="/locations/pan-india" className="dropdown-item">PAN India</Link>
                </div>
              </div>
              <Link to="/clients" className="nav-link">Clients</Link>
              <Link to="/gallery" className="nav-link">Gallery</Link>
              <Link to="/careers" className="nav-link">Careers</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center ml-2 2xl:ml-4">
            {window.innerWidth >= 1280 && (<button className="get-quote-btn">Get a Quote</button>)}
            <button onClick={() => setMobileMenu(!mobileMenu)} className="xl:hidden text-3xl text-gray-800">{mobileMenu ? "✕" : <FaAlignJustify />}</button>
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-6 py-6 flex flex-col space-y-5 max-h-[80vh] overflow-y-auto">
            <div className="border-b border-gray-200 pb-4 space-y-3.5">
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleEmailClick}><FaEnvelope className="text-pink-500 text-base" /><span className="text-gray-800 text-[15px] font-semibold">hr@sevenhillsfs.com</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handlePhoneClick}><FaPhoneAlt className="text-pink-500 text-base" /><span className="text-gray-800 text-[15px] font-semibold">+9140 35511829</span>
              </div>
            </div>
            <Link to="/" className="mobile-link">Home</Link>
            <div>
              <button onClick={() => setAboutDropdown(!aboutDropdown)} className="mobile-dropdown-btn"><span>About Us</span><FaChevronDown className={`transition duration-300 ${ aboutDropdown ? "rotate-180" : "" }`}/>
              </button>
              {aboutDropdown && (
                <div className="mobile-dropdown">
                  <Link to="/company-profile">Company Profile</Link>
                  <Link to="/history">History</Link>
                  <Link to="/leadership">Leadership</Link>
                  <Link to="/accolades">Accolades</Link>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setIndustriesDropdown(!industriesDropdown)} className="mobile-dropdown-btn"><span>Industries</span><FaChevronDown className={`transition duration-300 ${ industriesDropdown ? "rotate-180" : "" }`}/>
              </button>
              {industriesDropdown && (
                <div className="mobile-dropdown">
                  <Link to="/industries/aviation">Aviation</Link>
                  <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
                  <Link to="/industries/information-technology">Information Technology</Link>
                  <Link to="/industries/manufacturing">Manufacturing</Link>
                  <Link to="/industries/retailing">Retailing</Link>
                  <Link to="/industries/hospitality">Hospitality</Link>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setServicesDropdown(!servicesDropdown)} className="mobile-dropdown-btn"><span>Services</span><FaChevronDown className={`transition duration-300 ${ servicesDropdown ? "rotate-180" : "" }`}/>
              </button>
              {servicesDropdown && (
                <div className="mobile-dropdown">
                  <Link to="/services/house-keeping">House Keeping</Link>
                  <Link to="/services/technical">Technical</Link>
                  <Link to="/services/pest-control">Pest Control</Link>
                  <Link to="/services/general-staffing">General Staffing</Link>
                  <Link to="/services/security">Security</Link>
                  <Link to="/services/man-power-supply">Man Power Supply</Link>
                  <Link to="/services/office-support">Office Support</Link>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setLocationsDropdown(!locationsDropdown)} className="mobile-dropdown-btn"><span>Locations</span><FaChevronDown className={`transition duration-300 ${ locationsDropdown ? "rotate-180" : "" }`}/></button>
              {locationsDropdown && (
                <div className="mobile-dropdown">
                  <Link to="/locations/shamshabad">Shamshabad</Link>
                  <Link to="/locations/turkapally">Turkapally</Link>
                  <Link to="/locations/chandan-veli">Chandan Veli</Link>
                  <Link to="/locations/secunderabad">Secunderabad</Link>
                  <Link to="/locations/hyderabad">Hyderabad</Link>
                  <Link to="/locations/telangana">Telangana</Link>
                  <Link to="/locations/andhra-pradesh">Andhra Pradesh</Link>
                  <Link to="/locations/karnataka">Karnataka</Link>
                  <Link to="/locations/tamil-nadu">Tamil Nadu</Link>
                  <Link to="/locations/pan-india">PAN India</Link>
                </div>
              )}
            </div>
            <Link to="/clients" className="mobile-link">Clients</Link>
            <Link to="/gallery" className="mobile-link">Gallery</Link>
            <Link to="/careers" className="mobile-link">Careers</Link>
            <Link to="/contact" className="mobile-link">Contact Us</Link>
            <button className="mt-4 get-quote-btn-mobile">Get a Quote</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .menu-btn { display: flex; align-items: center; justify-content: center; padding: 4px 1.5px; font-size: 18px; font-weight: 600; color: #111111; letter-spacing: 0.2px; transition: all 0.3s ease; cursor: pointer; background: none; border: none; white-space: nowrap; } 
        .nav-link { display: inline-flex; align-items: center; justify-content: center; padding: 4px 1.5px; font-size: 18px; font-weight: 600; color: #111111; letter-spacing: 0.2px; transition: all 0.3s ease; text-decoration: none; white-space: nowrap; }
        @media (min-width: 1536px) { .menu-btn { padding: 4px 4px; } .nav-link { padding: 4px 4px; } }
        .menu-btn:hover, .nav-link:hover { color: #ec4899; }
        .dropdown-menu { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); background: #ffffff; border-radius: 14px; padding: 12px 0; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); z-index: 999; min-width: 220px; }
        .dropdown-item { display: block; padding: 12px 22px; color: #374151; font-size: 16px; font-weight: 500; transition: all 0.3s ease; white-space: nowrap; text-decoration: none; border-radius: 4px; margin: 2px 8px; }
        .dropdown-item:hover { background: #c026d3; color: #ffffff; padding-left: 26px; }
        .get-quote-btn { padding: 0px 24px; background: #ec4899; color: white; font-weight: 700; font-size: 18px; letter-spacing: 0.5px; border: none; border-radius: 9999px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3); height: 52px; display: flex; align-items: center; justify-content: center; white-space: nowrap; flex-shrink: 0; }
        @media (min-width: 1536px) { .get-quote-btn { padding: 0px 32px; } }
        .get-quote-btn:hover { background: #c026d3; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(192, 38, 211, 0.4); }
        .get-quote-btn-mobile { width: 100%; padding: 16px; background: #ec4899; color: white; font-weight: 700; font-size: 17px; letter-spacing: 0.5px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3); }
        .get-quote-btn-mobile:hover { background: #c026d3; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(192, 38, 211, 0.4); }
        .mobile-link { font-size: 19px; font-weight: 600; color: #111111; letter-spacing: 0.3px; text-decoration: none; display: block; }
        .mobile-link:hover { color: #ec4899; }
        .mobile-dropdown-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; font-size: 19px; font-weight: 600; color: #111111; letter-spacing: 0.3px; background: none; border: none; cursor: pointer; padding: 0; }
        .mobile-dropdown-btn:hover { color: #ec4899; }
        .mobile-dropdown { display: flex; flex-direction: column; gap: 14px; margin-top: 14px; margin-left: 18px; }
        .mobile-dropdown a { color: #4b5563; font-size: 16px; font-weight: 500; text-decoration: none; display: block; }
        .mobile-dropdown a:hover { color: #ec4899; }
        .logo-link { display: inline-block; transition: transform 0.3s ease; flex-shrink: 0; }
        .logo-link:hover { transform: scale(1.02); } 
        .logo-image { display: block; }
        .group-meta:hover .group-meta-hover\\:text-pink-500 { color: #ec4899; }
      `}</style>
    </div>
  );
};

export default Navbar;