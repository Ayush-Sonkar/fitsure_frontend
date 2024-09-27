import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/signup-bg.jpg'; // replace with your image file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        name,
        email,
        phoneNumber,
        address,
        password
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div
      className="p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register Now</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-4"
            required
          />
          
          <label className="mb-2 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-4"
            required
          />
          <label className="mb-2 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-6"
            required

          />
          
          <label className="mb-2 font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border p-2 mb-4"
            required
          />
          
          <label className="mb-2 font-semibold">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-2 mb-4"
          />
          
          
          
          <button type="submit" className="bg-blue-500 text-white p-2 font-semibold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
