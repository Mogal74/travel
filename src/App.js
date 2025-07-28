import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import RentalServices from './components/RentalServices';
import Footer from './components/Footer';
import ContactFab from './components/ContactFab';
import ContactModal from './components/ContactModal';
import './App.css';

function App() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  return (
    <div className="App">
      <Navbar openContactModal={openContactModal} />
      <Hero />
      <Destinations />
      <Packages />
      <RentalServices />
      <Testimonials />
      <Footer openContactModal={openContactModal} />
      <ContactFab openContactModal={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
