import React from 'react';
import '../Styles.css/hero.css';
import img1 from '../images/img1.jpg';

const Hero = () => {
  return <section className='Hero' id="Hero">
    <div className="hero">
        <div className="hero-content">
            <h1>REACH YOUR BEST</h1>
            <p>Track your workouts , set goals , and monitor your progress.</p>
            <button className='btn'>Get Started</button>
        </div>
    </div>
    </section>
  
}

export default Hero