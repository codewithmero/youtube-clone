import React from 'react';
import './style.css';

function VideoDetail({ video }) {

  if(video === null)
    return (
      <div className="video-container">
        <p>OOPS! Something went wrong.</p>
      </div>
    )

  const { videoId } = video.id;
  const { title, channelTitle, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="active-video">
      <div className="video-container">
        <iframe 
          height="100%" 
          width="100%" 
          title="Video Player" 
          className="video-player" 
          src={videoSrc} />
      </div>
      <div className="video-detail">
        <div className="top-details">
          <div className="hashtags">
            <span>#bootstrap</span>
            <span>#uilibrary</span>
            <span>#frontend</span>
          </div>

          <h2 className="video-title">{title}</h2>

          <div className="video-statistics">
            <p className="video-views">1,809,923 views</p>
            <p className="video-upload-date">Dec 14, 2021</p>
          </div>
        </div>
      </div>
    </div>    
  );
}
 
export default VideoDetail;
