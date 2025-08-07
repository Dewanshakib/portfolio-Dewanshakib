import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dewan Shakib • Personal Portfolio",
  description:
    "Dewan Shakib is a fullstack web developer with 2 plus of experience",
  keywords:
    "Dewan Shakib, portfolio, full-stack developer, React, Next.js, Node.js, JavaScript, coding, projects, web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] min-h-screen p-5 sm:p-3 md:p-5">
          <header className="sticky top-5 z-20 rounded-full w-full overflow-hidden max-w-2xl mx-auto border border-gray-200 bg-white/60  backdrop-blur-2xl">
            <Navbar />
          </header>
          <main>
            {children}
            <Toaster position="bottom-right" />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
