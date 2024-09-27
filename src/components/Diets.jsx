import React from 'react';

const dietPlans = [
  {
    name: 'Keto Diet',
    description: 'Low-carb, high-fat diet that helps burn fat effectively.',
    imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  },
  {
    name: 'High-Protein Diet',
    description: 'Focused on protein-rich foods to support muscle growth.',
    imageUrl: 'https://images.pexels.com/photos/5507691/pexels-photo-5507691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  },
  {
    name: 'Paleo Diet',
    description: 'Emphasizes whole foods and lean proteins, mimicking the diet of early humans.',
    imageUrl: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'Vegan Diet',
    description: 'Plant-based diet rich in fruits, vegetables, and legumes.',
    imageUrl: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'Mediterranean Diet',
    description: 'Rich in healthy fats, vegetables, and lean proteins, promoting heart health.',
    imageUrl: 'https://images.pexels.com/photos/5507640/pexels-photo-5507640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const Diets = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen p-12 text-white flex flex-col items-center md:p-24">
      <h2 className="text-5xl  font-bold text-center mb-6">Gym Diet Plans</h2>
      <p className="text-lg text-center mb-4 text-yellow-400">Explore recommended diet plans for gym-goers.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:mt-12">
        {dietPlans.map((diet, index) => (
          <div
            key={index}
            className="bg-black border rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={diet.imageUrl}
              alt={diet.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{diet.name}</h3>
              <p className="text-gray-600">{diet.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.href = '/diet-plans'}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Diets;