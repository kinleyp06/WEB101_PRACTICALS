'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import { videoService } from '@/services/videoService';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function UploadPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [caption, setCaption] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [uploading, setUploading] = useState(false);

  if (!user) {
    return (
      <div className="text-center py-20 text-gray-400">
        Please log in to upload videos.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) return toast.error('Please select a video file');

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('caption', caption);
      if (thumbnail) formData.append('thumbnail', thumbnail);

      await videoService.uploadVideo(formData);
      toast.success('Video uploaded successfully!');
      router.push('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Upload Video</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Video File *</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Write a caption..."
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
    </div>
  );
}