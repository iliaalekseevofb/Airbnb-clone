import React from 'react';
import Layout from "../assets/layout.svg";

const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='hero-layout'>
            <img src={Layout} alt='layout' />
        </div>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default HeroSection