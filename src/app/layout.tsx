import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/components/globals.css";
import { VehicleProvider } from "@/contexts/Vehicle/VehicleProvider";

const geistSans = localFont({
  // src: ".fonts/GeistVF.woff",
  src : "../styles/components/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../styles/components/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <VehicleProvider>
        {children}
        </VehicleProvider>
      </body>
    </html>
  );
}
