import React, { useState } from 'react';
import Header from '../components/Header';

const Welcome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      service: 'Professional Resume',
      rating: 5,
      review: 'Outstanding service! My resume was completely transformed and I landed 3 interviews within a week. The ATS optimization really works!',
      date: 'December 2024'
    },
    {
      name: 'Priya Sharma',
      service: 'Executive Resume',
      rating: 5,
      review: 'Excellent work on my executive resume. The team understood my requirements perfectly and delivered a polished, professional document that helped me secure a senior management position.',
      date: 'November 2024'
    },
    {
      name: 'Amit Patel',
      service: 'ATS Optimized Resume',
      rating: 5,
      review: 'Highly recommended! The ATS optimization made a huge difference. My resume now passes through applicant tracking systems and I\'m getting more callbacks than ever before.',
      date: 'December 2024'
    },
    {
      name: 'Sneha Reddy',
      service: 'LinkedIn Profile Optimization',
      rating: 5,
      review: 'My LinkedIn profile looks amazing now! Professional, engaging, and optimized for recruiters. I\'ve noticed a significant increase in profile views and connection requests.',
      date: 'November 2024'
    },
    {
      name: 'Vikram Singh',
      service: 'Entry Level Resume',
      rating: 5,
      review: 'As a fresh graduate, I was struggling to create an impressive resume. The team helped me highlight my skills and projects beautifully. Got my first job within 2 weeks!',
      date: 'October 2024'
    },
    {
      name: 'Ananya Iyer',
      service: 'Cover Letter',
      rating: 5,
      review: 'The cover letter was perfectly crafted and tailored to my target role. It complemented my resume wonderfully and helped me stand out from other applicants.',
      date: 'December 2024'
    }
  ];

  const services = [
    { name: 'Entry Level Resume', price: '₹499' },
    { name: 'Professional Resume', price: '₹799' },
    { name: 'Executive Resume', price: '₹1299' },
    { name: 'ATS Optimized Resume', price: '₹999' },
    { name: 'Cover Letter', price: '₹399' },
    { name: 'LinkedIn Profile Optimization', price: '₹599' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi! I'm interested in your resume services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918128530118?text=${message}`, '_blank');
  };

  return (
    <div className="welcome-page" id="home">
      <Header />

      {/* Welcome Hero Section */}
      <div className="welcome-hero">
        <div className="welcome-hero-content">
          <h1 className="welcome-title">
            Welcome to <span className="welcome-highlight">Vindhyachal Resume Maker</span>
          </h1>
          <p className="welcome-subtitle">
            Transform Your Career with Professional Resume Services
          </p>
          <p className="welcome-description">
            We specialize in crafting ATS-optimized resumes that help you stand out in today's competitive job market.
            From entry-level to executive positions, we've got you covered with personalized, professional resume solutions.
          </p>
          <div className="welcome-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24hrs</div>
              <div className="stat-label">Quick Delivery</div>
            </div>
          </div>
        </div>
      </div>

      <div className="welcome-container" id="services">
        {/* Left Column - Services */}
        <div className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-name">{service.name}</span>
                <span className="service-price">{service.price}</span>
              </div>
            ))}
          </div>
          <p className="services-note">
            All resumes are ATS-friendly and tailored to Indian and global job markets
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div className="form-section">
          <h2 className="section-title">Connect With Us</h2>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us about your requirements"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Reviews Section */}
      <div id="reviews" style={{ padding: '40px 20px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}>Customer Reviews</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-service">{testimonial.service}</p>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.review}</p>
              <p className="testimonial-date">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Footer */}
      <div id="contact" className="contact-footer">
        <div className="contact-content">
          <h2 className="section-title contact-main-title">Contact Us</h2>

          <div className="contact-grid">
            <div className="contact-info-card">
              <h3 className="contact-card-title">Contact Information</h3>
              <div className="contact-info-columns">
                <div className="contact-column">
                  <h4 className="contact-column-title">Get In Touch</h4>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>+91 8128530118</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>info.vindhyachal8@gmail.com</span>
                  </div>
                </div>
                <div className="contact-column">
                  <h4 className="contact-column-title">Our Address</h4>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="address-block">
                      <span>Vindhyachal Resume Maker</span>
                      <span>Professional Resume Services</span>
                      <span>Serving Pan India</span>
                      <span>India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <h3 className="contact-card-title">Connect & Collaborate</h3>
              <p className="contact-description">
                We'd love to hear from you! Whether you're looking for professional resume services or want to collaborate,
                feel free to reach out through any of our channels.
              </p>
              <div className="social-icons-row">
                <a href="https://wa.me/918128530118" target="_blank" rel="noopener noreferrer" className="social-circle whatsapp" title="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="tel:+918128530118" target="_blank" rel="noopener noreferrer" className="social-circle call" title="Call">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="https://instagram.com/vrm.resumes" target="_blank" rel="noopener noreferrer" className="social-circle instagram" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-circle linkedin" title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-circle facebook" title="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="mailto:info.vindhyachal8@gmail.com" target="_blank" rel="noopener noreferrer" className="social-circle email" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Vindhyachal Resume Maker. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
