import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WELCOME <br></br>
      TO MY<br></br>
       PORTFOLIO!</h1>
      <p>Come see whats in store.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          Link to='/projects'
        >
          see my work
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          Link to='/connect'
        >
          contact me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
