import React from "react";
import { Link } from "react-router-dom";
import HotelImage from "../assets/hotel-image.jpg"; // Ensure this path is correct

const LandingPage = () => {

  return (
    <div
    className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"
    
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${HotelImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      
      
    }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center text-white flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-6">Hotel Management</h1>
        <Link to="/dashboard">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-blue-600 transition">
            Get Started
  </button>
</Link>
      </div>
    </div>
  );
};

export default LandingPage;
