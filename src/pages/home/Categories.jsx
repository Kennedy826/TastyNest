import React from 'react'

const categoryItems = [
    {id: 1,   title: "Main Dish", desc:"(as dishes)" ,image: "./images/home/category/img1.png"},
    {id: 2,   title: "Breakfast", desc:"(12 break fast)" ,image: "./images/home/category/img2.png"},
    {id: 3,   title: "Desert", desc:"(48 desert)" ,image: "./images/home/category/img3.png"},
    {id: 4,   title: "Browse All", desc:"(as dishes)" ,image: "./images/home/category/img4.png"},
]
const Categories = () => {
  return (
    <div className='section-container py-8'>
        <div className='text-center'> 
            <h2 className='subtitle'>Customer Favorites</h2>
            <p className='title'> Popular Categories</p>
            </div>
            <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
                {categoryItems.map((item, i) => (
                    <div key={i} className='shawdow-lg rounded-md bg-white px-5 py-6 w-40 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div className='flex w-full mx-auto item-center justify-center'><img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' />
                    </div>
                    <div className='mt-5 space-y-1'>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
  )
}

export default Categories