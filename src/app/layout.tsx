
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Kay's World — Geun Woo Park",
  description: "Fullstack / Backend Engineer Portfolio"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
