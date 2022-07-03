import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <HeroSection />
        <Card />
    </div>
  )
}

export default App