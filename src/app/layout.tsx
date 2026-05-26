import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavBar from "@/components/SideNavBar";
import TopAppBar from "@/components/TopAppBar";
import { MobileMenuProvider } from "@/context/MobileMenuContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dasbor RDFA-AgriChain",
  description: "Dasbor Institusional Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-app-bg text-on-background font-body-base text-body-base min-h-screen overflow-x-hidden selection:bg-accent-cyan selection:text-app-bg">
        <MobileMenuProvider>
          <SideNavBar />
          <TopAppBar />
          <main className="md:ml-64 mt-16 p-4 md:p-margin-desktop min-h-[calc(100vh-4rem)] transition-all duration-300">
            {children}
          </main>
        </MobileMenuProvider>
      </body>
    </html>
  );
}
