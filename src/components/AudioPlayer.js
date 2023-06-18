import React from "react";

function AudioPlayer() {
  const start = () => {
    import("../images/tts.wav")
      .then((module) => {
        const audio = new Audio(module.default);
        audio.play();
      })
      .catch((error) => {
        console.error("Failed to load audio file:", error);
      });
  };

  return (
    <div>
      <button onClick={start}>play</button>
    </div>
  );
}

export default AudioPlayer;
