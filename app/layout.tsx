import type { Metadata } from "next";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jal Devecais | Portfolio",
  description: "Jal Devecais is a software developer based in Bacolod City building clean SaaS-style portfolio experiences."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-paper font-sans text-ink antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
