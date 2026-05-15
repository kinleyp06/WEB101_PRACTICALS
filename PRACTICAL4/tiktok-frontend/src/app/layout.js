import "./globals.css";
import Link from "next/link";

import { AuthProvider } from "@/contexts/authContext";

export const metadata = {
  title: "TikTok Clone",
  description: "TikTok Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <div className="flex min-h-screen">
            <aside className="w-64 bg-white p-5 border-r">
              <h1 className="mb-8 text-4xl font-bold text-pink-500">TikTok</h1>

              <nav className="space-y-4">
                <Link href="/">Home</Link>

                <br />

                <Link href="/upload">Upload</Link>

                <br />

                <Link href="/following">Following</Link>

                <br />

                <Link href="/explore-users">Explore Users</Link>

                <br />

                <Link href="/login">Login</Link>

                <br />

                <Link href="/signup">Signup</Link>
              </nav>
            </aside>

            <main className="flex-1 p-6">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
