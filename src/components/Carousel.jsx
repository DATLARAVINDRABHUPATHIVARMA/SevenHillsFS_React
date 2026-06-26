import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import firstImage from "../assets/SliderImages/1.jpg";
import secondImage from "../assets/SliderImages/2.jpg";
import thirdImage from "../assets/SliderImages/3.jpg";
import fourthImage from "../assets/SliderImages/4.jpg";
import fifthImage from "../assets/SliderImages/5.jpg";
import sixthImage from "../assets/SliderImages/6.jpg";

const slides = [
  {
    image: firstImage,
    title: "Corporate Headquarters Excellence in",
    location: "Hyderabad",
    description:
      "Seven Hills Facility Services delivers integrated facility management solutions with operational excellence, innovation and client satisfaction.",
  },
  {
    image: secondImage,
    title: "Integrated Facility Solutions Across",
    location: "Telangana",
    description:
      "Providing comprehensive housekeeping, security, staffing and technical maintenance solutions across Telangana.",
  },
  {
    image: thirdImage,
    title: "Strategic Facility Management for",
    location: "Andhra Pradesh",
    description:
      "Offering professional facility services that enhance workplace efficiency and operational continuity.",
  },
  {
    image: fourthImage,
    title: "Premium Facility Services in",
    location: "Shamshabad",
    description:
      "Delivering reliable and innovative facility management services tailored to client requirements.",
  },
  {
    image: fifthImage,
    title: "Superior Facility Solutions for",
    location: "Turkapally",
    description:
      "Providing customized staffing, maintenance and support services for businesses of all sizes.",
  },
  {
    image: sixthImage,
    title: "Nationwide Facility Management",
    location: "PAN India",
    description:
      "A trusted partner delivering housekeeping, security, manpower and technical services nationwide.",
  },
];

const VibgyorHeading = () => (
  <h2 className="font-black uppercase leading-none whitespace-nowrap text-[3.8vw] sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-5xl">
    <span className="text-red-600">S</span>
    <span className="text-red-400">E</span>
    <span className="text-orange-500">V</span>
    <span className="text-amber-500">E</span>
    <span className="text-yellow-500">N</span>

    <span className="mx-0.5 sm:mx-1 xl:mx-1.5"></span>

    <span className="text-lime-500">H</span>
    <span className="text-green-600">I</span>
    <span className="text-emerald-500">L</span>
    <span className="text-teal-500">L</span>
    <span className="text-cyan-500">S</span>

    <span className="mx-0.5 sm:mx-1 xl:mx-1.5"></span>

    <span className="text-sky-500">F</span>
    <span className="text-blue-600">A</span>
    <span className="text-indigo-500">C</span>
    <span className="text-violet-500">I</span>
    <span className="text-purple-500">L</span>
    <span className="text-fuchsia-500">I</span>
    <span className="text-pink-500">T</span>
    <span className="text-rose-500">Y</span>

    <span className="mx-0.5 sm:mx-1 xl:mx-1.5"></span>

    <span className="text-red-500">S</span>
    <span className="text-orange-500">E</span>
    <span className="text-yellow-500">R</span>
    <span className="text-lime-500">V</span>
    <span className="text-cyan-500">I</span>
    <span className="text-blue-500">C</span>
    <span className="text-indigo-500">E</span>
    <span className="text-violet-500">S</span>
  </h2>
);

const Carousel = () => {
  return (
    <section className="bg-white overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <>
              {/* ================= MOBILE & TABLET (< 1280px) ================= */}
              <div className="xl:hidden flex flex-col bg-white">
                
                {/* Brand Header */}
                <div className="py-6 px-4 text-center flex-shrink-0">
                  <VibgyorHeading />
                </div>

                {/* Unified Image Wrapper Layer */}
                <div 
                  className="w-[92%] mr-auto overflow-hidden shadow-xl flex-shrink-0 portrait:aspect-[4/5] landscape:aspect-[5/4]"
                  style={{
                    borderTopRightRadius: "9999px",
                    borderBottomRightRadius: "9999px",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.location}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Block */}
                <div className="px-6 py-8 flex-grow flex flex-col justify-center">
                  <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {slide.title}
                    <br />
                    <span className="text-pink-500">{slide.location}</span>
                  </h1>

                  <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* ================= DESKTOP (>= 1280px) ================= */}
              <div className="hidden xl:block relative h-[780px] bg-white overflow-hidden">
                
                {/* BACKGROUND DECORATION LAYER */}
                {/* Left Pink Circle Segment */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden pointer-events-none">
                  <div
                    className="bg-pink-500 rounded-full"
                    style={{
                      width: "850px",
                      height: "850px",
                      marginLeft: "-810px",
                    }}
                  />
                </div>

                {/* Right Edge-to-Edge Image (40% Screen Width) */}
                <div className="absolute right-0 top-0 h-full w-[40%] z-10">
                  <div
                    className="h-full w-full overflow-hidden"
                    style={{
                      borderTopLeftRadius: "9999px",
                      borderBottomLeftRadius: "9999px",
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.location}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* FOREGROUND CONTENT LAYER */}
                <div className="max-w-7xl mx-auto h-full px-8 xl:px-12 relative z-20 flex flex-col justify-between py-20">
                  
                  {/* Top Brand Heading */}
                  <div className="w-[55%]">
                    <VibgyorHeading />
                  </div>

                  {/* Text Content Area */}
                  <div className="w-[55%] mb-auto pt-24">
                    <h1 className="text-4xl xl:text-4xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title}
                      <br />
                      <span className="text-pink-500">
                        {slide.location}
                      </span>
                    </h1>

                    <p className="mt-8 text-lg xl:text-xl text-gray-600 leading-8 max-w-xl">
                      {slide.description}
                    </p>
                  </div>

                </div>

              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;