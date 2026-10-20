import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Animations } from "@/components/Animations";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Irfan UV · Full Stack Developer",
  description:
    "Full Stack Developer in Abu Dhabi building web and desktop apps with React, Next.js, Node.js and Python.",
};

// Runs before paint: applies the saved theme and marks JS as available, so nothing flashes.
const bootScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
        <Animations />
      </body>
    </html>
  );
}
