import React from 'react';
import image from '../Assets/Images/b14.png';

const Newsletter = () => {
  return (
    <div className="flex justify-between flex-wrap items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: '#041e42',
        // backgroundPosition: '20% 30%',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="newstext p-8 text-white">
        <h4 className="text-xl font-semibold mb-2">Sign Up For Newsletters</h4>
        <p className="text-lg">
          Get E-mail Updates about our latest arrivals and{' '}
          <span className="text-yellow-500 font-semibold">latest offers.</span>
        </p>
      </div>
      <div className='h-10 pr-4'>
        <input
          type="text"
          placeholder="Your email address"
          className="px-4  h-full py-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className=" h-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-r hover:bg-teal-600 transition duration-300 focus:ring"> Sign Up
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
