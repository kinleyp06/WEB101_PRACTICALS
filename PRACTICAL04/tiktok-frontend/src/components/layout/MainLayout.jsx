'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/authContext';
import AuthModal from '@/components/auth/AuthModal';

export default function MainLayout({ children }) {
  const { user, logout } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4 flex flex-col gap-4">
        <Link href="/" className="text-2xl font-bold text-pink-500">TikTok</Link>

        <nav className="flex flex-col gap-2">
          <Link href="/" className="hover:text-pink-500 font-medium">🏠 For You</Link>

          {user ? (
            <>
              <Link href="/following" className="hover:text-pink-500 font-medium">👥 Following</Link>
              <Link href="/explore-users" className="hover:text-pink-500 font-medium">🔍 Explore Users</Link>
              <Link href="/upload" className="hover:text-pink-500 font-medium">➕ Upload</Link>
              <Link href={`/profile/${user.id}`} className="hover:text-pink-500 font-medium">👤 Profile</Link>
              <button
                onClick={logout}
                className="text-left text-red-500 font-medium hover:underline mt-4"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 transition mt-2"
            >
              Log In
            </button>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
}