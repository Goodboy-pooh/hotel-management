import React from "react";
import { FaBed, FaMoneyBillWave, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <FaBed className="text-blue-500 text-3xl mr-4" />
          <div>
            <p className="text-gray-600">Total Bookings</p>
            <h2 className="text-2xl font-bold">120</h2>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <FaUsers className="text-green-500 text-3xl mr-4" />
          <div>
            <p className="text-gray-600">Available Rooms</p>
            <h2 className="text-2xl font-bold">45</h2>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <FaMoneyBillWave className="text-yellow-500 text-3xl mr-4" />
          <div>
            <p className="text-gray-600">Revenue</p>
            <h2 className="text-2xl font-bold">$12,500</h2>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Guest</th>
              <th className="p-3 text-left">Room</th>
              <th className="p-3 text-left">Check-in</th>
              <th className="p-3 text-left">Check-out</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">John Doe</td>
              <td className="p-3">101</td>
              <td className="p-3">Feb 25, 2025</td>
              <td className="p-3">Feb 28, 2025</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Jane Smith</td>
              <td className="p-3">202</td>
              <td className="p-3">Feb 24, 2025</td>
              <td className="p-3">Feb 27, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Add Booking
        </button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Check-In Guest
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

