import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import ScrollIndicators from './components/ScrollIndicators';
import ContactModal from './components/ContactModal';
import Welcome from './pages/Welcome';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

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

  // Handle wheel and touch events to flip card infinitely (without actual scrolling)
  useEffect(() => {
    let touchStartY = 0;
    let isFlipping = false;

    const handleWheel = (e) => {
      if (isFlipping) return;

      // Scroll down - always flip to back (or keep flipping)
      if (e.deltaY > 0) {
        isFlipping = true;
        setIsFlipped(prev => !prev); // Toggle flip
        setTimeout(() => { isFlipping = false; }, 800); // Match animation duration
      }
      // Scroll up - always flip to front (or keep flipping)
      else if (e.deltaY < 0) {
        isFlipping = true;
        setIsFlipped(prev => !prev); // Toggle flip
        setTimeout(() => { isFlipping = false; }, 800);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isFlipping) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      // Swipe up - flip the card
      if (deltaY > 50) {
        isFlipping = true;
        setIsFlipped(prev => !prev);
        setTimeout(() => { isFlipping = false; }, 800);
      }
      // Swipe down - flip the card
      else if (deltaY < -50) {
        isFlipping = true;
        setIsFlipped(prev => !prev);
        setTimeout(() => { isFlipping = false; }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isFlipped]);

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
        <div className={`card-section ${showHomePage ? 'slide-left' : ''}`}>
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

