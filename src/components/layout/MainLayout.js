import Link from 'next/link';

export default function MainLayout({ children}) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-white border-b">
                <div className="flex items-center justify-between h-16 px-4">
                    <Link href="/" className="text-xl font-bold">
                     TikTok
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/" className="hover.text-red-500">
                                 Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="hover:text-red-500">
                                 Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/upload" className="hover:text-red-500">
                                 Upload
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="grow">
                {children}
            </main>
        </div>
    );
}