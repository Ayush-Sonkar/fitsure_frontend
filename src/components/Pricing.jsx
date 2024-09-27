import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 30,
      features: [
        'Access to the basic exercises',
        '1 coach session per month',
        '10% off protein supplements',
        'Limited access to community features'
      ]
    },
    {
      name: 'Premium',
      price: 69,
      features: [
        'Full access to all exercises',
        '4 coach sessions per month',
        '20% off protein supplements',
        'Full access to community features',
        'Personalized nutrition planning'
      ]
    },
    {
      name: 'Elite',
      price: 99,
      features: [
        'Full access to all exercises and diet plans',
        'Unlimited coach sessions',
        '30% off protein supplements',
        'Full access to community features',
        'Personalized nutrition planning',
        'Monthly progress tracking',
        'Priority customer support'
      ]
    }
  ];

  return (
    <div
      className="bg-gradient-to-b from-black to-gray-800 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold text-white text-center mb-16">
          Choose Your Plan
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-8 bg-gray-700 text-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-4">${plan.price}/month</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400">
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => window.location.href = '/signup'}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded mt-6"
                type="button"
              >
                Sign Up
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
