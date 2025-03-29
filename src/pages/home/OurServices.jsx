import React from 'react'

const servicesLists = [
    { id: 1, title: "Catering",desc: "Delight your guests with a culinary experience like no other.",Image: "./images/home/services/icon1.png",},
    { id: 2, title: "Fast Delivery",desc: "We deliver your favorite dishes to your doorstep.",Image: "./images/home/services/icon2.png",},
    { id: 3, title: "Online Ordering",desc: "Order your favorite dishes from the comfort of your home.",Image: "./images/home/services/icon3.png",},
    { id: 4, title: "Gift Cards",desc: "Give the gift of exceptional dinning with a gift card.",Image: "./images/home/services/icon4.png",},
]
const OurServices = () => {
  return (
        <div className="section-container">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                  <div className=" md:76">
                    <h2 className="subtitle mt-10 sm:px-5 py-4">Our Story and Services</h2>
                    <p className="title md:4/5">The Taste Behind Our Brand</p>
                    <p className="my-5 font-semibold leading-[30px]">
                    Driven by passion, we craft memorable dining moments and deliver outstanding 
                    service, blending culinary creativity with heartfelt hospitality.
                    </p>
                  </div>
                  <button className='btn bg-green text-white rounded-full px-8 py-3 '>Explore</button>
                </div>

                <div className="md:w-1/2">
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                  {
                    servicesLists.map((item, i) => (
                      <div key={i} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo 
                      transition-all duration-200 hover:border'>
                        <div>
                          <img src={item.Image} alt="" className='mx-auto'/>
                        </div>
                        <div>
                          <h5 className="pt-3 font-semibold">{item.title}</h5>
                          <p className="text-[#90bd95]">{item.desc}</p>
                        </div>
                      </div>
                    ))
                  }
                  </div>
                </div>
              </div>
            </div>
  )
}

export default OurServices