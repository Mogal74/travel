import React from 'react';
import './Packages.css';

function Packages() {
  return (
    <section className="packages" id="packages">
      <h2>Exclusive Indian Packages</h2>
      <div className="packages-list">
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Goa Beach Paradise" />
          <h3>Goa Beach Paradise</h3>
          <p>5 nights in Goa, beach resorts, water sports, spice plantation tour, and Portuguese heritage sites.</p>
          <span className="price">₹25,999</span>
        </div>
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80" alt="Rajasthan Royal Experience" />
          <h3>Rajasthan Royal Experience</h3>
          <p>6 nights in Jaipur, Udaipur, Jodhpur, luxury palace stays, desert safari, and cultural shows.</p>
          <span className="price">₹35,999</span>
        </div>
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Kerala Backwaters Bliss" />
          <h3>Kerala Backwaters Bliss</h3>
          <p>4 nights in Kerala, houseboat cruise, Ayurveda spa, tea plantation, and traditional Kathakali show.</p>
          <span className="price">₹22,999</span>
        </div>
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80" alt="Ladakh Adventure Trek" />
          <h3>Ladakh Adventure Trek</h3>
          <p>7 nights in Ladakh, monastery visits, high-altitude trekking, Pangong Lake, and local homestay.</p>
          <span className="price">₹28,999</span>
        </div>
        <div className="package-card">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Varanasi Spiritual Journey" />
          <h3>Varanasi Spiritual Journey</h3>
          <p>3 nights in Varanasi, Ganga Aarti ceremony, temple visits, boat ride, and spiritual meditation.</p>
          <span className="price">₹15,999</span>
        </div>
      </div>
    </section>
  );
}

export default Packages;
