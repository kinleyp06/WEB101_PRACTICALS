'use client';
import { useEffect, useState } from 'react';
import { videoService } from '@/services/videoService';
import VideoCard from './VideoCard';

export default function VideoFeed({ mode = 'forYou' }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = mode === 'following'
          ? await videoService.getFollowingVideos()
          : await videoService.getAllVideos();
        setVideos(data);
      } catch (err) {
        setError('Failed to load videos. Is the backend running?');
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [mode]);

  if (loading) return <div className="text-center py-20 text-gray-400">Loading videos...</div>;
  if (error) return <div className="text-center py-20 text-red-400">{error}</div>;
  if (videos.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        {mode === 'following'
          ? "You're not following anyone yet. Explore users to find people to follow!"
          : 'No videos found.'}
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-6 px-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}