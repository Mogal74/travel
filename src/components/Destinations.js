import React, { useState } from 'react';
import './Destinations.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const defaultPackageTemplate = (templeName, code) => ({
  title: `${templeName} Taxi Package`,
  code,
  duration: '8 Hours',
  route: `${templeName} Darshan, Return Drop at Tirupati`,
  includes: [
    'Toll Charges',
    'Temple Parking Fees',
    'Driver Bata',
  ],
  note: 'Only the driver’s food has to be provided by the customer.',
  cost: 'Starts at ₹2,000',
});

const packagesData = [
  {
    destination: 'Tirumala Venkateswara Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Tirumala_Venkateswara_temple_entrance_09062015.JPG/640px-Tirumala_Venkateswara_temple_entrance_09062015.JPG',
    packages: [
      {
        title: 'Tirupati - Tirumala Taxi Package',
        code: 'SPL0001',
        duration: '8 Hours',
        route: 'Padmavathi Temple, Varahaswamy Temple, Tirumala Balaji Darshan, Return Drop at Tirupati',
        includes: [
          'Toll Charges',
          'Temple Parking Fees',
          'Driver Bata',
        ],
        note: 'Only the driver’s food has to be provided by the customer.',
        cost: 'Starts at ₹2,000',
      }
    ],
  },
  {
    destination: 'Padmavathi Ammavari Temple',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/10/0f/8d/75/padmavathi-temple-tiruchanur.jpg',
    packages: [],
  },
  {
    destination: 'Govindaraja Swamy Temple',
    img: 'https://c9admin.cottage9.com/uploads/2216/Architectural-Magnificence-of-Govindaraja-Swamy-Temple-Tirupati.jpg',
    packages: [],
  },
  {
    destination: 'Kapila Theertham',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIQEJaJ4RfVTlE2lsqFNYvw_zsALkHb5wbQ&s',
    packages: [],
  },
  {
    destination: 'ISKCON Tirupati',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOsnKHJBfrnhxuVIyGS9y6H3D0kQFZ1Icjw&s',
    packages: [],
  },
  {
    destination: 'Sri Kalahasti Temple',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8WJbLLbFH-ddUXD2E0FaxTbVZW4_CU62pA&s',
    packages: [
      {
        title: 'Tirupati to Kalahasti Taxi Package',
        code: 'SPL0008',
        duration: '6 Hours',
        route: 'Padmavathi Temple, Sri Kalahasti Temple, Return Drop at Tirupati',
        includes: [
          'Toll Charges',
          'Temple Parking Fees',
          'Driver Bata',
        ],
        note: 'Only the driver’s food has to be provided by the customer.',
        cost: 'Starts at ₹2,500',
      }
    ],
  },
  {
    destination: 'Kanipakam Temple',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kanipakam_Temple.jpg/1200px-Kanipakam_Temple.jpg',
    packages: [],
  },
  {
    destination: 'Vellore Golden Temple',
    img: 'https://yatradham.org/media/catalog/product/s/r/sri-lakshmi-narayani-golden-temple.jpg',
    packages: [
      {
        title: 'Tirupati to Golden Temple Taxi Package',
        code: 'SPL0005',
        duration: '1 Day',
        route: 'Srivarasamangapuram, Kanipakam, Golden Temple, Return Drop at Tirupati',
        includes: [
          'Toll Charges',
          'Tax & Permit Fees',
          'Temple Parking Fees',
          'Driver Bata',
        ],
        note: 'Only the driver’s food has to be provided by the customer.',
        cost: 'Starts at ₹3,500',
      }
    ],
  },
  {
    destination: 'Nagalapuram Temple',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxW4_EXjG7FM34I3wU3hL_K4XlNCBrPe9kLo2MCVgoBCunec_SBzJiPmC2wRBPC8eP8xJ73WZlZv9OrTIvDfNUFvl7m9E3J6r0C8AYLaabxczrIhIH7Zt-xLjuJQFQaZQ0Mk3dPjEhJxQ/s320/03022008436.jpg',
    packages: [],
  },
  {
    destination: 'Arunachalam Temple',
    img: 'https://static.wixstatic.com/media/d37a82_5e883d44aa974dbdb710ee8d0b02e7d1~mv2.png/v1/fill/w_568,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d37a82_5e883d44aa974dbdb710ee8d0b02e7d1~mv2.png',
    packages: [
      {
        title: 'Tirupati to Arunachalam Taxi Package',
        code: 'SPL0002',
        duration: '1 Day',
        route: 'Srivarasamanga puram, Kanipakam, Arunachalam, Golden Temple, Return Drop at Tirupati',
        includes: [
          'Toll, Tax, and Permit Charges',
          'Temple Parking Fees',
          'Driver Bata',
        ],
        note: 'Only the driver’s food has to be provided by the customer.',
        cost: 'Starts at ₹4,000',
      }
    ],
  },
];

// Add default package to temples without packages
const autoPackageCodes = ['AUTO001','AUTO002','AUTO003','AUTO004','AUTO005','AUTO006','AUTO007','AUTO008','AUTO009','AUTO010'];
const packagesDataWithDefaults = packagesData.map((temple, idx) => {
  if (!temple.packages || temple.packages.length === 0) {
    return {
      ...temple,
      packages: [defaultPackageTemplate(temple.destination, autoPackageCodes[idx] || `AUTO${(idx+1).toString().padStart(3,'0')}`)]
    };
  }
  return temple;
});

function Destinations() {
  const [expandedPackage, setExpandedPackage] = useState(null);

  const handleToggle = (destIdx, pkgIdx) => {
    const key = `${destIdx}-${pkgIdx}`;
    setExpandedPackage(prev => prev === key ? null : key);
  };

  return (
    <section className="destinations" id="destinations">
      <h2>Sacred Temple Destinations</h2>
      <div className="destinations-list">
        {packagesDataWithDefaults.map((dest, destIdx) => (
          <div className="destination-card" key={dest.destination}>
            <img src={dest.img} alt={dest.destination} />
            {/* Show cost at top right corner of image for the first package (main package) */}
            {dest.packages && dest.packages.length > 0 && (
              <div className="package-cost-badge">
                <span>{dest.packages[0].cost.replace(/^[^\d]*/, '')}</span>
              </div>
            )}
            <h3>{dest.destination}</h3>
            {dest.packages && dest.packages.length > 0 && dest.packages.map((pkg, pkgIdx) => {
              const key = `${destIdx}-${pkgIdx}`;
              const isOpen = expandedPackage === key;
              return (
                <React.Fragment key={pkg.code}>
                  {isOpen && <div className="overlay" onClick={() => handleToggle(destIdx, pkgIdx)} />}
                  <div className={`package-info${isOpen ? ' expanded' : ''}`}>
                    {isOpen && (
                      <button className="close-btn" onClick={() => handleToggle(destIdx, pkgIdx)}>&times;</button>
                    )}
                    <h4>{pkg.title}</h4>
                    <p><strong>Package Code:</strong> {pkg.code}</p>
                    <p><strong>Duration:</strong> {pkg.duration}</p>
                    {isOpen ? (
                      <>
                        <p><strong>Route Plan:</strong> {pkg.route}</p>
                        <p><strong>Package Includes:</strong></p>
                        <ul>
                          {pkg.includes.map((inc, i) => <li key={i}>{inc}</li>)}
                        </ul>
                        <p className="package-note"><strong>Note:</strong> {pkg.note}</p>
                        <p className="package-cost"><strong>Cost:</strong> {pkg.cost}</p>
                        <button className="expand-btn" onClick={() => handleToggle(destIdx, pkgIdx)}>
                          Collapse To Read Less
                          <RiArrowDropDownLine style={{ transform: 'rotate(180deg)', fontSize: '1.5em', verticalAlign: 'middle' }} className="dropdown-icon" />
                        </button>
                      </>
                    ) : (
                      <button className="expand-btn" onClick={() => handleToggle(destIdx, pkgIdx)}>
                        Expand To Read More
                        <RiArrowDropDownLine style={{ fontSize: '1.5em', verticalAlign: 'middle' }} className="dropdown-icon" />
                      </button>
                    )}
                    {/* Always visible Book Now button */}
                    <a href="tel:9642173831" className="book-now-btn">Book Now</a>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
