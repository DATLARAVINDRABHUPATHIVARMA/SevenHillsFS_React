import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import firstImage from '../assets/SliderImages/1.jpg';
import secondImage from '../assets/SliderImages/2.jpg';
import thirdImage from '../assets/SliderImages/3.jpg'; 
import fourthImage from '../assets/SliderImages/4.jpg';
import fifthImage from '../assets/SliderImages/5.jpg'; 
import sixthImage from '../assets/SliderImages/6.jpg';

const Carousel = () => {
  return (
    <div>
      <Swiper 
        modules={[Autoplay, EffectFade]} 
        effect='fade' 
        fadeEffect={{crossFade: true}} 
        loop={true} 
        autoplay={{delay: 3000, disableOnInteraction: false}} 
        slidesPerView={1} 
        speed={1000}
      >
        <SwiperSlide>
          <div className='relative w-full aspect-[4/5] sm:aspect-[16/9] overflow-hidden'>
            <div className='relative h-full w-full'>
              <img src={firstImage} alt="Hyderabad" className='h-full w-full object-cover'/>
              <div className='absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10'></div>
            </div>
            <div className='absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0'>
              <div className='max-w-lg px-6 sm:px-12 lg:px-0'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight'>
                  Corporate Headquarters Excellence in <span className='text-pink-500'>Hyderabad</span>
                </h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  Seven Hills Facility Services' corporate headquarters orchestrates comprehensive facility management solutions, delivering operational excellence and strategic innovation across the region.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full aspect-[4/5] sm:aspect-[16/9] overflow-hidden'>
            <div className='relative h-full w-full'>
              <img src={secondImage} alt="Telangana" className='h-full w-full object-cover'/>
              <div className='absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10'></div>
            </div>
            <div className='absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0'>
              <div className='max-w-lg px-6 sm:px-12 lg:px-0'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight'>
                  Integrated Facility Solutions Across <span className='text-pink-500'>Telangana</span>
                </h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  Delivering cutting-edge facility management services across Telangana, encompassing security, staffing, and technical maintenance for seamless operational continuity.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full aspect-[4/5] sm:aspect-[16/9] overflow-hidden'>
            <div className='relative h-full w-full'>
              <img src={thirdImage} alt="Andhra Pradesh" className='h-full w-full object-cover'/>
              <div className='absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10'></div>
            </div>
            <div className='absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0'>
              <div className='max-w-lg px-6 sm:px-12 lg:px-0'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight'>
                  Strategic Facility Management for <span className='text-pink-500'>Andhra Pradesh</span>
                </h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  Offering comprehensive facility solutions including technical support, housekeeping, and manpower services, driving organizational efficiency and growth.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full aspect-[4/5] sm:aspect-[16/9] overflow-hidden'>
            <div className='relative h-full w-full'>
              <img src={fourthImage} alt="Shamshabad" className='h-full w-full object-cover'/>
              <div className='absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10'></div>
            </div>
            <div className='absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0'>
              <div className='max-w-lg px-6 sm:px-12 lg:px-0'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight'>
                  Premium Facility Services in <span className='text-pink-500'>Shamshabad</span>
                </h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  Providing world-class facility management solutions with precision, innovation, and unwavering commitment to excellence across all operations.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full aspect-[4/5] sm:aspect-[16/9] overflow-hidden'>
            <div className='relative h-full w-full'>
              <img src={fifthImage} alt="Turkapally" className='h-full w-full object-cover'/>
              <div className='absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10'></div>
            </div>
            <div className='absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0'>
              <div className='max-w-lg px-6 sm:px-12 lg:px-0'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight'>
                  Superior Facility Solutions for <span className='text-pink-500'>Turkapally</span>
                </h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  Delivering bespoke facility management services encompassing staffing, maintenance, and support solutions tailored to client requirements.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full aspect-[4/5] sm:aspect-[16/9] overflow-hidden'>
            <div className='relative h-full w-full'>
              <img src={sixthImage} alt="PAN India" className='h-full w-full object-cover'/>
              <div className='absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10'></div>
            </div>
            <div className='absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0'>
              <div className='max-w-lg px-6 sm:px-12 lg:px-0'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight'>
                  Nationwide Facility Management <span className='text-pink-500'>PAN India</span>
                </h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                  India's premier facility management partner, delivering consistent excellence in housekeeping, security, technical services, and manpower solutions nationwide.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;