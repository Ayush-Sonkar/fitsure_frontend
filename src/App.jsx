import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExercisesPage from './pages/ExercisesPage';
// index.js or App.js
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exercisespage" element={<ExercisesPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
