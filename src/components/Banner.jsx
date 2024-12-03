import React from 'react'
import Slider from "reacrt-slick";
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';


const Banner = () => {
  const[ Sequence, setSequence ] = 

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}

export default Banner