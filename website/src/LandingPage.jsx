import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-blue-600 text-white p-5">
      <h1 className="text-5xl font-bold">Welcome to EchoVerse</h1>
      <p className="text-lg mt-4">A calming game for your soul</p>
      <div className="mt-8 flex gap-3">
        <button className="py-3 px-6 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all">
          Download Game
        </button>
        <Link to="/zen" className="py-3 px-6 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
          Enter Music Lobby
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
