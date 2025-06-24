import React from 'react';
import './Hero.css';
import kingsImage from '../images/kings.jpeg';

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${kingsImage})` }}
    >
      <div className="hero-content">
        <h1>مسيرة من العز</h1>
        <p>اكتشف مسيرة وطن.. من المؤسس حتى الحاضر، مجدٌ يُروى عبر الأجيال</p>
        <a href="#kings" className="hero-button">استكشاف</a>
      </div>
    </section>
  );
}

export default Hero;
