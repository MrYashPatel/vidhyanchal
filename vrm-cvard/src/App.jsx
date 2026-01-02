import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import ScrollIndicators from './components/ScrollIndicators';
import ContactModal from './components/ContactModal';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if loaded from QR code scan
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setIsModalOpen(true);
    }
  }, []);

  const handleCardClick = () => {
    if (isFlipped) {
      // If showing back side, open modal
      setIsModalOpen(true);
    } else {
      // If showing front side, go to website
      window.location.href = 'https://yourwebsite.com';
    }
  };


  return (
    <>
      <div className="container">
        <Card 
          isFlipped={isFlipped} 
          onCardClick={handleCardClick}
        />
      </div>

      <ScrollIndicators isFlipped={isFlipped} />

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default App;

