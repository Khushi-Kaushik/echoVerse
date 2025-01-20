import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';
import WaveCard from './WaveCard';
import GlowingButton from './GlowingButton';



const WellnessZone = () => {
    const activities = [
      { icon: Heart, title: "Breathing Exercise", subtitle: "5-minute guided session" },
      { icon: Brain, title: "Mindfulness", subtitle: "Stress reduction techniques" },
      { icon: Shield, title: "Anxiety Relief", subtitle: "Calming activities" },
      { icon: Sun, title: "Mood Tracking", subtitle: "Daily emotional journal" }
    ];
  
    return (
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text">
            Wellness Zone
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl">
            Your personal space for mental wellness and emotional balance. Discover activities 
            designed to support your journey to better mental health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {activities.map((activity, i) => (
              <WaveCard
                key={i}
                icon={activity.icon}
                title={activity.title}
                subtitle={activity.subtitle}
                glowColor="bg-gradient-to-br from-teal-500 to-blue-500"
              />
            ))}
          </div>
  
          <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-semibold mb-6">Today's Recommended Session</h2>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-teal-500/20 flex items-center justify-center">
                <Heart className="w-12 h-12 text-teal-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">Evening Calm</h3>
                <p className="text-white/70">A gentle breathing exercise to help you unwind</p>
              </div>
              <GlowingButton icon={Play} color="from-teal-500 to-blue-500">
                Begin Session
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default WellnessZone;