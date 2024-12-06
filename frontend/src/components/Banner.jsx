import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [slides, setSlides ] = useState([]);

  useEffect(()=>{
    //json 가져오기
    axios.get("./json/banner.json")
    .then((res)=>{
       const data = res.data.texts;
       console.table(data);
       setSlides(data);
    })
    .catch((error)=>console.error('Error loading JSON : ' , error));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {
        slides.map((slide, index)=>(
          <div key={index} className={`banner banner${index+1}`}>
             <TypeAnimation
               sequence={[
                  ...slide.flatMap((item)=>[item.content, item.delay])
               ]}
               wrapper="span"
               speed={50}
               className="typeanimation"
               repeat={Infinity}
               />
          </div>
        ))
      }
    </Slider>
  );
}

export default Banner