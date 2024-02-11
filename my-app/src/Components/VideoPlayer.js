import React from "react";
import { useState, useRef } from "react";

export default function VideoPlayer({ videoName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  function togglePlay() {
    const video = document.querySelector("." + videoName);
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
        className={videoName}
        alt="Video is loading"
        onTimeUpdate={() => {
          if (videoRef.current) {
            const progress =
              (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
          }
        }}
      >
        <source src={videoName + ".mp4"} type="video/mp4" />
      </video>
      <button onClick={(event) => togglePlay("Chatty")}>
        {isPlaying ? "⏸️" : "▶️"}
      </button>
      <button onClick={() => skipTime(-5)}>-5s</button>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={seekTo}
      />
      <button onClick={() => skipTime(5)}>+5s</button>
    </div>
  );
}
