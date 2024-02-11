import React from "react";
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  function togglePlay() {
    const video = document.querySelector("." + "video");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  }

  function skipTime(seconds) {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  }

  function seekTo(event) {
    if (videoRef.current) {
      const seekTime = (event.target.value * videoRef.current.duration) / 100;
      videoRef.current.currentTime = seekTime;
    }
  }

  return (
    <div>
      {" "}
      <video
        muted
        ref={videoRef}
        className="video projectVideo Chatty"
        alt="Video is loading"
        onTimeUpdate={() => {
          if (videoRef.current) {
            const progress =
              (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
          }
        }}
      >
        <source src="Chatty1.mp4" type="video/mp4" />
      </video>
      <button onClick={(event) => togglePlay("Chatty")}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={() => skipTime(-5)}>-5s</button>
      <button onClick={() => skipTime(5)}>+5s</button>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={seekTo}
      />
    </div>
  );
}
