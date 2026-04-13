import type { Metadata } from "next";
import "./globals.css";
import { BlurFade } from "@/components/ui/BlurFade";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Dev Malik | Portfolio",
    template: "%s | Dev Malik"
  },
  description: "Full-stack developer building scalable products, platforms, and real-time systems that solve real-world workflow problems.",
  keywords: ["Dev Malik", "Full Stack Developer", "MERN Developer", "React", "Node.js", "Portfolio", "Delhi", "India", "Product Engineer"],
  authors: [{ name: "Dev Malik" }],
  creator: "Dev Malik",
  openGraph: {
    type: "website",
    locale: "en_US || en_IN",
    url: "https://devbuilds.vercel.app",
    title: "Dev Malik | Portfolio",
    description: "Full-stack developer building scalable products, platforms, and real-time systems.",
    siteName: "Dev Malik Portfolio",
    images: [
      {
        url: "/assets/images/dev_mee.jpeg",
        width: 1200,
        height: 630,
        alt: "Dev Malik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Malik | Portfolio",
    description: "Full-stack developer building scalable products, platforms, and real-time systems.",
    images: ["/assets/images/dev_mee.jpeg"],
    creator: "@devmalik_0302",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import { Navbar } from "@/components/ui/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="4acc163c-4d62-4460-823e-2a6c274ee402"></script>
      </head>
      <body
        className={`inter-tight antialiased`}
      >

        <Navbar />
        <div className="min-h-screen w-full relative bg-black">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 80% 25% at 50% 0%, rgba(99, 161, 237, 0.25), transparent 70%),
                radial-gradient(circle at 50% 45%, rgba(99, 161, 237, 0.05), transparent 60%),
                radial-gradient(ellipse 60% 40% at 90% 40%, rgba(99, 161, 237, 0.11), transparent 80%),
                radial-gradient(ellipse 60% 40% at 10% 70%, rgba(99, 161, 237, 0.11), transparent 80%),
                radial-gradient(ellipse 80% 30% at 50% 100%, rgba(99, 161, 237, 0.2), transparent 70%),
                #0a0a0a
              `,
            }}
          />
          <div className="relative z-10 pt-20">
            <BlurFade>{children}</BlurFade>
          </div>
        </div>

      </body>
    </html>
  );
}
