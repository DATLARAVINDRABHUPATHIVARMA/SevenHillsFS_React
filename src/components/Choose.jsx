import React from 'react';
import choose from '../assets/Why Choose.jpg';

const Choose = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 xl:px-6 2xl:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose <span className="text-pink-500">Seven Hills?</span></h2>
            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">We are a leading provider of comprehensive facility management services, dedicated to delivering exceptional solutions that enhance the efficiency, safety, and sustainability of your facilities.</p>
            
            <div className="space-y-6">
              {[{ title: "Trained Professionals", desc: "Our team consists of highly trained and certified professionals who are dedicated to providing top-notch service and support." },
              { title: "Comprehensive Services", desc: "We offer a wide range of services to meet all your facility management needs, from maintenance to operations." },
              { title: "24/7 Support", desc: "Our dedicated support team is available around the clock to address any issues or concerns you may have." }].map((item, index) => (
                <div key={index} className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-square">
              <img src={choose} className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white" alt="Why Choose Seven Hills" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Choose;