import React from 'react';

const ScrollIndicators = ({ isFlipped }) => {
  return (
    <>
      {/* Scroll/swipe down indicator - shows when on front side */}
      {!isFlipped && (
        <div className="scroll-indicator">
          ↑ Scroll or swipe to flip ↑
        </div>
      )}

      {/* Tap indicator - shows when on front side */}
      {!isFlipped && (
        <div className="tap-indicator">
          ↓ Tap for our services ↓
        </div>
      )}
    </>
  );
};

export default ScrollIndicators;
