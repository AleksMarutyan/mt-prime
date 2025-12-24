// components/layout/conditional-layout.tsx
"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.includes("/admin") || pathname.includes("/pdf");
  const showLayout = !isAdmin;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-[#1a0a00] to-black">
      {showLayout && <Header />}
      <main className="flex-1">{children}</main>
      {showLayout && <Footer />}
    </div>
  );
}
