import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import { siteMetadata } from "@portfolio/content";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { FeatureFlagsProvider } from "@/providers/FeatureFlagsProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${manrope.variable} antialiased`}
      >
        <ThemeProvider>
          <FeatureFlagsProvider app="host">
            {children}
          </FeatureFlagsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
