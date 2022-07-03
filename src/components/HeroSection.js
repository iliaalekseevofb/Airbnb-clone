import React from 'react';
import Layout from "../assets/layout.svg";

const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='hero-layout'>
            <img src={Layout} alt='layout' />
        </div>
    </div>
  )
}

export default HeroSection