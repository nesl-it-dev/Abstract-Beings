let audioInstance: any = null;

export const getAudioInstance = () => {
  if (!audioInstance) {
    audioInstance = new Audio("/bg_music_new1.mp3");
    audioInstance.loop = true;
  }
  return audioInstance;
};
