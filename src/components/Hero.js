import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Explore the World with GlobeTrotter Travels</h1>
      <p>Your adventure starts here. Discover amazing destinations and exclusive packages.</p>
      <a href="#packages" className="hero-btn">View Packages</a>
    </section>
  );
}

export default Hero;
