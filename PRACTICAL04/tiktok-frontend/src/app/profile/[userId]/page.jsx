'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { userService } from '@/services/userService';
import { useAuth } from '@/contexts/authContext';
import toast from 'react-hot-toast';
import VideoCard from '@/components/ui/VideoCard';

export default function ProfilePage() {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const [profileData, videosData] = await Promise.all([
          userService.getUserProfile(userId),
          userService.getUserVideos(userId),
        ]);
        setProfile(profileData);
        setVideos(videosData);
        setIsFollowing(profileData.isFollowing || false);
      } catch {
        toast.error('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId]);

  const handleFollow = async () => {
    try {
      if (isFollowing) {
        await userService.unfollowUser(userId);
        setIsFollowing(false);
      } else {
        await userService.followUser(userId);
        setIsFollowing(true);
      }
    } catch {
      toast.error('Action failed');
    }
  };

  if (loading) return <div className="text-center py-20 text-gray-400">Loading profile...</div>;
  if (!profile) return <div className="text-center py-20 text-red-400">User not found.</div>;

  const isOwnProfile = currentUser?.id === profile.id;

  return (
    <div className="max-w-xl mx-auto py-6 px-4">
      {/* Profile header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-2xl font-bold text-pink-600">
          {profile.username?.[0]?.toUpperCase()}
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">@{profile.username}</h1>
          <p className="text-sm text-gray-500">
            {profile._count?.followers || 0} followers · {profile._count?.following || 0} following
          </p>
        </div>
        {currentUser && !isOwnProfile && (
          <button
            onClick={handleFollow}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              isFollowing
                ? 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                : 'bg-pink-500 text-white hover:bg-pink-600'
            }`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        )}
      </div>

      {/* User's videos */}
      <h2 className="font-semibold text-gray-700 mb-4">Videos</h2>
      {videos.length === 0 ? (
        <p className="text-gray-400">No videos yet.</p>
      ) : (
        videos.map((video) => <VideoCard key={video.id} video={video} />)
      )}
    </div>
  );
}