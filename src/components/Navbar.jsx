import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between align-center">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faDumbbell}
            shake
            style={{ color: '#FFD43B', fontSize: '36px' }}
          />
          <h1 className="text-white font-bold text-xl ml-4">FIT SURE</h1>
        </div>
        <ul className="flex space-x-4 items-center mr-4 md:flex md:space-x-4 md:items-center">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300 font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/exercisespage" className="text-white hover:text-yellow-300">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="/locations" className="text-white hover:text-yellow-300">
              Locations
            </Link>
          </li>
          <li>
            <button className="hidden md:block">
              <Link to="/signup" className="text-black hover:text-yellow-300 font-bold bg-yellow-400 px-4 py-2 rounded">
                Get Started
              </Link>
            </button>
            <button className="md:hidden">
              <Link to="/signup" className="text-black hover:text-yellow-300 font-bold bg-yellow-400 px-2 py-1 rounded">
                Get Started
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;