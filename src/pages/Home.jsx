import React from 'react';
import Exercises from '../components/Exercises';
import Diets from '../components/Diets';
import BMI from '../components/BMI';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';

const Home = () => {

  return (

    <div>
      <Hero />
      <BMI />
      <Exercises />
      <Diets />
      <Pricing />
    </div>
  );
};

export default Home;
