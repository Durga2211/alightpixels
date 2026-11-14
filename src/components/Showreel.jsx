import React, { useState, useRef, useEffect } from 'react';

export default function Showreel() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(console.warn);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (videoRef.current.webkitEnterFullscreen) {
        videoRef.current.webkitEnterFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="section showreel-section dark-theme" id="showreel" aria-labelledby="showreel-heading">
      <div className="container showreel-container">
        <div className="showreel-header reveal">
          <p className="section-label dark-label">STUDIO SHOWREEL</p>
          <h2 className="section-headline dark-headline" id="showreel-heading">
            Frames that speak. Stories that stay.
          </h2>
          <p className="section-subtitle dark-subtitle">
            A comprehensive compilation of cinematography, lighting craft, and narrative pacing from our studio vault.
          </p>
        </div>

        <div className="showreel-player-box reveal">
          <div
            className={`video-container ${isPlaying ? 'playing' : ''}`}
            ref={containerRef}
            id="showreel-video-container"
          >
            <video
              className="showreel-video"
              ref={videoRef}
              preload="metadata"
              poster="assets/images/showreel-cover.jpg"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            >
              <source src="assets/videos/showreel.mp4" type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>

            {/* Cinematic Amber Play Button */}
            {!isPlaying && (
              <button
                type="button"
                className="amber-play-button"
                onClick={togglePlay}
                aria-label="Play Alight Pixels Showreel"
              >
                <span className="play-icon" aria-hidden="true"></span>
              </button>
            )}

            {/* Video Controls Bar */}
            <div className="video-controls-bar">
              <button
                type="button"
                className="control-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause showreel" : "Play showreel"}
              >
                <span>{isPlaying ? '❚❚' : '▶'}</span>
              </button>

              <div
                className="progress-bar-container"
                onClick={handleSeek}
                role="progressbar"
                aria-valuenow={Math.round(progressPercent)}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>

              <span className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <button
                type="button"
                className="control-btn"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                <span>{isMuted ? '🔇' : '🔊'}</span>
              </button>

              <button
                type="button"
                className="control-btn"
                onClick={toggleFullscreen}
                aria-label="Toggle fullscreen"
              >
                <span>⛶</span>
              </button>
            </div>
          </div>

          <div className="showreel-caption">
            <span className="showreel-format">4K CINEMATIC MASTER • 24 FPS • SOUND DESIGN</span>
            <span className="showreel-note">[Custom showreel video can be replaced at assets/videos/showreel.mp4]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

