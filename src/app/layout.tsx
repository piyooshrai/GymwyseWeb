import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConversionElements } from "@/components/conversion/conversion-elements";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymWyse - Gym Management Software That Proves Its ROI",
  description:
    "Track revenue in real-time. Predict churn. Recover $12K+/month. The operating system for independent gyms and multi-location fitness operators.",
  icons: {
    icon: "/logos/logo-white.png",
    apple: "/logos/logo-white.png",
  },
  openGraph: {
    title: "GymWyse - Gym Software That Pays for Itself 18x Over",
    description:
      "Revenue analytics, churn prevention, and multi-location management for modern gyms.",
    url: "https://gymwyse.fit",
    siteName: "GymWyse",
    images: [{ url: "/logos/logo-white.png", width: 800, height: 600 }],
    type: "website",
  },
  alternates: {
    canonical: "https://gymwyse.fit",
    languages: {
      "en-US": "https://gymwyse.fit",
      "en-GB": "https://gymwyse.fit/uk",
      "en-AU": "https://gymwyse.fit/au",
      "ar-AE": "https://gymwyse.fit/ae",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <ConversionElements />
      </body>
    </html>
  );
}
