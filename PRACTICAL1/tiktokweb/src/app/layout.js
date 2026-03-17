import MainLayout from '@/components/layout/MainLayout';
import './globals.css';

export const metadata = {
  title: 'TikTok Clone',
  description: 'A TikTok clone built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}