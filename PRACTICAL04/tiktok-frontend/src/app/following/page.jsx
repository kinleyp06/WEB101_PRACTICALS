import VideoFeed from '@/components/ui/VideoFeed';

export default function FollowingPage() {
  return (
    <div>
      <h1 className="text-xl font-bold px-4 pt-6 pb-2">Following</h1>
      <VideoFeed mode="following" />
    </div>
  );
}