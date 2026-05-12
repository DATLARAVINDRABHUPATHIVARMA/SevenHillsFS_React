import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import firstImage from "../assets/SliderImages/1.jpg";
import secondImage from "../assets/SliderImages/2.jpg";
import thirdImage from "../assets/SliderImages/3.jpg";
import fourthImage from "../assets/SliderImages/4.jpg";
import fifthImage from "../assets/SliderImages/5.jpg";
import sixthImage from "../assets/SliderImages/6.jpg";
import seventhImage from "../assets/SliderImages/7.jpg";
import eighthImage from "../assets/SliderImages/8.jpg";
import ninthImage from "../assets/SliderImages/9.jpg";
import tenthImage from "../assets/SliderImages/10.jpg";
import eleventhImage from "../assets/SliderImages/11.jpg";
import twelfthImage from "../assets/SliderImages/12.jpg";

const Carousel = () => {
  return (
    <div>
      <Swiper modules={[Autoplay, EffectFade]} effect="fade" fadeEffect={{ crossFade: true }} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} slidesPerView={1} speed={1500}>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={firstImage} alt="image 1" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">Hyderabad</span></h1>
                <p className="text-sm lg:text-xl">As a leading provider of comprehensive facility management services, we are dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities. With our expertise and commitment to excellence, we strive to exceed your expectations and ensure the smooth operation of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={secondImage}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  Professional Facility Management Services in{" "}
                  <span className="text-sky-500">Telangana</span>
                </h1>
                <p className="text-sm lg:text-xl">
                  Enhancing the efficiency, safety, and sustainability of your facilities with our comprehensive facility management services. We are committed to delivering exceptional solutions that exceed your expectations and ensure the smooth operation of your facilities in Telangana.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={thirdImage} alt="image 1" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">Andhra Pradesh</span></h1>
                <p className="text-sm lg:text-xl">Facility management services encompass a wide range of activities aimed at ensuring the efficient and effective operation of facilities. These services include maintenance, cleaning, security, landscaping, waste management, and more. By outsourcing facility management services to a professional provider, organizations can focus on their core business activities while ensuring that their facilities are well-maintained and operate smoothly.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={firstImage}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  Professional Facility Management Services in{" "}
                  <span className="text-sky-500">Hyd</span>
                </h1>
                <p className="text-sm lg:text-xl">
                  Leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={secondImage}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">TS</span></h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services,   delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={thirdImage} alt="image 1" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">AP</span></h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={fourthImage} alt="image 2" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">India</span></h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={fifthImage} alt="image 1" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">Turkapally</span></h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={sixthImage} alt="image 2" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">Shamshabad</span></h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={eighthImage}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">
                  Professional Facility Management Services in{" "}
                  <span className="text-sky-500">Chandan Veli</span>
                </h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={ninthImage} alt="image 2" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "} <span className="text-sky-500">Nizampet</span></h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[70vh] lg:h-[90vh] overflow-hidden">
            <div className="relative h-full w-full">
              <img src={tenthImage} alt="image 1" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-sky-900/50 to-sky-900/10"></div>
            </div>
            <div className="absolute inset-0 flex items-center text-white justify-start max-w-7xl mx-auto px-4 lg:px-0">
              <div className="max-w-lg px-12 lg:px-0">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Professional Facility Management Services in{" "}<span className="text-sky-500">Secunderabad</span></h1>
                <p className="text-sm lg:text-xl">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;