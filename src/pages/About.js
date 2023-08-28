import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to{" "}
          <span className="text-indigo-600">Fashion Pasal</span> – Your Ultimate Destination for Quality Products!
        </p>
        <p className="mt-4 text-lg text-gray-600">
          At <span className="text-indigo-600">Fashion Pasal</span>, we're more than just an online store; we're a team of passionate individuals dedicated to bringing you the best shopping experience. Our mission is to provide top-notch products that exceed your expectations while offering exceptional customer service.
        </p>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">Our Story</h2>
        <p className="mt-4 text-lg text-gray-600">
          <span className="text-indigo-600">Fashion Pasal</span> was founded with a vision to revolutionize the way people shop online. Our journey began in [mention the year or date of establishment] when a group of like-minded individuals came together with a shared passion for quality products and excellent customer service. Since then, we've been on a mission to curate a collection of products that resonate with our customers' preferences and lifestyles.
        </p>
        {/* ... Rest of the content ... */}
      </div>
    </div>
  );
};

export default AboutUs;
