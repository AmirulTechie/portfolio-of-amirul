import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Amirul | Full-Stack Developer";
const description =
  "Portfolio website of Amirul, a full-stack developer with a frontend focus, specializing in React, Next.js, and Node.js. Showcasing projects, skills, and experience in web development.";

export const metadata = {
  metadataBase: new URL("https://amiruldev.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://amiruldev.vercel.app",
    siteName: "Amirul | Full-Stack Developer",
    images: [{ url: "/amirul-islam.png", width: 1200, height: 1200 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/amirul-islam.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`
      }
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Analytics></Analytics>
        <NavBar></NavBar>
        {children}
        </body>
    </html>
  );
}
