"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Produtos", href: "/produtos" },
  { label: "Soluções", href: "/servicos" },
  { label: "Engenharia", href: "/tecnologia" },
  { label: "Empresa", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08090D]/90 backdrop-blur-2xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0" aria-label="Vision Solutions Home">
            <Image
              src="/icon-192.png"
              alt="Vision Solutions Logo"
              width={32}
              height={32}
              priority
              className="w-8 h-8 rounded-lg shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] text-white uppercase">
                Vision
              </span>
              <span className="text-[8.5px] font-semibold tracking-[0.24em] text-sky-400 uppercase mt-0.5">
                Solutions
              </span>
            </div>
          </Link>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contato"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dim text-white text-[12px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-sm"
            >
              Falar com a Vision
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden border-b border-white/[0.08] bg-[#08090D]/95 backdrop-blur-2xl"
          >
            <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1.5">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14.5px] font-medium transition-all ${
                        isActive
                          ? "text-white bg-white/[0.08] font-semibold"
                          : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-white/20" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.3 }}
                className="pt-4 border-t border-white/[0.06] mt-2 space-y-2.5"
              >
                <Link
                  href="/contato"
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-full bg-primary hover:bg-primary-dim text-white text-[14px] font-medium shadow-lg shadow-primary/25 transition-all"
                >
                  <span>Falar com a Vision</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
