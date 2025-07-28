import React, { useState } from 'react';
import './RentalServices.css';

const RentalServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const vehicles = [
    {
      id: 1,
      name: "Toyota Innova",
      category: "car",
      type: "SUV",
      capacity: "7 passengers",
      price: "₹2,500/day",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80",
      features: ["AC", "GPS", "Driver", "Insurance"],
      description: "Comfortable SUV perfect for family trips and group travel."
    },
    {
      id: 2,
      name: "Honda City",
      category: "car",
      type: "Sedan",
      capacity: "5 passengers",
      price: "₹1,800/day",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
      features: ["AC", "Music System", "Driver", "Insurance"],
      description: "Elegant sedan for business trips and comfortable city travel."
    },
    {
      id: 3,
      name: "Maruti Swift",
      category: "car",
      type: "Hatchback",
      capacity: "5 passengers",
      price: "₹1,200/day",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=400&q=80",
      features: ["AC", "Fuel Efficient", "Driver", "Insurance"],
      description: "Compact and fuel-efficient car ideal for city commuting."
    },
    {
      id: 4,
      name: "Mercedes Sprinter",
      category: "bus",
      type: "Mini Bus",
      capacity: "12 passengers",
      price: "₹4,500/day",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d14c8?auto=format&fit=crop&w=400&q=80",
      features: ["AC", "WiFi", "Driver", "Insurance", "Luggage Space"],
      description: "Luxury mini bus for corporate events and group tours."
    },
    {
      id: 5,
      name: "Tata Starbus",
      category: "bus",
      type: "Coach Bus",
      capacity: "35 passengers",
      price: "₹8,500/day",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80",
      features: ["AC", "WiFi", "Driver", "Insurance", "Luggage Space", "Entertainment"],
      description: "Large coach bus perfect for school trips and large group tours."
    },
    {
      id: 6,
      name: "Force Traveller",
      category: "bus",
      type: "Mini Bus",
      capacity: "15 passengers",
      price: "₹3,200/day",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d14c8?auto=format&fit=crop&w=400&q=80",
      features: ["AC", "Driver", "Insurance", "Luggage Space"],
      description: "Reliable mini bus for airport transfers and local tours."
    }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <section className="rental-services" id="rentals">
      <div className="container">
        <h2>Travel Rental Services</h2>
        <p className="section-subtitle">Choose from our wide range of vehicles for your perfect journey</p>
        
        <div className="category-filters">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Vehicles
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'car' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('car')}
          >
            <i className="fas fa-car"></i> Cars
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'bus' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('bus')}
          >
            <i className="fas fa-bus"></i> Buses
          </button>
        </div>

        <div className="vehicles-grid">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">
                <img src={vehicle.image} alt={vehicle.name} />
                <div className="vehicle-type-badge">
                  {vehicle.type}
                </div>
                <div className="vehicle-price">
                  {vehicle.price}
                </div>
              </div>
              
              <div className="vehicle-content">
                <h3>{vehicle.name}</h3>
                <p className="vehicle-description">{vehicle.description}</p>
                
                <div className="vehicle-details">
                  <div className="detail-item">
                    <i className="fas fa-users"></i>
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="detail-item">
                    <i className={`fas fa-${vehicle.category === 'car' ? 'car' : 'bus'}`}></i>
                    <span>{vehicle.type}</span>
                  </div>
                </div>

                <div className="vehicle-features">
                  {vehicle.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="vehicle-actions">
                  <button className="btn-primary">Book Now</button>
                  <button className="btn-secondary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rental-info">
          <div className="info-card">
            <i className="fas fa-shield-alt"></i>
            <h4>Fully Insured</h4>
            <p>All our vehicles come with comprehensive insurance coverage</p>
          </div>
          <div className="info-card">
            <i className="fas fa-user-tie"></i>
            <h4>Professional Drivers</h4>
            <p>Experienced and licensed drivers for safe travel</p>
          </div>
          <div className="info-card">
            <i className="fas fa-clock"></i>
            <h4>24/7 Support</h4>
            <p>Round the clock customer support for any assistance</p>
          </div>
          <div className="info-card">
            <i className="fas fa-credit-card"></i>
            <h4>Flexible Payment</h4>
            <p>Multiple payment options including online booking</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalServices; 