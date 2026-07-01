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
  { image: firstImage, title: "Corporate Headquarters Excellence in", location: "Hyderabad", description: "Seven Hills Facility Services orchestrates premier, bespoke integrated facility management architectures. We engineer optimal operational synergy, pioneering sustainable enterprise workflows, technological modernization, and peerless client-centric service benchmarks that fortify your corporate ecosystem.", },
  { image: secondImage, title: "Integrated Facility Solutions Across", location: "Telangana", description: "Deploying comprehensive, rigorous facility maintenance paradigms, critical asset preservation infrastructure, mechanized corporate housekeeping solutions, and end-to-end institutional support frameworks calibrated to scale alongside Telangana's surging industrial sectors.", },
  { image: thirdImage, title: "Strategic Facility Management for", location: "Andhra Pradesh", description: "Empowering commercial properties and elite business environments with hyper-sophisticated operational efficiency blueprints, agile technical systems engineering, and elite human capital deployment designed to ensure uninterrupted workforce continuity.", },
  { image: fourthImage, title: "Premium Facility Services in", location: "Shamshabad", description: "Delivering pristine, secure, and precision-engineered facility solutions precisely tailored to meet the dynamic demands of world-class aviation, logistical logistics, and ultra-high-density modern industrial nodes operating under strict compliance.", },
  { image: fifthImage, title: "Superior Facility Solutions for", location: "Turkapally", description: "Cultivating optimized workplace environments through custom-tailored industrial maintenance programs, expert technical support structures, and precise administrative staffing models that elevate overall enterprise agility and spatial productivity.", },
  { image: sixthImage, title: "Nationwide Facility Management", location: "PAN India", description: "A highly trusted national vanguard in facility management, orchestrating large-scale corporate security networks, sophisticated asset protection, heavy engineering maintenance, and bespoke commercial janitorial portfolios seamlessly across our expansive PAN India infrastructure.", },
];

const Carousel = () => {
  return (
    <section className="bg-gray-100 overflow-hidden">
      <Swiper modules={[Autoplay, EffectFade]} effect="fade" fadeEffect={{ crossFade: true }} loop speed={1000} autoplay={{ delay: 4000, disableOnInteraction: false }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <>
              {/* ================= MOBILE & TABLET (< 1280px) ================= */}
              <div className="xl:hidden flex flex-col bg-gray-100">
                <div className="w-[92%] mr-auto overflow-hidden shadow-xl flex-shrink-0 aspect-[3/2] relative" style={{ borderTopRightRadius: "9999px", borderBottomRightRadius: "9999px", }}>
                  <img src={slide.image} alt={slide.location} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink via-purple-900/50 to-purple-900/10 pointer-events-none" />
                </div>
                <div className="px-6 pt-8 pb-10 flex-grow flex flex-col justify-start">
                  <h1 className="text-2xl sm:text-4xl font-medium text-gray-900 leading-tight tracking-tight">
                    {slide.title}{" "}<span className="text-pink-500 font-semibold">{slide.location}</span>
                  </h1>
                  <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">{slide.description}</p>
                </div>
              </div>

              {/* ================= DESKTOP (>= 1280px) ================= */}
              {/* 
                - Left side content box takes up 40% width.
                - Right side image box takes up 60% width.
                - Height set to exactly 40vw to achieve a perfect 3:2 aspect ratio for the 60vw wide image (60:40 -> 3:2).
              */}
              <div className="hidden xl:flex flex-row relative w-full bg-gray-100 overflow-hidden xl:h-[40vw]">
                
                {/* LEFT SIDE: CONTENT BLOCK */}
                <div className="w-[40%] h-full px-12 xl:px-16 flex flex-col justify-start pt-16 2xl:pt-24 relative z-20 flex-shrink-0">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 overflow-hidden pointer-events-none">
                    <div className="bg-pink-500 rounded-full" style={{ width: "850px", height: "850px", marginLeft: "-810px", }} />
                  </div>
                  <div className="w-full relative z-20">
                    <h1 className="text-3xl 2xl:text-4xl font-medium text-gray-900 leading-tight tracking-tight">
                      {slide.title}{" "}<span className="text-pink-500 font-semibold">{slide.location}</span>
                    </h1>
                    <p className="mt-4 text-sm xl:text-base text-gray-600 leading-relaxed max-w-md lg:max-w-xl font-normal">{slide.description}</p>
                  </div>
                </div>

                {/* RIGHT SIDE: IMAGE CONTAINER */}
                <div className="w-[60%] h-full overflow-hidden relative z-10 flex-shrink-0" style={{ borderRadius: "25% 0% 0% 25% / 50% 0% 0% 50%", }}>
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