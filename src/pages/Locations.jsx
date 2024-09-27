import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import locationImg from '../assets/location-bg.jpg';

// Mock API or use a real one to fetch live location data
const fetchLocations = async () => {
  // Placeholder for real API fetching, returns 3 random locations
  return [
    { city: 'New York', lat: 40.7128, lng: -74.0060 },
    { city: 'London', lat: 51.5074, lng: -0.1278 },
    { city: 'Tokyo', lat: 35.6762, lng: 139.6503 },
  ];
};

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch live locations from API
    const getLocations = async () => {
      const data = await fetchLocations();
      setLocations(data);
    };

    getLocations();
  }, []);

  return (
    <div
      className="p-4 h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${locationImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl font-bold mb-8 text-yellow-400 text-center md:text-5xl">VISIT OUR LOCATIONS</h1>
      <ul className="mb-6 text-lg text-black font-bold ">
        {locations.map((location, index) => (
          <li key={index} className="mb-2">
            {location.city}: ({location.lat}, {location.lng})
          </li>
        ))}
      </ul>

      <div className="w-full max-w-lg mx-auto mb-8">
        <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '350px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.city}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Locations;