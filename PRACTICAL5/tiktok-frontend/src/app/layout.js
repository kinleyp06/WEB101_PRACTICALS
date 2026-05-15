import "./globals.css";

import QueryProvider from "@/providers/queryProvider";

export const metadata = {
  title: "TikTok Clone",
  description: "Infinite Scroll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
