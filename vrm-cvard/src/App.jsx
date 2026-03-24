import React, { useState, useEffect, useRef } from 'react';
import Card from './components/Card';
import ScrollIndicators from './components/ScrollIndicators';
import ContactModal from './components/ContactModal';
import Welcome from './pages/Welcome';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const touchStartYRef = useRef(0);
  const isFlippingRef = useRef(false);

  // Check if loaded from QR code scan
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setIsModalOpen(true);
    }
  }, []);

  // Manage body class based on view
  useEffect(() => {
    if (showHomePage) {
      document.body.classList.remove('card-view');
      document.body.classList.add('split-view');
    } else {
      document.body.classList.add('card-view');
      document.body.classList.remove('split-view');
    }
  }, [showHomePage]);

  const triggerFlip = () => {
    if (isFlippingRef.current) return;
    isFlippingRef.current = true;
    setIsFlipped(prev => !prev);
    setTimeout(() => {
      isFlippingRef.current = false;
    }, 800);
  };

  const handleCardWheel = (e) => {
    if (e.deltaY !== 0) {
      triggerFlip();
    }
  };

  const handleCardTouchStart = (e) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleCardTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartYRef.current - touchEndY;
    if (Math.abs(deltaY) > 50) {
      triggerFlip();
    }
  };

  const handleCardClick = () => {
    if (isFlipped) {
      // If showing back side, open modal
      setIsModalOpen(true);
    } else {
      // If showing front side, go to home page (split screen)
      setShowHomePage(true);
    }
  };

  return (
    <>
      <div className={`app-layout ${showHomePage ? 'split-screen' : ''}`}>
        <div
          className={`card-section ${showHomePage ? 'slide-left' : ''}`}
          onWheel={handleCardWheel}
          onTouchStart={handleCardTouchStart}
          onTouchEnd={handleCardTouchEnd}
        >
          <div className="container">
            <Card
              isFlipped={isFlipped}
              onCardClick={handleCardClick}
            />
          </div>
          {!showHomePage && <ScrollIndicators isFlipped={isFlipped} />}
        </div>

        {showHomePage && (
          <div className="welcome-section">
            <Welcome />
          </div>
        )}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;

