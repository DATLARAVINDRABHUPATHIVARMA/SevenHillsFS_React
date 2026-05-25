import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Tech Corp",
    review: "Exceptional service and attention to detail. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Manager, Innovate Inc",
    review: "Their team is professional and always delivers on time.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    position: "Director, Creative Solutions",
    review: "A pleasure to work with. They exceeded our expectations in every way.",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Owner, Business Ventures",
    review: "Outstanding quality and service. I would definitely recommend them to others.",
  },
  {
    id: 5,
    name: "Sarah Davis",
    position: "Project Manager, Growth Inc",
    review: "Exceptional work and great communication throughout the project.",
  },
  {
    id: 6,
    name: "David Wilson",
    position: "Operations Director, Global Enterprises",
    review: "Reliable and efficient service. They truly understand our needs and exceed expectations.",
  },
  {
    id: 7,
    name: "Lisa Anderson",
    position: "HR Director, PeopleFirst",
    review: "Excellent customer service and attention to detail. They go above and beyond to ensure our satisfaction.",
  },
];

const ClientsFeed = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-12">Hear what our satisfied clients have to say about their experience working with Seven Hills Facility Services.</p>
      </div>
      <Swiper modules={[Autoplay, Pagination]} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} slidesPerView={1} speed={800} breakpoints={{ 640: { slidesPerView: 2 }, 1025: { slidesPerView: 4 } }}>
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="relative bg-white p-6 m-4 h-full flex flex-col justify-between border border-sky-500 border-2">
              <FaQuoteLeft className="absolute top-4 right-4 text-sky-500 text-3xl" />
              <div className="flex items-center space-x-4 mb-2">
                <FaUserCircle className="text-4xl text-sky-500"/>
                <div className="flex flex-col justify-start items-start">
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-gray-600 text-xs">{review.position}</div>
                </div>
              </div>
              <div className="text-gray-700 mb-4">{review.review}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsFeed;