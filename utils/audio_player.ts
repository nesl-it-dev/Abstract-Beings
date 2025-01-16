let audioInstance: any = null;

export const getAudioInstance = () => {
  if (!audioInstance) {
    audioInstance = new Audio("/fairy_tale.mp3");
    audioInstance.loop = true;
  }
  return audioInstance;
};
