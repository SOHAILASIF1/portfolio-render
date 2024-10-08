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
    console.log(formData);
    e.preventDefault();
    fwn`O `
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
