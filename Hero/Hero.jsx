import React from 'react';
import './Hero.css'; 
import chocolate from '../Assets/imgB5.jpg'; 
const Hero = ({handlePopup}) => {
    return (
        <section className="hero-section">
            <div className="image-container">
                <img src={chocolate} alt="" className='imgc' />
            </div>
            <div className="content">
                <h1>Experience pure delight</h1>
                <h1> with our</h1>
                <h1> exquisite chocolate creations</h1>
                <p>Discover the joy of everyday moments with our delightful offerings</p>
                <button onClick={handlePopup} >Order Now</button>
            </div>
        </section>
    );
};

export default Hero;