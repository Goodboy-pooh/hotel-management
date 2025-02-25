import React from "react";
import HotelImage from "../assets/hotel-image.jpg"; // Corrected the import name to match the variable

const LandingPage = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${HotelImage})`, // Use the correct variable name
        backgroundSize: "cover", // Ensures the image fills the screen
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center text-white">
        <h1 className="text-6xl font-bold mb-6">Hotel Management</h1>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
