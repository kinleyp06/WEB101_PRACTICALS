'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  const [caption, setCaption] = useState('');
  const [visibility, setVisibility] = useState('public');
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Upload video</h1>
      
      <div className="flex gap-8">
        {/* Left side - Upload area */}
        <div className="w-360px border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <span className="text-4xl text-gray-400">+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Select video to upload</h3>
          <p className="text-sm text-gray-500 mb-4">Or drag and drop a file</p>
          <p className="text-xs text-gray-400 mb-2">MP4 or WebM</p>
          <p className="text-xs text-gray-400 mb-2">720x1280 resolution or higher</p>
          <p className="text-xs text-gray-400 mb-4">Up to 10 minutes</p>
          <p className="text-xs text-gray-400 mb-6">Less than 2 GB</p>
          <button className="mt-2 bg-red-500 text-white py-2 px-8 rounded-md hover:bg-red-600">
            Select file
          </button>
        </div>
        
        {/* Right side - Form */}
        <div className="flex-1">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Caption</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Add a caption..."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Cover</label>
            <div className="h-20 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500 text-sm">Cover image preview</span>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Who can view this video</label>
            <select 
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="public">Public</option>
              <option value="friends">Friends</option>
              <option value="private">Private</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Allow users to</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="comments" className="mr-2" defaultChecked />
                <label htmlFor="comments">Comment</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="duet" className="mr-2" defaultChecked />
                <label htmlFor="duet">Duet</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="stitch" className="mr-2" defaultChecked />
                <label htmlFor="stitch">Stitch</label>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <Link href="/">
              <button className="px-6 py-2 border rounded-md hover:bg-gray-50">
                Discard
              </button>
            </Link>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}