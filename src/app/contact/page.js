'use client';

import React, { useState } from 'react';
import './contact.css'
import { useRouter } from 'next/navigation';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setMessage('Mail sent successfully.');
    setTimeout(() => router.push('/'), 2000);
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        
        <div className="contact-info">
          <h2 className="contact-title">Connect with Mission Control</h2>
          <p className="contact-subtext">Drop us a message and our crew will get back to you from orbit.</p>

          <div className="contact-details">
            <p><i className="fas fa-envelope icon"></i> contact@astronova.in</p>
            <p><i className="fas fa-phone icon"></i> +91-7735773221</p>
            <p><i className="fas fa-map-marker-alt icon"></i> IIT Kharagpur, India</p>
          </div>

          <div className="contact-socials">
            <a href="https://www.facebook.com/share/1BQnQ41jR9/" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/zayedmd_786" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/md-zayed-ghanchi-bb999a325" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {message && <p className="confirm-message">{message}</p>}
          <button type="submit" className="submit-button">
            <i className="fas fa-rocket"></i> Launch Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
