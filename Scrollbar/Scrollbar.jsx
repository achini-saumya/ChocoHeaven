import React, { useRef } from 'react';
import './Scrollbar.css'; 

import imgS1 from '../Assets/imgS1.jpg';
import imgS2 from '../Assets/imgS2.jpg';
import imgS3 from '../Assets/imgS3.jpg'
import imgS4 from '../Assets/imgS4.jpg'
import imgS5 from '../Assets/imgS5.jpg'
import imgS6 from '../Assets/imgS6.jpg'
import imgS7 from '../Assets/imgS7.jpg'
import imgS8 from '../Assets/imgS8.jpg'
import imgS9 from '../Assets/imgS9.jpg'
import imgS10 from '../Assets/imgS10.jpg'
import imgS12 from '../Assets/imgS12.jpg'
import imgS13 from '../Assets/imgS13.jpg'
import imgS14 from '../Assets/imgS14.jpg'
import imgS15 from '../Assets/imgS15.jpg'
import imgS17 from '../Assets/imgS17.jpg'
import imgS18 from '../Assets/imgS18.jpg'
import imgS20 from '../Assets/imgS20.jpg'
import imgS21 from '../Assets/imgS21.jpg'


const Scrollbar = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (evt) => {
    const scrollAmount = evt.deltaY;
    const scrollContainer = document.querySelector('.products');
    const currentScrollLeft = scrollContainer.scrollLeft;
    scrollContainer.scrollTo({
      left: currentScrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className="products-slider" onWheel={handleScroll}>
      <div className="products" ref={scrollContainerRef}>
        <img src={imgS1} alt="" />
        <img src={imgS2} alt="" />
        <img src={imgS3} alt="" />
        <img src={imgS4} alt="" />
        <img src={imgS5} alt="" />
        <img src={imgS6} alt="" />
        <img src={imgS7} alt="" />
        <img src={imgS8} alt="" />
        <img src={imgS9} alt="" />
        <img src={imgS10} alt="" />
        <img src={imgS12} alt="" />
        <img src={imgS15} alt="" />
        <img src={imgS13} alt="" />
        <img src={imgS14} alt="" />
        <img src={imgS17} alt="" />
        <img src={imgS18} alt="" />
        <img src={imgS20} alt="" />
        <img src={imgS21} alt="" />
       
      </div>
    </div>
  );
};

export default Scrollbar;