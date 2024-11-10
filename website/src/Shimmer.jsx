import React, { useEffect } from "react";
import { gsap } from "gsap";

const ShimmerBackground = () => {
  useEffect(() => {
    // Animate the shimmer effect
    gsap.to(".shimmer", {
      x: "100%",
      duration: 3,
      repeat: -1, // Loop the animation
      yoyo: true, // Reverse the animation for a continuous effect
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-teal-400 to-blue-600 overflow-hidden">
      {/* Shimmering Light Effect */}
      <div className="shimmer absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-transparent opacity-50"></div>

      {/* Content Section (You can place your page content here) */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-5">
        <h1 className="text-5xl font-bold">EchoVerse</h1>
        <p className="text-lg mt-4">
          Experience the serenity and calming light of EchoVerse
        </p>
      </div>
    </div>
  );
};

export default ShimmerBackground;
