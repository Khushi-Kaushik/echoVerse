import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';



const AnimatedBackground = () => (
    <div className="fixed inset-0 opacity-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 400}px`,
            height: `${Math.random() * 400}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${20 + Math.random() * 30}s`
          }}
        />
      ))}
    </div>
  );

  export default AnimatedBackground;