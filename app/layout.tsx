import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainwave.ai - Your personal second brain.",
  description:
    "Bring saved information from all over the internet into one place where you can connect it, and ask AI about it",
  metadataBase: {
    host: "https://brainwave-ai.pages.dev",
    href: "/",
    origin: "https://brainwave-ai.pages.dev",
    password: "brainwave",
    hash: "brainwave",
    pathname: "/",
    search: "",
    username: "brainwave",
    hostname: "brainwave.ai",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://brainwave-ai.pages.dev/",
    toJSON: () => "https://brainwave-ai.pages.dev/",
  },
  manifest: "/manifest.webmanifest",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >{children}
        </ThemeProvider></body>
    </html>
  );
}
