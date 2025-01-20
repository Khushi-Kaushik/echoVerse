// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import ShimmerBackground from "./Shimmer";


// const ZenPage = () => {
//   useEffect(() => {
//     gsap.from(".zen-text", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
//       <div className="mt-8 w-full max-w-4xl">
//         <audio className="w-full hidden" controls autoPlay loop>
//           <source
//             src="689567__mttvn__breathingpatterns_4-7-8-0.wav"
//             type="audio/mp3"
//           />
//           Your browser does not support the audio element.
//         </audio>
//       </div>

//       <ShimmerBackground />
//     </div>
//   );
// };

// export default ZenPage;






// import React, { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";
// import { gsap } from "gsap";

// const ZenPage = () => {
//   const [isBreathing, setIsBreathing] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     // Initial animations
//     gsap.from(".zen-text", { 
//       opacity: 0, 
//       y: 50, 
//       duration: 1.5, 
//       ease: "power2.out",
//       stagger: 0.2 
//     });

//     gsap.from(".breathing-circle", { 
//       scale: 0,
//       opacity: 0,
//       duration: 1,
//       delay: 1,
//       ease: "back.out(1.7)"
//     });
//   }, []);

//   const toggleBreathing = () => {
//     setIsBreathing(!isBreathing);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-500 ${
//       isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
//     }`}>
//       {/* Theme Toggle */}
//       <button 
//         onClick={() => setIsDarkMode(!isDarkMode)}
//         className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700/20"
//       >
//         {isDarkMode ? (
//           <Sun className="w-6 h-6 text-yellow-300" />
//         ) : (
//           <Moon className="w-6 h-6 text-gray-600" />
//         )}
//       </button>

//       <div className="container mx-auto px-4 py-16 flex flex-col items-center">
//         {/* Main Content */}
//         <h1 className={`zen-text text-4xl md:text-5xl font-light mb-8 ${
//           isDarkMode ? 'text-white' : 'text-gray-800'
//         }`}>
//           Find Your Peace
//         </h1>
        
//         <p className={`zen-text text-lg md:text-xl max-w-2xl text-center mb-12 ${
//           isDarkMode ? 'text-gray-300' : 'text-gray-600'
//         }`}>
//           Take a moment to breathe and center yourself
//         </p>

//         {/* Breathing Circle */}
//         <div 
//           className={`breathing-circle w-48 h-48 md:w-64 md:h-64 rounded-full 
//             flex items-center justify-center cursor-pointer
//             transition-all duration-500 
//             ${isBreathing ? 'scale-150' : 'scale-100'}
//             ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-300/20'}`}
//           onClick={toggleBreathing}
//         >
//           <div className={`absolute w-full h-full rounded-full 
//             ${isBreathing ? 'animate-ping' : ''} 
//             ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/10'}`}
//           />
//           <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//             {isBreathing ? 'Breathe Out' : 'Click to Breathe'}
//           </span>
//         </div>

//         {/* Audio Player */}
//         <div className="mt-12 w-full max-w-md">
//           <audio 
//             className={`w-full ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
//             controls 
//             loop
//           >
//             <source
//               src="689567__mttvn__breathingpatterns_4-7-8-0.wav"
//               type="audio/mp3"
//             />
//             Your browser does not support the audio element.
//           </audio>
//         </div>

//         {/* Ambient Background */}
//         <div className="fixed inset-0 -z-10 overflow-hidden">
//           <div className={`absolute inset-0 ${
//             isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
//             : 'bg-gradient-to-br from-blue-100/40 to-purple-100/40'
//           }`} />
//           <div className="absolute inset-0 opacity-30">
//             {[...Array(50)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full bg-white"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   width: `${Math.random() * 4}px`,
//                   height: `${Math.random() * 4}px`,
//                   animation: `twinkle ${Math.random() * 4 + 2}s infinite`
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ZenPage;



import React, { useEffect, useState } from "react";
import { Moon, Sun, Heart, Wind, Brain,  Flower } from "lucide-react";

const ZenPage = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('breathe');

  useEffect(() => {
    // Animate elements on mount
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      setTimeout(() => {
        section.style.transition = 'all 0.8s ease-out';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, 200 * index);
    });
  }, []);

  // Create floating animation class
  const floatingDivs = [...Array(20)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: Math.random() * 200 + 50,
    height: Math.random() * 200 + 50,
    animationDuration: `${Math.random() * 10 + 10}s`
  }));

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
      : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Floating Shapes Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingDivs.map((style, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              isDarkMode ? 'bg-white/5' : 'bg-purple-500/5'
            }`}
            style={{
              left: style.left,
              top: style.top,
              width: style.width,
              height: style.height,
              animationDuration: style.animationDuration
            }}
          />
        ))}
      </div>

      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 p-3 rounded-full hover:bg-white/10 transition-colors"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-300" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full p-2">
        <div className="flex space-x-4">
          {[
            { id: 'breathe', icon: Wind, label: 'Breathe' },
            { id: 'meditate', icon: Flower, label: 'Meditate' },
            { id: 'reflect', icon: Brain, label: 'Reflect' },
            { id: 'heal', icon: Heart, label: 'Heal' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2
                ${activeSection === id 
                  ? (isDarkMode ? 'bg-white/20 text-white' : 'bg-purple-500/20 text-purple-700')
                  : (isDarkMode ? 'text-white/70 hover:bg-white/10' : 'text-gray-600 hover:bg-purple-500/10')
                }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Breathing Section */}
        <section className={`fade-in min-h-screen flex flex-col items-center justify-center ${
          activeSection === 'breathe' ? 'block' : 'hidden'
        }`}>
          <h1 className={`text-5xl md:text-6xl font-light mb-8 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Breathe & Center
          </h1>
          
          <div 
            onClick={() => setIsBreathing(!isBreathing)}
            className={`relative w-64 h-64 md:w-80 md:h-80 cursor-pointer
              transition-all duration-[4000ms] ease-in-out
              rounded-full flex items-center justify-center
              ${isBreathing 
                ? 'scale-150 bg-purple-500/20' 
                : 'scale-100 bg-blue-500/20'
              }`}
          >
            <div className={`absolute w-full h-full rounded-full opacity-50
              transition-all duration-[4000ms]
              ${isBreathing ? 'animate-ping bg-purple-500/10' : 'bg-blue-500/10'}`}
            />
            <span className={`text-lg ${isDarkMode ? 'text-white/90' : 'text-gray-700'}`}>
              {isBreathing ? 'Exhale...' : 'Click to Breathe'}
            </span>
          </div>
        </section>

        {/* Other sections remain the same */}
        {/* Meditation Section */}
        <section className={`fade-in min-h-screen flex flex-col items-center justify-center ${
          activeSection === 'meditate' ? 'block' : 'hidden'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-light mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Daily Meditation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['5 Minutes', '10 Minutes', '15 Minutes'].map((duration) => (
                <div
                  key={duration}
                  className={`p-8 rounded-2xl backdrop-blur-lg cursor-pointer
                    transition-all duration-300 hover:scale-105
                    ${isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-purple-100/50 hover:bg-purple-100/70 text-gray-800'
                    }`}
                >
                  <Flower className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">{duration}</h3>
                  <p className="text-sm opacity-80">Guided meditation for inner peace</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection and Healing sections remain the same */}
      </div>
    </div>
  );
};

export default ZenPage;