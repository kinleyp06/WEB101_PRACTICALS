'use client';
import { useState } from 'react';
import VideoCard from '@/components/ui/VideoCard';

const FOLLOWING_POSTS = [
  {
    id: '101',
    username: '@sarah_smith',
    caption: 'Just tried this new dance challenge! 🔥 #dance #trending #fyp',
    audio: 'Dance Challenge Song - Artist Name',
    likes: 3421,
    comments: 128,
    shares: 56
  },
  {
    id: '102',
    username: '@mike_travels',
    caption: 'Beautiful sunset in Bali! 🌅 #travel #bali #vacation',
    audio: 'Original Sound - Mike Travels',
    likes: 2156,
    comments: 89,
    shares: 34
  },
  {
    id: '103',
    username: '@cooking_with_emma',
    caption: 'Easy 5-minute pasta recipe! 🍝 #cooking #recipe #foodie',
    audio: 'Cooking Vibes - Emma',
    likes: 5678,
    comments: 234,
    shares: 123
  }
];

export default function FollowingPage() {
  const [posts] = useState(FOLLOWING_POSTS);
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Following</h2>
      
      {posts.length > 0 ? (
        <div className="max-w-550px mx-auto">
          {posts.map((post) => (
            <VideoCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">Posts from accounts you follow will appear here</p>
        </div>
      )}
    </div>
  );
}