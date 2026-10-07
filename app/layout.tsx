import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jal Devecais | Software Developer",
  description:
    "Portfolio of Jal Devecais, a software developer in Bacolod City, Philippines, building mobile apps, websites, and business systems.",
};

export const viewport: Viewport = {
  themeColor: "#245edb",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{".boot,.logon{display:none!important}"}</style>
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
