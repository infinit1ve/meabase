import type { Metadata } from "next";
import "./globals.css";
import '@flaticon/flaticon-uicons/css/all/all.css';
import './fonts.css'

export const metadata: Metadata = {
  title: "Meabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
