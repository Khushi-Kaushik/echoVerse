import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';



const WaveCard = ({ icon: Icon, title, subtitle, glowColor }) => (
    <div className={`relative p-6 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-lg
      hover:scale-105 transition-all duration-500 group cursor-pointer`}>
      <div className={`absolute inset-0 ${glowColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
      <div className="relative z-10">
        <Icon className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors duration-500" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70 group-hover:text-white/90 transition-colors duration-500">{subtitle}</p>
      </div>
    </div>
  );

  export default WaveCard;