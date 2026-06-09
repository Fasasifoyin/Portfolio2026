import type { Metadata } from "next";
import { Syne, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foyin.dev"),
  title: {
    default: "Foyin Fasasi — Frontend Developer",
    template: "%s | Foyin Fasasi",
  },
  description:
    "Frontend developer specializing in React, TypeScript and Next.js. Building fast, accessible and beautiful web experiences.",
  keywords: [
    "frontend developer Nigeria",
    "React developer Lagos",
    "Next.js developer",
    "TypeScript developer",
    "web developer portfolio",
    "Foyin Fasasi",
    "Foyin",
  ],
  openGraph: {
    title: "Foyin Fasasi — Frontend Developer",
    description:
      "Frontend developer specializing in React, TypeScript and Next.js.",
    url: "https://foyin.dev",
    siteName: "Foyin Fasasi",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foyin Fasasi — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foyin Fasasi — Frontend Developer",
    description:
      "Frontend developer specializing in React, TypeScript and Next.js.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://foyin.dev",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-512.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${firaCode.variable} h-full antialiased`}
      suppressHydrationWarning // ← needed for dark mode toggle
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
