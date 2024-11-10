import React, { useEffect } from "react";
import { gsap } from "gsap";
import ShimmerBackground from "./Shimmer";


const ZenPage = () => {
  useEffect(() => {
    gsap.from(".zen-text", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className="mt-8 w-full max-w-4xl">
        <audio className="w-full hidden" controls autoPlay loop>
          <source
            src="689567__mttvn__breathingpatterns_4-7-8-0.wav"
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
      </div>

      <ShimmerBackground />
    </div>
  );
};

export default ZenPage;
