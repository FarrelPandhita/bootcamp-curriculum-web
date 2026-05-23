import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Network Engineering & Infrastructure Bootcamp",
  description:
    "A structured and practical networking program designed to bridge academic learning and real-world network engineering practices. From Fundamentals to Enterprise Networking.",
  keywords: [
    "networking bootcamp",
    "CCNA",
    "Cisco",
    "network engineering",
    "infrastructure",
    "GNS3",
    "Packet Tracer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
