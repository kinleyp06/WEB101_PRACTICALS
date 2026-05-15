import api from "@/lib/api-config";

export const getVideos = async () => {
  const response = await api.get("/videos");

  return response.data;
};

export const createVideo = async (videoData) => {
  const response = await api.post("/videos", videoData);

  return response.data;
};

export const likeVideo = async (videoId) => {
  const response = await api.post(`/videos/${videoId}/like`);

  return response.data;
};
