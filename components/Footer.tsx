import Link from "next/link";
import Image from "next/image";
import TranslateWidget from "./TranslateWidget";

const socials = [
  { label: "Instagram", href: "https://instagram.com/mediumartcenter", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )},
  { label: "Facebook", href: "https://facebook.com/mediumartcenter", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )},
  { label: "TikTok", href: "https://tiktok.com/@mediumartcenter", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )},
  { label: "Patreon", href: "https://patreon.com/mediumartcenter", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62c0 3.96-3.22 7.19-7.18 7.19-3.95 0-7.17-3.23-7.17-7.19 0-3.97 3.22-7.21 7.17-7.21M2 21.6h3.5V2.41H2V21.6z"/>
    </svg>
  )},
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="MEDIUM Art Center"
              width={120}
              height={60}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              A nonprofit gallery supporting artists and enriching the creative
              community of Mendocino County.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-background/60 hover:text-accent transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div className="space-y-3">
            <h3 className="text-background font-semibold text-sm uppercase tracking-wider">Navigate</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/exhibitions" className="block hover:text-accent transition-colors">Exhibitions</Link>
              <Link href="/events" className="block hover:text-accent transition-colors">Events</Link>
              <Link href="/support/donate" className="block hover:text-accent transition-colors">Donate</Link>
              <Link href="/about/blog" className="block hover:text-accent transition-colors">Blog</Link>
              <Link href="/about/contact" className="block hover:text-accent transition-colors">Contact</Link>
              <Link href="/about/faq" className="block hover:text-accent transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Visit column */}
          <div className="space-y-3">
            <h3 className="text-background font-semibold text-sm uppercase tracking-wider">Visit</h3>
            <div className="text-sm space-y-1">
              <p>110 South School Street</p>
              <p>Ukiah, CA 95482</p>
            </div>
            <div className="text-sm space-y-1">
              <p>Tuesday – Saturday</p>
              <p>11 AM – 6 PM</p>
            </div>
            <a
              href="mailto:info@mediumarts.org"
              className="text-sm hover:text-accent transition-colors block"
            >
              info@mediumarts.org
            </a>
            <TranslateWidget />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-background/40">
          <p>© {new Date().getFullYear()} MEDIUM Art Center · Deep Valley Arts Collective, a 501(c)(3) nonprofit · EIN 85-2757595</p>
          <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
        </div>
      </div>
    </footer>
  );
}
