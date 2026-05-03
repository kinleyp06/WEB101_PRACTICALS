import api from '@/lib/api-config';

export const userService = {
  // Get all users
  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  // Get user profile by ID
  getUserProfile: async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },

  // Get videos by a specific user
  getUserVideos: async (userId) => {
    const response = await api.get(`/users/${userId}/videos`);
    return response.data;
  },

  // Follow a user
  followUser: async (userId) => {
    const response = await api.post(`/users/${userId}/follow`);
    return response.data;
  },

  // Unfollow a user
  unfollowUser: async (userId) => {
    const response = await api.delete(`/users/${userId}/follow`);
    return response.data;
  },

  // Check if following a user
  isFollowing: async (userId) => {
    const response = await api.get(`/users/${userId}/is-following`);
    return response.data;
  },
};