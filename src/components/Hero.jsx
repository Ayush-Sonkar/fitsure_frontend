import React from 'react';
import backgroundImage from '../assets/background-image.jpg'; // replace with your image file

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat flex items-center justify-center relative"
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 text-left">
        <h1
          className="text-6xl font-bold text-white leading-none md:text-6xl lg:text-7xl font-mono"
          style={{ fontSize: '80px', lineHeight: '100px', fontFamily: 'Lato, sans-serif' }}
        >
          GET FIT,
          <br /> FEEL AMAZING
        </h1>
        <p
          className="text-3xl text-yellow-300 mt-4"
          style={{ fontSize: '20px', lineHeight: '24px', fontFamily: 'Lato, sans-serif' }}
        >
          Join our community of fitness enthusiasts and reach your goals
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-6"
          type="button"
          onClick={() => window.location.href = '/signup'}
          style={{ width: '200px', fontSize: '16px', fontFamily: 'Source Code Pro, sans-serif' }}
        >
          GET STARTED
        </button>
      </div>

      {/* Rectangle White Column positioned at the bottom right */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg absolute"
        style={{
          width: '400px',
          bottom: '30px',
          right: '30px',
          padding: '10px',
        }}
      >
        <div className="flex flex-col items-center">
          <h2
            className="text-xl font-bold text-black text-center"
            style={{ fontSize: '22px', lineHeight: '26px', fontFamily: 'tahoma' }}
          >
            We Raise Your Confidence
          </h2>
          <p
            className="text-gray-600 mt-2 text-center"
            style={{ fontSize: '16px', lineHeight: '22px', fontFamily: 'Arial, sans-serif' }}
          >
            Join a community that supports and motivates
            <br /> you to reach your fitness goals
          </p>
          <div className="text-center mt-4">
            <h3
              className="text-2xl font-bold text-gray-900"
              style={{ fontSize: '20px', lineHeight: '24px', fontFamily: 'Arial, sans-serif' }}
            >
              10K+
            </h3>
            <p
              className="text-gray-600"
              style={{ fontSize: '16px', lineHeight: '22px', fontFamily: 'Monaco, monospace' }}
            >
              Members Worldwide
            </p>
            <h3
              className="text-2xl font-bold text-gray-900 mt-4"
              style={{ fontSize: '20px', lineHeight: '24px', fontFamily: 'Monaco, monospace' }}
            >
              80+
            </h3>
            <p
              className="text-gray-600"
              style={{ fontSize: '18px', lineHeight: '22px', fontFamily: 'Monaco, monospace' }}
            >
              Coaches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
