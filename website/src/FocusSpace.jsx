import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';
import WaveCard from './WaveCard';
import GlowingButton from './GlowingButton';



const FocusSpace = () => {
  const exercises = [
    { icon: Clock, title: "Time Boxing", subtitle: "Structured focus periods" },
    { icon: Zap, title: "Quick Focus", subtitle: "5-minute concentration boost" },
    { icon: Brain, title: "Memory Games", subtitle: "Cognitive training" },
    { icon: Star, title: "Achievement Track", subtitle: "Progress monitoring" }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
          Focus Space
        </h1>
        <p className="text-xl text-white/80 mb-12 max-w-2xl">
          Enhance your concentration through engaging exercises designed for the ADHD mind.
          Build lasting focus skills while having fun.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {exercises.map((exercise, i) => (
            <WaveCard
              key={i}
              icon={exercise.icon}
              title={exercise.title}
              subtitle={exercise.subtitle}
              glowColor="bg-gradient-to-br from-purple-500 to-indigo-500"
            />
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-3xl p-8 backdrop-blur-lg">
          <h2 className="text-3xl font-semibold mb-6">Focus Timer</h2>
          <div className="flex items-center justify-between">
            <div className="text-6xl font-bold font-mono">25:00</div>
            <div className="flex space-x-4">
              <GlowingButton icon={Play} color="from-purple-500 to-indigo-500">
                Start Focus Session
              </GlowingButton>
              <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Clock className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSpace;