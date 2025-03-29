import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaHeart } from 'react-icons/fa'

const Cards = ({item}) => {
  const [isHeartFillted, setIsHeartFillted] = useState(false)
  const handleHeartClick = (event) => {
    event.stopPropagation();
    setIsHeartFillted(!isHeartFillted)
  }
  return (
       <div className="card  bg-base-100 w-60 shadow-xl relative">
        <div className={`rating absolute gap-1 right-2 top-2 p-2 heartStar bg-green ${isHeartFillted ? 'text-red' : 'text-white'}`}
        onClick={handleHeartClick}
        >
          <FaHeart className='h-3 w-3 cursor-pointer'/>
        </div>
        <Link to ={"/menu/${item._id}"}>
        <figure>
    <img
      src={item.image}
      alt="" 
      className='hover:scale-105 transition-all duration-200 md:h-60'/>
  </figure>
        </Link>
  <div className="card-body">
    <Link to ={"/menu/${item._id}"}><h2 className="card-title">{item.name}</h2></Link>
    <Link to ={"/menu/${item._id}"}><p>{item.recipe}</p></Link>
    <div className="card-actions justify-between item-center mt-2">
      <h5 className='font-semibold'><span className='text-sm text-red' >$</span>{item.price}</h5>
      <button className="btn bg-green">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Cards