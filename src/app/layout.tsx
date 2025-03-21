import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Metadata for SEO
  export const metadata: Metadata = {
    title: "Socially | Timesheet Management App",
    description: "Socially is a modern timesheet management app that helps teams track work hours, manage tasks, and boost productivity with an intuitive dashboard and seamless UI.",
  };
  

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // console.log("Firebase Initialized:", db)
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head />
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col">
              {/* Navbar */}
          
              <NavBar />

              {/* Main Layout */}
              <main className="flex-1 py-8">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:col-span-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <SideBar/>
                    </aside>

                    {/* Main Content */}
                    <section className="lg:col-span-9 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                      {children}
                    </section>
                  </div>
                </div>
              </main>
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
