"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAudioInstance } from "./audio_player";

// let audioInstance: any;

const AudioContext = createContext({
  isPlaying: false,
  playAudio: () => {},
  stopAudio: () => {},
});

export const useAudio = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }: any) => {
  //   const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //   if (typeof window !== "undefined" && !audioInstance) {
  //     audioInstance = new Audio("/fairy_tale.mp3");
  //     audioInstance.loop = true;
  //     setAudio(audioInstance);
  //   }

  //   useEffect(() => {
  //     const audioInstance: any = new Audio("/fairy_tale.mp3");
  //     audioInstance.loop = true;
  //     setAudio(audioInstance);

  //     return () => {
  //       audioInstance.pause();
  //     };
  //   }, []);

  const playAudio = () => {
    // if (audio) {
    const audio = getAudioInstance();
    audio.play();
    setIsPlaying(true);
    // }
  };

  const stopAudio = () => {
    // if (audio) {
    const audio = getAudioInstance();
    audio.pause();
    setIsPlaying(false);
    // }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, playAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
