"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/videos");

      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        {videos.map((video) => (
          <div
            key={video.id}
            className="mb-10 overflow-hidden rounded-2xl bg-black shadow-xl"
          >
            {/* VIDEO */}
            <video
              controls
              autoPlay
              loop
              className="h-[700px] w-full object-cover"
            >
              <source
                src={`http://localhost:5000${video.videoUrl}`}
                type="video/mp4"
              />
            </video>

            {/* INFO */}
            <div className="flex items-center justify-between p-4 text-white">
              <div>
                <p className="text-lg font-semibold">@{video.user?.username}</p>

                <p className="text-sm text-zinc-300">{video.title}</p>

                <p className="text-xs text-zinc-400">{video.description}</p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col items-center gap-4 text-xl">
                <button className="flex flex-col items-center">
                  ❤️
                  <span className="text-sm">{video.likes?.length || 0}</span>
                </button>

                <button className="flex flex-col items-center">
                  💬
                  <span className="text-sm">{video.comments?.length || 0}</span>
                </button>

                <button className="flex flex-col items-center">
                  ↗️
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
