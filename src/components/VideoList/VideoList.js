import React, { Component } from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './style.css';

// const videos = [
//   {
//     id: {
//       videoId: "aXnEBGpl"
//     },
//     snippet: {
//       title: "These 35 Albert Einstein's Quotes Are Life Changing",
//       channelTitle: "National Geographic",
//       views: "11M",
//       dateUploaded: "4 years ago"
//     }
//   },
//   {
//     id: {
//       videoId: "aXnEBGpl"
//     },
//     snippet: {
//       title: "These 35 Albert Einstein's Quotes Are Life Changing",
//       channelTitle: "National Geographic",
//       views: "11M",
//       dateUploaded: "4 years ago"
//     }
//   },
//   {
//     id: {
//       videoId: "aXnEBGpl"
//     },
//     snippet: {
//       title: "These 35 Albert Einstein's Quotes Are Life Changing",
//       channelTitle: "National Geographic",
//       views: "11M",
//       dateUploaded: "4 years ago"
//     }
//   },
//   {
//     id: {
//       videoId: "aXnEBGpl"
//     },
//     snippet: {
//       title: "These 35 Albert Einstein's Quotes Are Life Changing",
//       channelTitle: "National Geographic",
//       views: "11M",
//       dateUploaded: "4 years ago"
//     }
//   },
//   {
//     id: {
//       videoId: "aXnEBGpl"
//     },
//     snippet: {
//       title: "These 35 Albert Einstein's Quotes Are Life Changing",
//       channelTitle: "National Geographic",
//       views: "11M",
//       dateUploaded: "4 years ago"
//     }
//   },
//   {
//     id: {
//       videoId: "aXnEBGpl"
//     },
//     snippet: {
//       title: "These 35 Albert Einstein's Quotes Are Life Changing",
//       channelTitle: "National Geographic",
//       views: "11M",
//       dateUploaded: "4 years ago"
//     }
//   }
// ]

class VideoList extends Component {

  render() { 
    const { videos, onVideoSelect } = this.props;
    return(
      <div className="video-list-container">
        {
          videos.map(video => 
            <VideoItem 
              key={video.etag} 
              video={video}
              onVideoSelect={() => onVideoSelect(video)} />)
        }
      </div>
    )
  }
}
 
export default VideoList;