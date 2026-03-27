import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Dhruv0T"),
  title: "Dhruv Torney | AI & Full-Stack Portfolio",
  description:
    "Explore the portfolio of Dhruv Torney, an engineering student focused on AI, computer vision, and full-stack software systems.",
  keywords: [
    "Dhruv Torney",
    "AI Portfolio",
    "Computer Vision",
    "YOLO",
    "Full Stack Developer",
    "WebSockets",
  ],
  authors: [{ name: "Dhruv Torney" }],
  openGraph: {
    title: "Dhruv Torney | Personal Portfolio",
    description:
      "AI and full-stack projects in computer vision, real-time systems, and product engineering.",
    url: "https://github.com/Dhruv0T",
    siteName: "Dhruv Torney Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Dhruv Torney Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Torney | AI & Full-Stack Developer",
    description: "Building practical AI and full-stack applications.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
