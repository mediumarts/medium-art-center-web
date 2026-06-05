"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Exhibitions", href: "/exhibitions", children: [
    { label: "Show Schedule", href: "/exhibitions" },
    { label: "Past Exhibitions", href: "/exhibitions/past" },
  ]},
  { label: "Events", href: "/events" },
  { label: "Support Us", href: "/support", children: [
    { label: "Make a Donation", href: "/support/donate" },
    { label: "Sponsorship Program", href: "/support/sponsorship" },
    { label: "Become a Volunteer", href: "/support/volunteer" },
    { label: "Join the Board", href: "/support/board" },
  ]},
  { label: "About", href: "/about", children: [
    { label: "About Us", href: "/about" },
    { label: "Board of Directors", href: "/about/board-of-directors" },
    { label: "Solo Exhibition Proposal", href: "/about/solo-exhibition-proposal" },
    { label: "Rent Our Space", href: "/about/rent-our-space" },
    { label: "FAQ", href: "/about/faq" },
    { label: "Blog", href: "/about/blog" },
    { label: "Contact", href: "/about/contact" },
  ]},
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-surface border-b border-foreground/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-6">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.svg"
            alt="MEDIUM Art Center"
            width={320}
            height={160}
            className="h-32 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 min-w-[220px]">
                  <div className="bg-surface border border-foreground/10 rounded shadow-lg py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-foreground/10 px-4 pb-4">
          {nav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full text-left py-3 text-sm font-medium text-foreground flex items-center justify-between border-b border-foreground/5"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className={`w-3 h-3 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-muted hover:text-accent transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 text-sm font-medium text-foreground border-b border-foreground/5 hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
