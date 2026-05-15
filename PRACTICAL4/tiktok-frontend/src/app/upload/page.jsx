"use client";

import { useState } from "react";

import axios from "axios";

export default function UploadPage() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);

    formData.append("description", description);

    formData.append("video", video);

    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:5000/api/videos", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Video uploaded successfully");
    } catch (error) {
      console.log(error);

      alert("Upload failed");
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-4xl font-bold">Upload Video</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3"
        />

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          className="w-full border p-3"
        />

        <button className="w-full rounded bg-pink-500 py-3 text-white">
          Upload
        </button>
      </form>
    </div>
  );
}
