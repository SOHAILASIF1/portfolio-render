import React, { useState } from 'react';
import './Contact.css';
import Headings from '../../component/Headings/Headings';
import FindMe from '../../component/FindMe/FindMe';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className='contact'>
      <div className="input">
        <div className='input-heading'>
          <Headings tittle="Headings" />
        </div>
        <form className="input-box" onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='NAME'
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder='EMAIL'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder='MESSAGE'
            name="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className='btn' type='submit'>Send</button>
        </form>
      </div>
      <FindMe />
    </div>
  );
}

export default Contact;
