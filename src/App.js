import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import KatieZaferes from './assets/KatieZaferes.svg';
import Wedding from './assets/wedding.svg';
import Bike from './assets/bike.svg';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <HeroSection />
        <div className='App-cards'>
            <Card img={KatieZaferes} rating='5.0' reviewCount='6' country='USA' title='Life lessons with Katie Zeferes' price='136' />
            <Card img={Wedding} rating='5.0' reviewCount='30' country='USA' title='Learn wedding photography' price='125' />
            <Card img={Bike} rating='4.8' reviewCount='2' country='USA' title='Group mountain biking' price='50' />
        </div>
    </div>
  )
}

export default App