import React from 'react';
import './Destinations.css';

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <h2>Popular Indian Destinations</h2>
      <div className="destinations-list">
        <div className="destination-card">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Goa" />
          <h3>Goa</h3>
          <p>Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage. Perfect for relaxation and adventure.</p>
        </div>
        <div className="destination-card">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80" alt="Jaipur" />
          <h3>Jaipur</h3>
          <p>The Pink City, known for its majestic forts, palaces, colorful bazaars, and rich Rajasthani culture.</p>
        </div>
        <div className="destination-card">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Kerala" />
          <h3>Kerala</h3>
          <p>God's Own Country, famous for its serene backwaters, lush greenery, and unique houseboat experiences.</p>
        </div>
        <div className="destination-card">
          <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80" alt="Ladakh" />
          <h3>Ladakh</h3>
          <p>A land of high passes, breathtaking landscapes, Buddhist monasteries, and adventure for thrill-seekers.</p>
        </div>
        <div className="destination-card">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Varanasi" />
          <h3>Varanasi</h3>
          <p>The spiritual heart of India, known for its ghats, temples, and the sacred Ganges River rituals.</p>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
