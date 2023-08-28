import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-[90vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1607083205410-7e6835ffd235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
      }}
    >
      <div className="bg-black bg-opacity-60 text-white p-8 rounded text-center">
        <h2 className="text-4xl font-bold mb-4">Super value deals</h2>
        <h1 className="text-5xl font-extrabold mb-4">On all products</h1>
        <p className="text-lg mb-6">
          Get upto <span className="text-yellow-500 font-extrabold text-4xl">30% discount!</span>
        </p>
        <NavLink to="/shopping">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
