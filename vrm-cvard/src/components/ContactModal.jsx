import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918128530118',
      icon: 'fab fa-whatsapp',
      hoverText: 'Go to WhatsApp',
      className: 'whatsapp'
    },
    {
      name: 'Call',
      href: 'tel:+918128530118',
      icon: 'fas fa-phone',
      hoverText: 'Make a Call',
      className: 'call'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/vrm.resumes',
      icon: 'fab fa-instagram',
      hoverText: 'Go to Instagram',
      className: 'instagram'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: 'fab fa-linkedin',
      hoverText: 'Go to LinkedIn',
      className: 'linkedin'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/yourusername',
      icon: 'fab fa-facebook',
      hoverText: 'Go to Facebook',
      className: 'facebook'
    },
    {
      name: 'Email',
      href: 'mailto:your.email@example.com',
      icon: 'fas fa-envelope',
      hoverText: 'Send Email',
      className: 'email'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="modal active" onClick={(e) => e.target.className === 'modal active' && onClose()}>
      <div className="modal-content">
        <h2 className="modal-title">Let's Connect!</h2>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`social-btn ${link.className}`}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <i className={link.icon}></i>
              <span className="btn-text">{link.name}</span>
              <span className="hover-text">{link.hoverText}</span>
            </a>
          ))}
        </div>
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;



