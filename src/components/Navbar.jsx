import React, { useState } from "react";
import {
  FaAlignJustify,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import Logo from "../assets/Seven_Hills_Logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // DESKTOP DROPDOWNS
  const [activeDropdown, setActiveDropdown] = useState(null);

  // MOBILE DROPDOWNS
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 lg:px-3">

        {/* NAVBAR */}
        <div className="flex items-center justify-between h-[72px] lg:h-[78px]">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="logo"
              className="w-14 sm:w-16 lg:w-20 object-contain"
            />
          </div>

          {/* DESKTOP SECTION */}
          <div className="hidden lg:flex flex-1 ml-6 flex-col justify-center">

            {/* CONTACT INFO */}
            <div className="flex justify-end items-center text-[13px] pb-1">

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-sky-500 text-xs" />

                <span className="text-gray-800 tracking-wide">
                  hr@sevenhillsfs.com
                </span>
              </div>

              <div className="flex items-center gap-2 ml-6">
                <FaPhoneAlt className="text-sky-500 text-xs" />

                <span className="text-gray-800 tracking-wide">
                  +9140 35511829
                </span>
              </div>

            </div>

            {/* MENU */}
            <div className="flex items-center justify-between border-t border-gray-300 pt-1.5">

              {/* HOME */}
              <a href="/" className="nav-link">
                Home
              </a>

              {/* ABOUT */}
              <div className="relative">

                <button
                  onClick={() => toggleDropdown("about")}
                  className="menu-btn"
                >
                  About Us

                  <FaChevronDown
                    className={`ml-1 text-[11px] transition duration-300 ${
                      activeDropdown === "about"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === "about" && (
                  <div className="dropdown-menu w-56">
                    <a href="/" className="dropdown-item">
                      Company Profile
                    </a>

                    <a href="/" className="dropdown-item">
                      History
                    </a>

                    <a href="/" className="dropdown-item">
                      Leadership
                    </a>

                    <a href="/" className="dropdown-item">
                      Accolades
                    </a>
                  </div>
                )}
              </div>

              {/* INDUSTRIES */}
              <div className="relative">

                <button
                  onClick={() => toggleDropdown("industries")}
                  className="menu-btn"
                >
                  Industries

                  <FaChevronDown
                    className={`ml-1 text-[11px] transition duration-300 ${
                      activeDropdown === "industries"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === "industries" && (
                  <div className="dropdown-menu w-64">
                    <a href="/" className="dropdown-item">
                      Aviation
                    </a>

                    <a href="/" className="dropdown-item">
                      Pharma & Healthcare
                    </a>

                    <a href="/" className="dropdown-item">
                      Information Technology
                    </a>

                    <a href="/" className="dropdown-item">
                      Manufacturing
                    </a>

                    <a href="/" className="dropdown-item">
                      Retailing
                    </a>

                    <a href="/" className="dropdown-item">
                      Hospitality
                    </a>
                  </div>
                )}
              </div>

              {/* SERVICES */}
              <div className="relative">

                <button
                  onClick={() => toggleDropdown("services")}
                  className="menu-btn"
                >
                  Services

                  <FaChevronDown
                    className={`ml-1 text-[11px] transition duration-300 ${
                      activeDropdown === "services"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === "services" && (
                  <div className="dropdown-menu w-60">
                    <a href="/" className="dropdown-item">
                      House Keeping
                    </a>

                    <a href="/" className="dropdown-item">
                      Technical
                    </a>

                    <a href="/" className="dropdown-item">
                      Pest Control
                    </a>

                    <a href="/" className="dropdown-item">
                      General Staffing
                    </a>

                    <a href="/" className="dropdown-item">
                      Security
                    </a>

                    <a href="/" className="dropdown-item">
                      Man Power Supply
                    </a>

                    <a href="/" className="dropdown-item">
                      Office Support
                    </a>
                  </div>
                )}
              </div>

              {/* LOCATIONS */}
              <div className="relative">

                <button
                  onClick={() => toggleDropdown("locations")}
                  className="menu-btn"
                >
                  Locations

                  <FaChevronDown
                    className={`ml-1 text-[11px] transition duration-300 ${
                      activeDropdown === "locations"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === "locations" && (
                  <div className="dropdown-menu w-56 max-h-80 overflow-y-auto">
                    <a href="/" className="dropdown-item">
                      Shamshabad
                    </a>

                    <a href="/" className="dropdown-item">
                      Turkapally
                    </a>

                    <a href="/" className="dropdown-item">
                      Chandan Veli
                    </a>

                    <a href="/" className="dropdown-item">
                      Secunderabad
                    </a>

                    <a href="/" className="dropdown-item">
                      Hyderabad
                    </a>

                    <a href="/" className="dropdown-item">
                      Telangana
                    </a>

                    <a href="/" className="dropdown-item">
                      Andhra Pradesh
                    </a>

                    <a href="/" className="dropdown-item">
                      Karnataka
                    </a>

                    <a href="/" className="dropdown-item">
                      Tamil Nadu
                    </a>

                    <a href="/" className="dropdown-item">
                      PAN India
                    </a>
                  </div>
                )}
              </div>

              {/* OTHER MENUS */}
              <a href="/" className="nav-link">
                Clients
              </a>

              <a href="/" className="nav-link">
                Gallery
              </a>

              <a href="/" className="nav-link">
                Careers
              </a>

              <a href="/" className="nav-link">
                Contact Us
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="ml-4 flex items-center">

            {/* BUTTON */}
            <button className="hidden lg:block px-5 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition duration-300 text-sm tracking-wide">
              Get a Quote
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-2xl text-gray-800"
            >
              {mobileMenu ? "✕" : <FaAlignJustify />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">

          <div className="px-5 py-5 flex flex-col space-y-4 max-h-[85vh] overflow-y-auto">

            {/* CONTACT INFO */}
            <div className="border-b border-gray-200 pb-4 space-y-3">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-sky-500" />

                <span className="text-gray-800 text-sm">
                  hr@sevenhillsfs.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-sky-500" />

                <span className="text-gray-800 text-sm">
                  +9140 35511829
                </span>
              </div>

            </div>

            {/* HOME */}
            <a href="/" className="mobile-link">
              Home
            </a>

            {/* ABOUT */}
            <div>
              <button
                onClick={() => setAboutDropdown(!aboutDropdown)}
                className="mobile-dropdown-btn"
              >
                <span>About Us</span>

                <FaChevronDown
                  className={`transition duration-300 ${
                    aboutDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutDropdown && (
                <div className="mobile-dropdown">
                  <a href="/">Company Profile</a>
                  <a href="/">History</a>
                  <a href="/">Leadership</a>
                  <a href="/">Accolades</a>
                </div>
              )}
            </div>

            {/* INDUSTRIES */}
            <div>
              <button
                onClick={() =>
                  setIndustriesDropdown(!industriesDropdown)
                }
                className="mobile-dropdown-btn"
              >
                <span>Industries</span>

                <FaChevronDown
                  className={`transition duration-300 ${
                    industriesDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {industriesDropdown && (
                <div className="mobile-dropdown">
                  <a href="/">Aviation</a>
                  <a href="/">Pharma & Healthcare</a>
                  <a href="/">Information Technology</a>
                  <a href="/">Manufacturing</a>
                  <a href="/">Retailing</a>
                  <a href="/">Hospitality</a>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div>
              <button
                onClick={() =>
                  setServicesDropdown(!servicesDropdown)
                }
                className="mobile-dropdown-btn"
              >
                <span>Services</span>

                <FaChevronDown
                  className={`transition duration-300 ${
                    servicesDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesDropdown && (
                <div className="mobile-dropdown">
                  <a href="/">House Keeping</a>
                  <a href="/">Technical</a>
                  <a href="/">Pest Control</a>
                  <a href="/">General Staffing</a>
                  <a href="/">Security</a>
                  <a href="/">Man Power Supply</a>
                  <a href="/">Office Support</a>
                </div>
              )}
            </div>

            {/* LOCATIONS */}
            <div>
              <button
                onClick={() =>
                  setLocationsDropdown(!locationsDropdown)
                }
                className="mobile-dropdown-btn"
              >
                <span>Locations</span>

                <FaChevronDown
                  className={`transition duration-300 ${
                    locationsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {locationsDropdown && (
                <div className="mobile-dropdown">
                  <a href="/">Shamshabad</a>
                  <a href="/">Turkapally</a>
                  <a href="/">Chandan Veli</a>
                  <a href="/">Secunderabad</a>
                  <a href="/">Hyderabad</a>
                  <a href="/">Telangana</a>
                  <a href="/">Andhra Pradesh</a>
                  <a href="/">Karnataka</a>
                  <a href="/">Tamil Nadu</a>
                  <a href="/">PAN India</a>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}
            <a href="/" className="mobile-link">
              Clients
            </a>

            <a href="/" className="mobile-link">
              Gallery
            </a>

            <a href="/" className="mobile-link">
              Careers
            </a>

            <a href="/" className="mobile-link">
              Contact Us
            </a>

            {/* BUTTON */}
            <button className="mt-3 bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition duration-300 tracking-wide">
              Get a Quote
            </button>

          </div>
        </div>
      )}

      {/* CUSTOM CSS */}
      <style jsx>{`
        .menu-btn {
          display: flex;
          align-items: center;
          padding: 6px 10px;
          font-size: 17px;
          font-weight: 600;
          color: #111111;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .menu-btn:hover {
          color: #0284c7;
        }

        .nav-link {
          padding: 6px 10px;
          font-size: 17px;
          font-weight: 600;
          color: #111111;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #0284c7;
        }

        .dropdown-menu {
          position: absolute;
          top: 118%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 14px;
          padding: 10px 0;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          z-index: 999;
        }

        .dropdown-item {
          display: block;
          padding: 11px 20px;
          color: #374151;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .dropdown-item:hover {
          background: #f3f4f6;
          color: #0284c7;
          padding-left: 24px;
        }

        .mobile-link {
          font-size: 17px;
          font-weight: 600;
          color: #111111;
          letter-spacing: 0.3px;
        }

        .mobile-dropdown-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 17px;
          font-weight: 600;
          color: #111111;
          letter-spacing: 0.3px;
        }

        .mobile-dropdown {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 14px;
          margin-left: 16px;
          color: #4b5563;
          font-size: 15px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Navbar;