import React from 'react'
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className=" md:64">
            <h2 className="subtitle">Special Dishes</h2>
            <p className="title md:4/5">Standout Dishes From Our Menu</p>
            <blockquote className="my-5 text-semibold leading-[30px]">
              "I had the pleasure of dinning at Foodie, and i'm still raving
              about the experience! The attention to detail in presentation and
              service was impecable.""
            </blockquote>

            {/* avatar */}
            <div className='flex items-center gap-4 flex-wrap'>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className='space-x-1'>
                <h5 className='text-lg font-semibold'> Customer Feedback</h5> 
                <div className='flex items-center gap-2'> 
                    <FaStar className='text-yellow'/>
                    <span className='font-medium'>4.9</span><span className='text-[#807E7E]'>( 14.5 Reviews)</span>
                </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials