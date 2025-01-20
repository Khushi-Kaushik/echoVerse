import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';
import GlowingButton from './GlowingButton';
import WaveCard from './WaveCard';



const SoundHaven = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const sounds = [
      { icon: Cloud, title: "Rain Sounds", subtitle: "Gentle rainfall ambience" },
      { icon: Wind, title: "White Noise", subtitle: "Consistent background sound" },
      { icon: Moon, title: "Night Sounds", subtitle: "Peaceful evening ambience" },
      { icon: Sun, title: "Morning Calm", subtitle: "Energizing dawn sounds" }
    ];
  
    return (
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Sound Haven
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl">
            Immerse yourself in calming soundscapes designed to help you focus, relax, or energize.
            Discover your perfect audio environment.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sounds.map((sound, i) => (
              <WaveCard
                key={i}
                icon={sound.icon}
                title={sound.title}
                subtitle={sound.subtitle}
                glowColor="bg-gradient-to-br from-blue-500 to-purple-500"
              />
            ))}
          </div>
  
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-semibold mb-6">Now Playing</h2>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Music className="w-12 h-12 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">Ocean Waves</h3>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Volume2 className="w-6 h-6" />
                </button>
                <GlowingButton 
                  icon={isPlaying ? Pause : Play}
                  color="from-blue-500 to-purple-500"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default SoundHaven;