import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/page_transition/pageTransition";
import { PROJECT_NAME } from "@/utils/constants";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: "Welcome to the jungle ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
