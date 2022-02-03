import React, { Component } from 'react';
import './App.css';
import { Icon, SearchBar, VideoList, ActiveVideo } from './components';
import YouTube from './api/youtube';

class App extends Component {
  state = {
    videos: [], 
    selectedVideo: null
  }
  
  componentDidMount = async () => {
    this.handleSubmit('Bootstrap');
  }

  handleSubmit = async (searchTerm) => {
    const response = await YouTube.get('search', {
      params: { 
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyDOJF0uhTU1IA_7c-PZpFgQoIVk8zGUvFw',
        q: searchTerm
      }
    });

    const videos = [...response.data.items];

    this.setState({
      videos,
      selectedVideo: videos[0]
    });
  }

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video })
  };

  render() {
    const {videos, selectedVideo} = this.state;
    
    return (
      <div className="container">
        <header>
          <div className="navbar">
            <div className="search-bar">
              <SearchBar onSubmit={this.handleSubmit} />
            </div>
          </div>
        </header>

        <main className="fluid-container">
          <div className="content-box">
            <ActiveVideo video={selectedVideo} />
            
            <VideoList 
              videos={videos}
              onVideoSelect={this.handleVideoSelect} />
          </div>
        </main>
      </div>
    );
  }
}
 
export default App;