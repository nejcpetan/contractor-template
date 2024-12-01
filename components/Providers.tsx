"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
