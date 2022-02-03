import React from 'react';
import './style.css';

function VideoItem({ video, onVideoSelect }) {

  const thumbnailUrl = video.snippet.thumbnails.medium.url;

  return (
    <div className="video-box" onClick={onVideoSelect} style={{ cursor: 'pointer' }}>
      <div className="img-container">
        <img src={thumbnailUrl} alt="Video Thumbnail" className="video-thumbnail" />
      </div>
      <div className="details">
        <h3 className={video.snippet.title.length >= 65 ? "truncate" : ""}>{video.snippet.title}</h3>
        <p>{ video.snippet.channelTitle }</p>
        <div className="video-statistics">
          <p className="video-views">837K views</p>
          <p className="video-upload-date">3 months ago</p>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;