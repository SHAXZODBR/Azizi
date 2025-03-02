import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azizi",
  description: "A brief and engaging description of your app.",
  keywords: ["Next.js", "React", "Web App"], // Helps search engines understand your page
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }], // Author details
  creator: "Your Name",
  openGraph: {
    title: "Azizi",
    description: "A brief and engaging description of your app.",
    url: "https://yourwebsite.com",
    siteName: "Your App Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Change this to your actual OG image
        width: 1200,
        height: 630,
        alt: "Your App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your App Name",
    description: "A brief and engaging description of your app.",
    creator: "@your_twitter", // Your Twitter username
    images: ["https://yourwebsite.com/og-image.jpg"], // Same as Open Graph image
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff", // Customize based on your brand colors
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
  lang = "en", // Default language, can be updated dynamically
}: Readonly<{
  children: React.ReactNode;
  lang?: string;
}>) {
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
