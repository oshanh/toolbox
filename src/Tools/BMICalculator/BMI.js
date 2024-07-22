import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    }
  };

  return (
<>
    <Helmet>
      <title>BMI Calculator II</title>
    <link rel="icon" type="image/png" href='faviconBMI.ico' />
    </Helmet>

    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your weight"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your height"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Your BMI: {bmi}</h3>
          <p className="text-gray-700">{message}</p>
        </div>
      )}
    </div>
    </>   
  );
};

export default BMICalculator;
