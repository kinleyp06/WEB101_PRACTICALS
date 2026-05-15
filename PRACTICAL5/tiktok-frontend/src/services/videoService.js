import axios from "axios";

export const getVideos = async ({ pageParam = null }) => {
  const url = pageParam
    ? `http://localhost:5000/api/videos?cursor=${pageParam}`
    : `http://localhost:5000/api/videos`;

  const response = await axios.get(url);

  return response.data;
};
