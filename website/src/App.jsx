import LandingPage from "./LandingPage";
import AnimatedBackground from "./AnimatedBackground";


import Navigation from "./Navigation";

import WellnessZone from "./WellnessZone";

import FocusSpace from "./FocusSpace";

import SoundHaven from "./SoundHaven";

import ZenPage from "./ZenPage";

import ShimmerBackground from "./Shimmer";

import { gsap } from "gsap";



import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// const App = () => {
//   // <ZenPage />
//   return (
//     <div>
//       <BrowserRouter>
//       {/* Switch between pages */}
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/zen" element={<ZenPage />} />
//         </Routes>      
//       </BrowserRouter>
//     </div>
//   );
// };



const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <AnimatedBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="WellnessZone.jsx" element={<WellnessZone />} />
          <Route path="FocusSpace.jsx" element={<FocusSpace />} />
          <Route path="SoundHaven.jsx" element={<SoundHaven />} />
          <Route path="/zen" element={<ZenPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
