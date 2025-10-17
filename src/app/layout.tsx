import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumit Kumar — Portfolio",
  description: "Portfolio of Sumit Kumar — Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
