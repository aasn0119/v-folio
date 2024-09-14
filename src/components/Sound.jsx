"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Sound = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(newState));
  };

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchstart"].forEach((event) => {
      document.removeEventListener(event, handleFirstUserInteraction);
    });
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    if (consent) {
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) => {
          document.addEventListener(event, handleFirstUserInteraction);
        });
      }
    }
  }, []);

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      <audio loop ref={audioRef}>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.button
        onClick={toggleSound}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"home"}
        name={"home"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
