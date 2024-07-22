import React, { useState } from 'react';
import axios from 'axios';

const FacebookVideoDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async () => {
    if (!videoUrl) {
      setMessage('Please enter a valid Facebook video URL.');
      return;
    }

    setMessage('Downloading...');

    try {
      const response = await axios.post('https://facebook-video-downloader-api.p.rapidapi.com/facebook', 
        { url: videoUrl },
        {
          headers: {
            'X-Rapidapi-Key': '67e21e0a64msh9bc9b3f4d03f95ap122353jsn0355ac924b1c',
            'X-Rapidapi-Host': 'facebook-video-downloader-api.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        setDownloadLink(response.data.downloadUrl);
        setMessage('Download ready! Click the link below to download.');
      } else {
        setMessage('Failed to download the video.');
      }
    } catch (error) {
      console.error('Error downloading video:', error);
      setMessage('An error occurred while downloading the video.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Facebook Video Downloader</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Facebook Video URL</label>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter Facebook video URL"
        />
      </div>
      <button
        onClick={handleDownload}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Download Video
      </button>
      {message && (
        <div className="mt-4 text-gray-700">
          {message}
        </div>
      )}
      {downloadLink && (
        <a
          href={downloadLink}
          className="block mt-2 text-blue-500 underline"
          download
        >
          Download Video
        </a>
      )}
    </div>
  );
};

export default FacebookVideoDownloader;
