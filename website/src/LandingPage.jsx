// import React from 'react';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-blue-600 text-white p-5">
//       <h1 className="text-5xl font-bold">Welcome to EchoVerse</h1>
//       <p className="text-lg mt-4">A calming game for your soul</p>
//       <div className="mt-8 flex gap-3">
//         <button className="py-3 px-6 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all">
//           Download Game
//         </button>
//         <Link to="/zen" className="py-3 px-6 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
//           Enter Music Lobby
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';

// Reusable Components


const GlowingButton = ({ icon: Icon, children, onClick, color = "from-purple-500 to-blue-500" }) => (
  <button
    onClick={onClick}
    className={`group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-500
      hover:shadow-lg hover:shadow-white/10 bg-gradient-to-r ${color}`}
  >
    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
    <div className="relative flex items-center space-x-3">
      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
      <span className="font-medium">{children}</span>
    </div>
  </button>
);




const LandingPage = () => {
  const features = [
    {
      icon: Heart,
      title: "Mental Wellness",
      description: "Discover activities designed to support your emotional well-being",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "Focus Enhancement",
      description: "Build lasting concentration skills through engaging exercises",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Music,
      title: "Sound Therapy",
      description: "Immerse yourself in calming soundscapes for focus and relaxation",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Welcome to EchoVerse
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-12">
            Your personal space for mental wellness, focus enhancement, and sound therapy.
            Designed specifically for minds that think differently.
          </p>
          <div className="flex justify-center space-x-6">
            <GlowingButton icon={Brain} color="from-teal-500 to-purple-500">
              Start Your Journey
            </GlowingButton>
            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg
                bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15
                transition-all duration-500 group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 
                group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 mb-6 text-white/80 group-hover:text-white 
                  transition-colors duration-500" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20" />
          <div className="relative bg-black/30 backdrop-blur-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Start your journey towards better mental wellness, enhanced focus, and inner peace.
              Join EchoVerse today and discover a world designed for your unique mind.
            </p>
            <GlowingButton icon={Sparkles} color="from-teal-500 to-purple-500">
              Get Started Now
            </GlowingButton>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LandingPage;
