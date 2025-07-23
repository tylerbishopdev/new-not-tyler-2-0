import { cn } from "@/lib/utils";

import { Inter_Tight } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "Features Section 2",
  description: "A modern features section with an animated grid layout.",
    generator: 'v0.dev'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-svh flex-col antialiased bg-black",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}


import './globals.css'
