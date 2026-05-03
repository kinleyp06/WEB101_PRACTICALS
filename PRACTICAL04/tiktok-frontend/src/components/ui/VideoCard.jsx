'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import { videoService } from '@/services/videoService';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function VideoCard({ video, onAuthRequired }) {
  const { user } = useAuth();
  const [liked, setLiked] = useState(video.isLiked || false);
  const [likeCount, setLikeCount] = useState(video.likeCount || 0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = async () => {
    if (!user) return onAuthRequired?.();
    try {
      if (liked) {
        await videoService.unlikeVideo(video.id);
        setLikeCount((c) => c - 1);
      } else {
        await videoService.likeVideo(video.id);
        setLikeCount((c) => c + 1);
      }
      setLiked(!liked);
    } catch {
      toast.error('Failed to update like');
    }
  };

  const handleLoadComments = async () => {
    try {
      const data = await videoService.getComments(video.id);
      setComments(data);
      setShowComments(true);
    } catch {
      toast.error('Failed to load comments');
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!user) return onAuthRequired?.();
    if (!commentText.trim()) return;
    try {
      const newComment = await videoService.addComment(video.id, commentText);
      setComments((prev) => [...prev, newComment]);
      setCommentText('');
    } catch {
      toast.error('Failed to post comment');
    }
  };

  return (
    <div className="border-b pb-6 mb-6">
      {/* User info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-600">
          {video.user?.username?.[0]?.toUpperCase() || '?'}
        </div>
        <Link href={`/profile/${video.user?.id}`} className="font-semibold hover:underline">
          @{video.user?.username || 'Unknown'}
        </Link>
      </div>

      {/* Caption */}
      {video.caption && <p className="mb-3 text-gray-800">{video.caption}</p>}

      {/* Video player */}
      <video
        src={video.videoUrl}
        controls
        className="w-full max-h-[500px] rounded-xl bg-black"
        loop
      />

      {/* Interaction buttons */}
      <div className="flex gap-6 mt-3">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 font-medium ${liked ? 'text-pink-500' : 'text-gray-600'} hover:text-pink-500 transition`}
        >
          ❤️ {likeCount}
        </button>
        <button
          onClick={showComments ? () => setShowComments(false) : handleLoadComments}
          className="flex items-center gap-1 text-gray-600 hover:text-pink-500 transition"
        >
          💬 {video.commentCount || 0}
        </button>
      </div>

      {/* Comments section */}
      {showComments && (
        <div className="mt-4 bg-gray-50 rounded-xl p-4">
          <div className="space-y-2 max-h-48 overflow-y-auto mb-3">
            {comments.length === 0 ? (
              <p className="text-gray-400 text-sm">No comments yet.</p>
            ) : (
              comments.map((c) => (
                <div key={c.id} className="text-sm">
                  <span className="font-semibold">@{c.user?.username}: </span>
                  {c.text}
                </div>
              ))
            )}
          </div>
          {user && (
            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button type="submit" className="bg-pink-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-pink-600">
                Post
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}