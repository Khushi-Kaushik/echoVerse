import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Brain, Music, Sparkles, Wind, Menu, X, Play, Pause, Volume2, Shield, 
         Clock, Cloud, Sun, Moon, Star, Zap } from 'lucide-react';


const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();
  
    useEffect(() => {
      const handleScroll = () => setScrollPosition(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const links = [
      { to: "/wellness", icon: Heart, text: "Wellness Zone" },
      { to: "/focus", icon: Brain, text: "Focus Space" },
      { to: "/sound", icon: Music, text: "Sound Haven" }
    ];
  
    return (
      <>
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${scrollPosition > 50 ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Brain className="w-10 h-10 text-teal-400 transition-transform duration-500 group-hover:rotate-12" />
                  <Sparkles className="w-5 h-5 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
                  EchoVerse
                </span>
              </Link>
  
              <div className="hidden md:flex space-x-4">
                {links.map(({ to, icon: Icon, text }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`px-6 py-3 rounded-full transition-all duration-500 flex items-center space-x-3 group
                      ${location.pathname === to 
                        ? 'bg-white/15 shadow-lg shadow-white/10' 
                        : 'hover:bg-white/10'}`}
                  >
                    <Icon className={`w-5 h-5 ${location.pathname === to ? 'text-white' : 'text-white/60'}`} />
                    <span className={`font-medium ${location.pathname === to ? 'text-white' : 'text-white/60'}`}>
                      {text}
                    </span>
                  </Link>
                ))}
              </div>
  
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
  
        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {links.map(({ to, icon: Icon, text }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`px-8 py-4 rounded-full transition-all duration-500 flex items-center space-x-3
                  ${location.pathname === to ? 'bg-white/15' : 'hover:bg-white/10'}`}
                  >
                <Icon className={`w-5 h-5 ${location.pathname === to ? 'text-white' : 'text-white/60'}`} />
                <span className={`font-medium ${location.pathname === to ? 'text-white' : 'text-white/60'}`}>
                  {text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };

  export default Navigation;