'use client';
import { useState } from 'react';
import { FaUser, FaVideo, FaHeart, FaShare } from 'react-icons/fa';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('videos');
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile header */}
      <div className="flex items-start gap-8 mb-8">
        <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center">
          <FaUser className="text-4xl text-gray-500" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl font-bold">username</h1>
            <button className="px-4 py-1 border rounded-md text-sm font-medium hover:bg-gray-50">
              Edit profile
            </button>
          </div>
          
          <div className="flex gap-6 mb-4">
            <div>
              <span className="font-bold">124</span>
              <span className="text-gray-600 ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold">1.2M</span>
              <span className="text-gray-600 ml-1">Followers</span>
            </div>
            <div>
              <span className="font-bold">458</span>
              <span className="text-gray-600 ml-1">Likes</span>
            </div>
          </div>
          
          <p className="text-sm">
            This is my bio section. I love creating content on TikTok!
          </p>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b flex">
        <button
          className={`px-6 py-3 font-medium text-sm ${
            activeTab === 'videos' 
              ? 'border-b-2 border-black text-black' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('videos')}
        >
          <FaVideo className="inline mr-2" />
          Videos
        </button>
        <button
          className={`px-6 py-3 font-medium text-sm ${
            activeTab === 'liked' 
              ? 'border-b-2 border-black text-black' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('liked')}
        >
          <FaHeart className="inline mr-2" />
          Liked
        </button>
      </div>
      
      {/* Video grid */}
      <div className="grid grid-cols-3 gap-1 mt-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="aspect-9/16 bg-gray-200 relative group">
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex gap-4 text-white">
                <span className="flex items-center">
                  <FaHeart className="mr-1" /> {Math.floor(Math.random() * 1000)}
                </span>
                <span className="flex items-center">
                  <FaShare className="mr-1" /> {Math.floor(Math.random() * 100)}
                </span>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              ▶ 0:{Math.floor(Math.random() * 30)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}