// client/src/components/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '@/pages/Contact/Contact.css';
import NavBar from '@/components/navBar/Nav';
import Footer from '@/components/Footer/footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://13.60.226.150:5000/api/contact/send', formData);
      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      setResponseMessage('Failed to send message. Try again later.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="contact-container pt-20">
        <h2 className='mt-5' >Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email Address"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
