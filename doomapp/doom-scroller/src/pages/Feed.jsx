import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

function Feed() {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const feedRef = useRef(null);

  // Get stats from localStorage or initialize them
  const [stats, setStats] = useState(() => {
    const storedStats = JSON.parse(localStorage.getItem('appStats'));
    return storedStats || { videosScrolled: 0 };
  });

  const fetchVideos = async () => {
    const apiKey = 'AIzaSyBqkdPUSdQcjs_bV6C5_XEipNg3r3QNziI'; // Add your API key here
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=shorts&pageToken=${pageToken || ''}&key=${apiKey}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    setVideos(prev => [...prev, ...data.items]);
    setPageToken(data.nextPageToken);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    // Update the number of scrolled videos and store in localStorage
    if (videos.length > 0) {
      const updatedStats = { ...stats, videosScrolled: stats.videosScrolled + videos.length };
      setStats(updatedStats);
      localStorage.setItem('appStats', JSON.stringify(updatedStats));
    }
  }, [videos]);

  // Handle scroll event to change videos
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      handleNextVideo();
    } else if (e.deltaY < 0) {
      handlePreviousVideo();
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [videos, currentVideoIndex]);

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prevIndex => prevIndex + 1);
    } else {
      fetchVideos();
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div ref={feedRef} className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {videos.length > 0 && (
        <div className="flex flex-col items-center">
          <YouTube
            videoId={videos[currentVideoIndex].id.videoId}
            className="w-full max-w-lg" // Adjust max width as needed
            opts={{
              playerVars: {
                autoplay: 1, // Auto-play the video
              },
            }}
          />
          <div className="mt-4">
            <button
              onClick={handlePreviousVideo}
              className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Previous Video
            </button>
            <button
              onClick={handleNextVideo}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Next Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;
