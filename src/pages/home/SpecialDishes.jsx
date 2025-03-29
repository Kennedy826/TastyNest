import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import {} from 'react-icons/fa6'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
      NEXT
    />
  );
};

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
      PREV
    />
  );
};

const SpecialDishes = () => {
  
  const [recipes, setRecipes] = useState([]);
  const slider =React.useRef(null);

  useEffect(() => {
    fetch("/menu.json").then(res => res.json()) .then(data => {
      const specials = data.filter((item) => item.category === "popular")
    setRecipes(specials);
    })
})

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow:<simpleNextArrow />,
    nextArrow:<simpleNextArrow/>,
    
  };

  return (
    <div className='section-container my-20 relative'>
    <div className=' md:64'> 
        <h2 className='subtitle'>Special Dishes</h2>
        <p className='title md:w-69'>Our Signature Dishes</p>
        </div>
       <div className='absolute top-3 right-8 mb-10 md:mr-24'> 
        <button onClick={() => slider.current.slickPrev()} className='btn p-2 rounded-full ml-5'>
          <FaAngleLeft className='w-8 h-8 p-1'/> </button>
        <button onClick={() => slider.current.slickNext()} className='btn p-2 rounded-full ml-5 bg-green'>
          <FaAngleRight className='w-8 h-8 p-1'/>  </button>
          </div>
        <Slider ref={slider} {...settings} className='overflow-hidden mt-10 mb-10 space-x-5'>
      {
        recipes.map((item, i)  => (
          <Cards key={i} item={item}/>
        ))
      }
    </Slider>

        </div>

  )
}

export default SpecialDishes