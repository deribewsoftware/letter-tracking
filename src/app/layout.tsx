import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackIt - Revolutionize Your Document Management",
  description: "Experience seamless and secure document tracking with TrackIt. Manage, share, and collaborate with ease, all in one powerful platform.",
  keywords: "document management, letter tracking, secure sharing, workflow automation, TrackIt",

  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark ${inter.className}`}>
     
        
        {children}
      
      </body>
    </html>
  );
}
