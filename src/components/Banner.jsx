import React from 'react'

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">

      <div>
          <img src="./images/home/banner.png" alt="" />
          <div className='flex flex-col md:flex-row justify-center items-center -mt-8 gap-3'> 
          <div className='flex bg-white py-2 px-3 rounded-2xl item-center gap-3 shadow-md w-64'>
            <img
              src="./images/home/b-food1.png"
              alt=""
              className="rounded-2xl"
            />
            <div className='space-y-1'>
              <h5 className='font-medium mb-1'> Spicy-noodles</h5>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="5 star"
                />
              </div>
              <p className='text-red'>$10.00</p>
            </div>
          </div>
          <div className='md:flex hidden  bg-white py-2 px-3 rounded-2xl item-center gap-3 shadow-md w-64'>
            <img
              src="./images/home/b-food1.png"
              alt=""
              className="rounded-2xl"
            />
            <div className='space-y-1'>
              <h5 className='font-medium mb-1'> Spicy-noodles</h5>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  aria-label="5 star"
                />
              </div>
              <p className='text-red'>$10.00</p>
            </div>
          </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-7 px-4 ">
          <h2 className="md:text-5xl text-3xl font-bold md:leading-snug leading-snug">
          Savor Every Bite of Pure{" "}
            <span className="text-[#39DB4A]">Deliciousness</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
          At TastyNest, every bite is crafted to deliver pure deliciousness—fresh, flavorful, and unforgettable.
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner