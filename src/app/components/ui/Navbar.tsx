"use client";
import { useState, useEffect } from "react";
import { siteContent } from "../../../content/site";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo-letter.png" alt="Kalvron Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight text-white">Kalvron</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {siteContent.navigation.map((link) => (
            <a key={link.label} href={link.href} className="text-xs xl:text-sm font-medium text-text-muted hover:text-white transition-colors duration-150 whitespace-nowrap">
              {link.label}
            </a>
          ))}
          <a href="/#book-a-call" className="inline-flex h-9 xl:h-10 items-center justify-center bg-accent-amber px-4 xl:px-6 text-xs xl:text-sm font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-background whitespace-nowrap">
            Book a call
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-text-muted hover:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 shadow-2xl">
          {siteContent.navigation.map((link) => (
            <a key={link.label} href={link.href} className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/#book-a-call" onClick={() => setIsOpen(false)} className="inline-flex h-12 items-center justify-center bg-accent-amber px-6 text-base font-bold tracking-wide text-white">
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
}
