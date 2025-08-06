import React from 'react';

const stats = [
  {
    number: '10K+',
    label: 'Trusted Clients',
  },
  {
    number: '20K+',
    label: 'Orders Delivered',
  },
  {
    number: '25+',
    label: 'Sellers',
  },
];

const Superiority = () => {
  return (
    <div className="bg-[#f9fafa] py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">
       <span className="text-blue-900">Ship</span> <span className="text-orange-700">Runway</span> Superiority
      </h2>
      <div className="flex flex-col items-center space-y-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-gray-200 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-3xl font-bold">{item.number}</h3>
            <p className="text-gray-600 text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Superiority;
