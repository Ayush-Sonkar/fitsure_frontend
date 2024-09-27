import React, { useState } from 'react';


const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [healthStatus, setHealthStatus] = useState(null);


  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      setHealthStatus('You are underweight. Eat more to gain weight!');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setHealthStatus('You are fit! Keep up the good work!');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setHealthStatus('You are overweight. Try to lose some weight!');
    } else {
      setHealthStatus('You are obese. Please consult a doctor!');
    }
  };


  return (
    <div className="flex justify-left items-center  spacing-left w-screen h-screen/2 bg-gray-800">
      <div className="bg-gray-900 p-4 rounded-lg">
        <h2 className="text-2xl font-bold text-yellow-400">BMI Calculator</h2>
        <div>
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={calculateBMI} className="bg-yellow-400 text-gray-800 p-2 rounded-lg">
            Calculate
          </button>
        </div>
        {bmi && (
          <div>
            <p className="text-lg font-bold text-yellow-400">Your BMI is: {bmi}</p>
            <p className="text-lg font-bold text-yellow-400">{healthStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default BMI;