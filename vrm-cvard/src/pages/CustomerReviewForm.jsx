import React, { useState } from 'react';

const CustomerReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    serviceOpted: '',
    rating: 0,
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingClick = (value) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now (no Mongo yet): persist the review locally so the homepage can render it.
    const reviewsKey = 'customerReviews';
    const existingRaw = window.localStorage.getItem(reviewsKey);
    const existingReviews = existingRaw ? JSON.parse(existingRaw) : [];

    const newReview = {
      name: formData.name,
      service: formData.serviceOpted,
      rating: formData.rating,
      review: formData.message,
      date: new Date().toISOString(),
    };

    window.localStorage.setItem(reviewsKey, JSON.stringify([newReview, ...existingReviews]));

    // Send the user back to the reviews section.
    window.location.href = '/#reviews';
  };

  return (
    <div className="welcome-page">
      <div className="welcome-hero">
        <div className="welcome-hero-content customer-review-hero-content">
          <div className="form-section" style={{ margin: '0 auto', maxWidth: 720 }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceOpted">Service Opted</label>
                <select
                  id="serviceOpted"
                  name="serviceOpted"
                  value={formData.serviceOpted}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Entry Level Resume">Entry Level Resume</option>
                  <option value="Professional Resume">Professional Resume</option>
                  <option value="Executive Resume">Executive Resume</option>
                  <option value="ATS Optimized Resume">ATS Optimized Resume</option>
                  <option value="Cover Letter">Cover Letter</option>
                  <option value="LinkedIn Profile Optimization">
                    LinkedIn Profile Optimization
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Rate (out of 5)</label>
                <div
                  className="rating-stars"
                  role="radiogroup"
                  aria-label="Rate out of 5"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`star-button ${
                        formData.rating >= value ? 'active' : ''
                      }`}
                      onClick={() => handleRatingClick(value)}
                      aria-label={`${value} star`}
                      aria-checked={formData.rating === value}
                      role="radio"
                    >
                      ★
                    </button>
                  ))}
                </div>

                {/* Hidden input to allow native form validation for rating */}
                <input
                  className="rating-hidden-input"
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rating: Number(e.target.value),
                    })
                  }
                  min="1"
                  max="5"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Review</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Write your review / feedback"
                />
              </div>

              <button
                type="submit"
                className="submit-button customer-review-submit-button"
              >
                Write a Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewForm;

