import React, { useState, useEffect } from 'react';
import Card from './Card';

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Flip card when scrolled down
      if (scrolled > 200 && !isFlipped) {
        setIsFlipped(true);
      } 
      // Flip back when scrolled up
      else if (scrolled <= 200 && isFlipped) {
        setIsFlipped(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFlipped]);

  const handleCardClick = () => {
    if (isFlipped) {
      // Back side clicked - open modal or handle contact
      console.log('Open contact modal');
      // Your modal logic here
    } else {
      // Front side clicked - go to website
      window.location.href = 'https://yourwebsite.com';
    }
  };

  return (
    <div style={{ minHeight: '200vh' }}>
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'sticky',
        top: 0
      }}>
        <Card isFlipped={isFlipped} onCardClick={handleCardClick} />
      </div>
    </div>
  );
};

export default App;

