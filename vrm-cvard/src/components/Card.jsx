import React from 'react';

const Card = ({ isFlipped, onCardClick }) => {
  const cardClasses = `card ${isFlipped ? 'flipped' : ''}`;

  return (
    <div className="card-container">
      <div 
        className={cardClasses}
        onClick={onCardClick}
      >
        {/* FRONT SIDE */}
        <div className="card-face card-front">
          <div className="profile-img">
            <img 
              src="/images/profilepic.png" 
              alt="Profile picture" 
              className="profile-photo" 
            />
          </div>
          <div className="brand-name">
            <span className="name-part">Vindhyachal</span>
            <span className="name-part highlight">Resume Maker</span>
          </div>
          <p className="tagline">Stand out, Get Hired!</p>
          <div className="info">
            <p>Professional resume writing services</p>
            <p>to help you land your dream job</p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="card-face card-back">
          <div className="barcode-container">
            <img 
              src="/images/qr.png" 
              alt="QR Code" 
              className="barcode" 
            />
          </div>
          <p className="scan-text">Scan to connect with us</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
