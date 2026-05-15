"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getVideos } from "@/services/videoService";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function HomePage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["videos"],

      queryFn: getVideos,

      initialPageParam: null,

      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  const loadMoreRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* LEFT SIDEBAR */}
      <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-zinc-800 bg-black p-6">
        <h1 className="mb-10 text-4xl font-bold text-pink-500">TikTok</h1>

        <nav className="space-y-6 text-lg">
          <p className="cursor-pointer hover:text-pink-500">🏠 For You</p>

          <p className="cursor-pointer hover:text-pink-500">👥 Following</p>

          <p className="cursor-pointer hover:text-pink-500">🔍 Explore</p>

          <p className="cursor-pointer hover:text-pink-500">⬆ Upload</p>

          <p className="cursor-pointer hover:text-pink-500">👤 Profile</p>
        </nav>
      </aside>

      {/* FEED */}
      <main className="ml-64 flex w-full justify-center">
        <div className="w-full max-w-xl py-10">
          {data?.pages.map((page) =>
            page.videos.map((video) => (
              <div
                key={video.id}
                className="mb-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
              >
                {/* VIDEO */}
                <video
                  controls
                  autoPlay
                  loop
                  className="h-[700px] w-full bg-black object-contain"
                >
                  <source
                    src={`http://localhost:5000${video.videoUrl}`}
                    type="video/mp4"
                  />
                </video>

                {/* INFO */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-xl font-bold">@{video.user?.username}</p>

                    <p className="mt-2 text-lg">{video.title}</p>

                    <p className="mt-1 text-sm text-zinc-400">
                      {video.description}
                    </p>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex flex-col items-center gap-5 text-2xl">
                    <button className="flex flex-col items-center">
                      ❤️
                      <span className="text-sm">{video.likes?.length}</span>
                    </button>

                    <button className="flex flex-col items-center">
                      💬
                      <span className="text-sm">{video.comments?.length}</span>
                    </button>

                    <button className="flex flex-col items-center">
                      🔗
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            )),
          )}

          {/* LOADING */}
          <div ref={loadMoreRef} className="py-10 text-center text-zinc-400">
            {isFetchingNextPage ? "Loading more videos..." : "Scroll for more"}
          </div>
        </div>
      </main>
    </div>
  );
}
