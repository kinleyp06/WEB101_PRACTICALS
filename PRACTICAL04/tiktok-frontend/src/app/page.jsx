import VideoFeed from '@/components/ui/VideoFeed';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <VideoFeed mode="forYou" />
    </MainLayout>
  );
}