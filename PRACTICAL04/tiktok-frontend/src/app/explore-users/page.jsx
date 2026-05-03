'use client';
import { useEffect, useState } from 'react';
import { userService } from '@/services/userService';
import { useAuth } from '@/contexts/authContext';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function ExploreUsersPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [followingMap, setFollowingMap] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers();
        setUsers(data);
        // Build initial following state
        const map = {};
        data.forEach((u) => { map[u.id] = u.isFollowing || false; });
        setFollowingMap(map);
      } catch {
        toast.error('Failed to load users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleFollow = async (userId) => {
    try {
      if (followingMap[userId]) {
        await userService.unfollowUser(userId);
        setFollowingMap((prev) => ({ ...prev, [userId]: false }));
        toast.success('Unfollowed');
      } else {
        await userService.followUser(userId);
        setFollowingMap((prev) => ({ ...prev, [userId]: true }));
        toast.success('Following!');
      }
    } catch {
      toast.error('Action failed');
    }
  };

  if (loading) return <div className="text-center py-20 text-gray-400">Loading users...</div>;

  return (
    <div className="max-w-xl mx-auto py-6 px-4">
      <h1 className="text-xl font-bold mb-6">Explore Users</h1>
      <div className="space-y-4">
        {users
          .filter((u) => u.id !== user?.id) // Don't show current user
          .map((u) => (
            <div key={u.id} className="flex items-center justify-between border rounded-xl p-4">
              <Link href={`/profile/${u.id}`} className="flex items-center gap-3 hover:opacity-80">
                <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-600">
                  {u.username?.[0]?.toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold">@{u.username}</p>
                  <p className="text-sm text-gray-500">{u._count?.followers || 0} followers</p>
                </div>
              </Link>
              {user && (
                <button
                  onClick={() => handleFollow(u.id)}
                  className={`px-4 py-1.5 rounded-lg font-medium text-sm transition ${
                    followingMap[u.id]
                      ? 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                      : 'bg-pink-500 text-white hover:bg-pink-600'
                  }`}
                >
                  {followingMap[u.id] ? 'Following' : 'Follow'}
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}