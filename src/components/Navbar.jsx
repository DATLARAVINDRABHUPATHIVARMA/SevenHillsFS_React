import React, { useState } from "react";
import { FaAlignJustify, FaChevronDown, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/Seven_Hills_Logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  let timeoutId = null;
  const handleMouseEnter = (menu) => { if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; } setActiveDropdown(menu); };
  const handleMouseLeave = () => { timeoutId = setTimeout(() => { setActiveDropdown(null); }, 200); };
  const handleDropdownMouseEnter = () => { if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; } };
  const handleDropdownMouseLeave = () => { timeoutId = setTimeout(() => { setActiveDropdown(null); }, 200); };
  const handleEmailClick = () => { window.location.href = "mailto:hr@sevenhillsfs.com"; };
  const handlePhoneClick = () => { window.location.href = "tel:+914035511829"; };

  return (
    <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50" onMouseLeave={handleMouseLeave}>
      <div className="max-w-7xl mx-auto px-4 xl:px-3">
        <div className="flex items-center justify-between h-[72px] xl:h-[78px]">
          <div className="flex-shrink-0">
            <img src={Logo} alt="logo" className="w-14 sm:w-16 xl:w-20 object-contain"/>
          </div>
          <div className="hidden xl:flex flex-1 ml-6 flex-col justify-center">
            <div className="flex justify-end items-center text-[15px] pb-1">
              <div className="flex items-center gap-2 cursor-pointer transition-colors duration-300 group" onClick={handleEmailClick}>
                <FaEnvelope className="text-pink-500 text-sm group-hover:text-pink-500" />
                <span className="text-gray-800 tracking-wide font-semibold group-hover:text-pink-500">hr@sevenhillsfs.com</span>
              </div>
              <div className="flex items-center gap-2 ml-6 cursor-pointer transition-colors duration-300 group" onClick={handlePhoneClick}>
                <FaPhoneAlt className="text-pink-500 text-sm group-hover:text-pink-500" />
                <span className="text-gray-800 tracking-wide font-semibold group-hover:text-pink-500">+9140 35511829</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-1.5">
              <a href="/" className="nav-link">Home</a>
              <div className="relative" onMouseEnter={() => handleMouseEnter("about")}>
                <button className="menu-btn">
                  About Us <FaChevronDown className={`ml-1 text-[11px] transition duration-300 ${ activeDropdown === "about" ? "rotate-180" : "" }`}/>
                </button>
                {activeDropdown === "about" && ( 
                  <div className="dropdown-menu" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                    <a href="/company-profile" className="dropdown-item">Company Profile</a>
                    <a href="/history" className="dropdown-item">History</a>
                    <a href="/leadership" className="dropdown-item">Leadership</a>
                    <a href="/accolades" className="dropdown-item">Accolades</a>
                  </div>
                )}
              </div>
              <div className="relative" onMouseEnter={() => handleMouseEnter("industries")}>
                <button className="menu-btn">Industries<FaChevronDown className={`ml-1 text-[11px] transition duration-300 ${ activeDropdown === "industries" ? "rotate-180" : "" }`}/></button>
                {activeDropdown === "industries" && (
                  <div className="dropdown-menu" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                    <a href="/industries/aviation" className="dropdown-item">Aviation</a>
                    <a href="/industries/pharma-healthcare" className="dropdown-item">Pharma & Healthcare</a>
                    <a href="/industries/information-technology" className="dropdown-item">Information Technology</a>
                    <a href="/industries/manufacturing" className="dropdown-item">Manufacturing</a>
                    <a href="/industries/retailing" className="dropdown-item">Retailing</a>
                    <a href="/industries/hospitality" className="dropdown-item">Hospitality</a>
                  </div>
                )}
              </div>
              <div className="relative" onMouseEnter={() => handleMouseEnter("services")}>
                <button className="menu-btn">Services<FaChevronDown className={`ml-1 text-[11px] transition duration-300 ${ activeDropdown === "services" ? "rotate-180" : "" }`}/></button>
                {activeDropdown === "services" && (
                  <div className="dropdown-menu" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                    <a href="/services/house-keeping" className="dropdown-item">House Keeping</a>
                    <a href="/services/technical" className="dropdown-item">Technical</a>
                    <a href="/services/pest-control" className="dropdown-item">Pest Control</a>
                    <a href="/services/general-staffing" className="dropdown-item">General Staffing</a>
                    <a href="/services/security" className="dropdown-item">Security</a>
                    <a href="/services/man-power-supply" className="dropdown-item">Man Power Supply</a>
                    <a href="/services/office-support" className="dropdown-item">Office Support</a>
                  </div>
                )}
              </div>
              <div className="relative" onMouseEnter={() => handleMouseEnter("locations")}>
                <button className="menu-btn">Locations<FaChevronDown className={`ml-1 text-[11px] transition duration-300 ${ activeDropdown === "locations" ? "rotate-180" : "" }`}/></button>
                {activeDropdown === "locations" && (
                  <div className="dropdown-menu" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                    <a href="/locations/shamshabad" className="dropdown-item">Shamshabad</a>
                    <a href="/locations/turkapally" className="dropdown-item">Turkapally</a>
                    <a href="/locations/chandan-veli" className="dropdown-item">Chandan Veli</a>
                    <a href="/locations/secunderabad" className="dropdown-item">Secunderabad</a>
                    <a href="/locations/hyderabad" className="dropdown-item">Hyderabad</a>
                    <a href="/locations/telangana" className="dropdown-item">Telangana</a>
                    <a href="/locations/andhra-pradesh" className="dropdown-item">Andhra Pradesh</a>
                    <a href="/locations/karnataka" className="dropdown-item">Karnataka</a>
                    <a href="/locations/tamil-nadu" className="dropdown-item">Tamil Nadu</a>
                    <a href="/locations/pan-india" className="dropdown-item">PAN India</a>
                  </div>
                )}
              </div>
              <a href="/clients" className="nav-link">Clients</a>
              <a href="/gallery" className="nav-link">Gallery</a>
              <a href="/careers" className="nav-link">Careers</a>
              <a href="/contact" className="nav-link">Contact Us</a>
            </div>
          </div>
          <div className="ml-4 flex items-center">
            <button className="xl:block hidden get-quote-btn">Get a Quote</button>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="xl:hidden text-2xl text-gray-800">
              {mobileMenu ? "✕" : <FaAlignJustify />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-5 py-5 flex flex-col space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="border-b border-gray-200 pb-4 space-y-3">
              <div className="flex items-center gap-3 cursor-pointer transition-colors duration-300 group" onClick={handleEmailClick}>
                <FaEnvelope className="text-pink-500 text-base group-hover:text-pink-500" />
                <span className="text-gray-800 text-sm font-semibold group-hover:text-pink-500">hr@sevenhillsfs.com</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer transition-colors duration-300 group" onClick={handlePhoneClick}>
                <FaPhoneAlt className="text-pink-500 text-base group-hover:text-pink-500" />
                <span className="text-gray-800 text-sm font-semibold group-hover:text-pink-500">+9140 35511829</span>
              </div>
            </div>
            <a href="/" className="mobile-link">Home</a>
            <div>
              <button onClick={() => setAboutDropdown(!aboutDropdown)} className="mobile-dropdown-btn">
                <span>About Us</span>
                <FaChevronDown className={`transition duration-300 ${ aboutDropdown ? "rotate-180" : "" }`}/>
              </button>
              {aboutDropdown && (
                <div className="mobile-dropdown">
                  <a href="/company-profile">Company Profile</a>
                  <a href="/history">History</a>
                  <a href="/leadership">Leadership</a>
                  <a href="/accolades">Accolades</a>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setIndustriesDropdown(!industriesDropdown)} className="mobile-dropdown-btn">
                <span>Industries</span>
                <FaChevronDown className={`transition duration-300 ${ industriesDropdown ? "rotate-180" : "" }`}/>
              </button>
              {industriesDropdown && (
                <div className="mobile-dropdown">
                  <a href="/industries/aviation">Aviation</a>
                  <a href="/industries/pharma-healthcare">Pharma & Healthcare</a>
                  <a href="/industries/information-technology">Information Technology</a>
                  <a href="/industries/manufacturing">Manufacturing</a>
                  <a href="/industries/retailing">Retailing</a>
                  <a href="/industries/hospitality">Hospitality</a>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setServicesDropdown(!servicesDropdown)} className="mobile-dropdown-btn">
                <span>Services</span>
                <FaChevronDown className={`transition duration-300 ${ servicesDropdown ? "rotate-180" : "" }`}/>
              </button>
              {servicesDropdown && (
                <div className="mobile-dropdown">
                  <a href="/services/house-keeping">House Keeping</a>
                  <a href="/services/technical">Technical</a>
                  <a href="/services/pest-control">Pest Control</a>
                  <a href="/services/general-staffing">General Staffing</a>
                  <a href="/services/security">Security</a>
                  <a href="/services/man-power-supply">Man Power Supply</a>
                  <a href="/services/office-support">Office Support</a>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setLocationsDropdown(!locationsDropdown)} className="mobile-dropdown-btn">
                <span>Locations</span>
                <FaChevronDown className={`transition duration-300 ${ locationsDropdown ? "rotate-180" : "" }`}/>
              </button>
              {locationsDropdown && (
                <div className="mobile-dropdown">
                  <a href="/locations/shamshabad">Shamshabad</a>
                  <a href="/locations/turkapally">Turkapally</a>
                  <a href="/locations/chandan-veli">Chandan Veli</a>
                  <a href="/locations/secunderabad">Secunderabad</a>
                  <a href="/locations/hyderabad">Hyderabad</a>
                  <a href="/locations/telangana">Telangana</a>
                  <a href="/locations/andhra-pradesh">Andhra Pradesh</a>
                  <a href="/locations/karnataka">Karnataka</a>
                  <a href="/locations/tamil-nadu">Tamil Nadu</a>
                  <a href="/locations/pan-india">PAN India</a>
                </div>
              )}
            </div>
            <a href="/clients" className="mobile-link">Clients</a>
            <a href="/gallery" className="mobile-link">Gallery</a>
            <a href="/careers" className="mobile-link">Careers</a>
            <a href="/contact" className="mobile-link">Contact Us</a>
            <button className="mt-3 get-quote-btn-mobile">Get a Quote</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .menu-btn { display: flex; align-items: center; padding: 6px 10px; font-size: 17px; font-weight: 600; color: #111111; letter-spacing: 0.3px; transition: all 0.3s ease; cursor: pointer; background: none; border: none; } 
        .menu-btn:hover { color: #ec4899; }
        .nav-link { padding: 6px 10px; font-size: 17px; font-weight: 600; color: #111111; letter-spacing: 0.3px; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .nav-link:hover {  color: #ec4899; }
        .dropdown-menu { position: absolute; top: 118%; left: 50%; transform: translateX(-50%); background: #ffffff; border-radius: 14px; padding: 10px 0; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); z-index: 999; min-width: 200px; }
        .dropdown-item { display: block; padding: 11px 20px; color: #374151; font-size: 15px; font-weight: 500; transition: all 0.3s ease; white-space: nowrap; text-decoration: none; border-radius: 4px; margin: 2px 8px; }
        .dropdown-item:hover { background: #c026d3; color: #ffffff; padding-left: 24px; }
        .get-quote-btn { padding: 12px 28px; background: #ec4899; color: white; font-weight: 700; font-size: 15px; letter-spacing: 0.5px; border: none; border-radius: 9999px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3); height: 48px; display: flex; align-items: center; justify-content: center; }
        .get-quote-btn:hover { background: #c026d3; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(192, 38, 211, 0.4); }
        .get-quote-btn-mobile { width: 100%; padding: 14px; background: #ec4899; color: white; font-weight: 700; font-size: 16px; letter-spacing: 0.5px; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3); }
        .get-quote-btn-mobile:hover { background: #c026d3; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(192, 38, 211, 0.4); }
        .mobile-link { font-size: 17px; font-weight: 600; color: #111111; letter-spacing: 0.3px; text-decoration: none; display: block; }
        .mobile-link:hover { color: #ec4899; }
        .mobile-dropdown-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; font-size: 17px; font-weight: 600; color: #111111; letter-spacing: 0.3px; background: none; border: none; cursor: pointer; padding: 0; }
        .mobile-dropdown-btn:hover { color: #ec4899; }
        .mobile-dropdown { display: flex; flex-direction: column; gap: 12px; margin-top: 14px; margin-left: 16px; }
        .mobile-dropdown a { color: #4b5563; font-size: 15px; font-weight: 500; text-decoration: none; display: block; }
        .mobile-dropdown a:hover { color: #ec4899; }
      `}</style>
    </div>
  );
};

export default Navbar;