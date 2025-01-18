import React from 'react';
import Navbar from "/src/components/navbar.jsx";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='contact-container'>
      <h1>Contact Us</h1>
      <form id="contact-form">
        <label htmlFor="name">Nama:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Pesan:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Kirim</button>
      </form>

      {/* Example Link to other pages */}
      <Link to="/home" className="ctc">Go to Home</Link>
    </div>
    </>
  );
};

export default Contact;
