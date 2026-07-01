import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import firstImage from "../assets/SliderImages/1_c.jpg";
import secondImage from "../assets/SliderImages/2_c.jpg";
import thirdImage from "../assets/SliderImages/3.jpg";
import fourthImage from "../assets/SliderImages/4.jpg";
import fifthImage from "../assets/SliderImages/5.jpg";
import sixthImage from "../assets/SliderImages/6.jpg";

const slides = [
  { image: firstImage, title: "Corporate Headquarters Excellence in", location: "Hyderabad", description: "Seven Hills Facility Services delivers integrated facility management solutions with operational excellence, innovation and client satisfaction.", },
  { image: secondImage, title: "Integrated Facility Solutions Across", location: "Telangana", description: "Providing comprehensive housekeeping, security, staffing and technical maintenance solutions across Telangana.", },
  { image: thirdImage, title: "Strategic Facility Management for", location: "Andhra Pradesh", description: "Offering professional facility services that enhance workplace efficiency and operational continuity.", },
  { image: fourthImage, title: "Premium Facility Services in", location: "Shamshabad", description: "Delivering reliable and innovative facility management services tailored to client requirements.", },
  { image: fifthImage, title: "Superior Facility Solutions for", location: "Turkapally", description: "Providing customized staffing, maintenance and support services for businesses of all sizes.", },
  { image: sixthImage, title: "Nationwide Facility Management", location: "PAN India", description: "A trusted partner delivering housekeeping, security, manpower and technical services nationwide.", },
];

const VibgyorHeading = () => (
  <a href="/" className="inline-block group border-b-4 border-pink-500 pb-0.1 hover:border-purple-600 transition-colors duration-300">
    <h2 className="font-black uppercase leading-none whitespace-nowrap text-[3.8vw] sm:text-2xl md:text-3xl xl:text-2xl 2xl:text-4xl">
      <span className="text-pink-500">S</span>
      <span className="text-fuchsia-400">E</span>
      <span className="text-purple-600">V</span>
      <span className="text-red-500">E</span>
      <span className="text-rose-400">N</span>
      <span className="mx-0.5 sm:mx-1 xl:mx-1.5"></span>
      <span className="text-pink-600">H</span>
      <span className="text-fuchsia-500">I</span>
      <span className="text-purple-400">L</span>
      <span className="text-red-600">L</span>
      <span className="text-rose-500">S</span>
      <span className="mx-0.5 sm:mx-1 xl:mx-1.5"></span>
      <span className="text-pink-400">F</span>
      <span className="text-fuchsia-600">A</span>
      <span className="text-purple-500">C</span>
      <span className="text-red-400">I</span>
      <span className="text-rose-600">L</span>
      <span className="text-pink-500">I</span>
      <span className="text-fuchsia-400">T</span>
      <span className="text-purple-600">Y</span>
      <span className="mx-0.5 sm:mx-1 xl:mx-1.5"></span>
      <span className="text-red-500">S</span>
      <span className="text-rose-400">E</span>
      <span className="text-pink-600">R</span>
      <span className="text-fuchsia-500">V</span>
      <span className="text-purple-400">I</span>
      <span className="text-red-600">C</span>
      <span className="text-rose-500">E</span>
      <span className="text-pink-400">S</span>
    </h2>
  </a>
);

const Carousel = () => {
  return (
    <section className="bg-gray-100 overflow-hidden">
      <Swiper modules={[Autoplay, EffectFade]} effect="fade" fadeEffect={{ crossFade: true }} loop speed={1000} autoplay={{ delay: 4000, disableOnInteraction: false }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <>
              <div className="xl:hidden flex flex-col bg-gray-100">
                <div className="py-6 px-4 text-center flex-shrink-0"><VibgyorHeading /></div>
                <div className="w-[92%] mr-auto overflow-hidden shadow-xl flex-shrink-0 aspect-[3/2] relative" style={{ borderTopRightRadius: "9999px", borderBottomRightRadius: "9999px", }}>
                  <img src={slide.image} alt={slide.location} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink via-purple-900/50 to-purple-900/10 pointer-events-none" />
                </div>
                <div className="px-6 py-8 flex-grow flex flex-col justify-center">
                  <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {slide.title}{" "}<span className="text-pink-500">{slide.location}</span>
                  </h1>
                  <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">{slide.description}</p>
                </div>
              </div>
              <div className="hidden xl:flex flex-row relative w-full bg-gray-100 overflow-hidden xl:h-[40vw]">
                <div className="w-[40%] h-full px-12 xl:px-16 flex flex-col justify-between py-12 2xl:py-20 relative z-20 flex-shrink-0">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden pointer-events-none">
                    <div className="bg-pink-500 rounded-full" style={{ width: "850px", height: "850px", marginLeft: "-810px", }} />
                  </div>
                  <div className="w-full relative z-20"><VibgyorHeading /></div>
                  <div className="w-full mb-auto pt-16 2xl:pt-24 relative z-20">
                    <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 leading-tight">
                      {slide.title}{" "}<span className="text-pink-500">{slide.location}</span>
                    </h1>
                    <p className="mt-6 text-sm xl:text-base text-gray-600 leading-relaxed max-w-md">{slide.description}</p>
                  </div>
                </div>
                <div className="w-[60%] h-full overflow-hidden relative z-10 flex-shrink-0 aspect-[3/2]" style={{ borderRadius: "25% 0% 0% 25% / 50% 0% 0% 50%", }}>
                  <img src={slide.image} alt={slide.location} className="w-full h-full object-cover" style={{ objectPosition: "center center" }}/>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink via-purple-900/50 to-purple-900/10 pointer-events-none" />
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