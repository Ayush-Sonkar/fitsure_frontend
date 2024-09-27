import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  // ExerciseDB API from RapidAPI
  const API_URL = 'https://exercisedb.p.rapidapi.com/exercises';
  const API_HEADERS = {
    'X-RapidAPI-Key': 'd9cac8ed84msh6f00cfb818e8f1bp175b36jsn6fb44fb1326f',  // Replace with your actual RapidAPI key
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  };

  // Fetch exercises when component mounts
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(API_URL, { headers: API_HEADERS });
        setExercises(response.data.slice(0, 6)); // Limit to first 10 exercises
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return <p className="text-center text-xl text-white">Loading exercises...</p>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black text-gray-900 min-h-screen p-12 text-white flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-white mb-6 text-center">Exercises</h2>
      <p className="text-lg text-yellow-300 mb-8">Here are some exercises to help you stay fit.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}  // Unique identifier from the API
            className="border border-gray-500 rounded-lg p-4 bg-gray-800 text-white"
          >
            <img
              src={exercise.gifUrl}  // Display GIF or image of the exercise
              alt={exercise.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
            <p className="text-gray-400 mb-2">Target: {exercise.target}</p>
            <p className="text-gray-400">Body Part: {exercise.bodyPart}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-6 block mx-auto"
          onClick={() => window.location.href = '/exercisespage'}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Exercises;
