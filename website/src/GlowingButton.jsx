import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';

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

          export default GlowingButton;