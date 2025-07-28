import React, { useRef } from 'react';
import './Testimonials.css';

function Testimonials() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        <button className="scroll-arrow left-arrow" onClick={scrollLeft}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div className="testimonials-list" ref={scrollContainerRef}>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Amazing experience with GlobeTrotter! The Goa package was perfect - beautiful beaches, great hotels, and excellent service. Highly recommend!"</p>
            <span className="customer-name">- Priya Sharma</span>
            <span className="review-date">2 weeks ago</span>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"The Rajasthan tour was incredible! From Jaipur's palaces to Udaipur's lakes, everything was perfectly arranged. The desert safari was the highlight!"</p>
            <span className="customer-name">- Rajesh Kumar</span>
            <span className="review-date">1 month ago</span>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Kerala backwaters were magical! The houseboat experience was unforgettable. GlobeTrotter made our honeymoon perfect. Thank you!"</p>
            <span className="customer-name">- Anjali & Amit</span>
            <span className="review-date">3 weeks ago</span>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Ladakh adventure was beyond expectations! The trekking, monasteries, and Pangong Lake were breathtaking. Best travel decision ever!"</p>
            <span className="customer-name">- Vikram Singh</span>
            <span className="review-date">1 month ago</span>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Varanasi spiritual journey was deeply moving. The Ganga Aarti ceremony was magical. GlobeTrotter's local guides were excellent."</p>
            <span className="customer-name">- Meera Patel</span>
            <span className="review-date">2 weeks ago</span>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Outstanding service! From booking to execution, everything was flawless. The team is professional and caring. Will definitely travel again!"</p>
            <span className="customer-name">- Sanjay & Family</span>
            <span className="review-date">1 week ago</span>
          </div>
        </div>
        
        <button className="scroll-arrow right-arrow" onClick={scrollRight}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
