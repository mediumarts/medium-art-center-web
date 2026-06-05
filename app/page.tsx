import Image from "next/image";
import Link from "next/link";

// Placeholder data — will come from Sanity CMS
const currentExhibition = {
  title: "Sanctuaries of Color",
  artist: "Jessica Hernández",
  dates: "May 3 – June 28, 2025",
  description:
    "A vibrant exploration of sanctuary, belonging, and the healing power of color. Hernández invites viewers into intimate spaces where hue and form become a language of refuge.",
  image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=1600&q=80",
  href: "/exhibitions",
};

const upcomingEvents = [
  {
    title: "First Friday Opening Reception",
    date: "June 6, 2025",
    time: "6:00 – 9:00 PM",
    description: "Join us for the opening reception of our summer exhibition. Free and open to the public.",
    href: "/events",
  },
  {
    title: "Ukiah Photography Club Meeting",
    date: "June 12, 2025",
    time: "6:30 PM",
    description: "Monthly meetup for photographers of all skill levels. Bring your work and your curiosity.",
    href: "/events",
  },
  {
    title: "Pieced Together Workshop",
    date: "June 19, 2025",
    time: "2:00 – 4:00 PM",
    description: "A collaborative collage workshop open to all. Materials provided.",
    href: "/events",
  },
];

const latestPost = {
  title: "Deep Valley Arts Collective Announces New Name: MEDIUM Art Center",
  date: "April 30, 2025",
  excerpt:
    "After four years of growth and community impact, we're stepping into a new identity that better reflects who we are and where we're going.",
  href: "/about/blog",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
};

export default function HomePage() {
  return (
    <>
      {/* Hero — Current Exhibition */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={currentExhibition.image}
            alt={currentExhibition.title}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
            Current Exhibition
          </p>
          <h1 className="text-4xl md:text-6xl text-background mb-3 leading-tight max-w-2xl">
            {currentExhibition.title}
          </h1>
          <p className="text-background/70 text-lg mb-2">{currentExhibition.artist}</p>
          <p className="text-background/50 text-sm mb-6">{currentExhibition.dates}</p>
          <p className="text-background/80 max-w-xl mb-8 leading-relaxed">
            {currentExhibition.description}
          </p>
          <Link
            href={currentExhibition.href}
            className="inline-flex items-center gap-2 bg-accent text-foreground px-6 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            View Exhibition
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl text-foreground">Upcoming Events</h2>
          <Link href="/events" className="text-sm text-accent hover:underline font-medium">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Link key={event.title} href={event.href} className="group block bg-surface border border-foreground/10 p-6 hover:border-accent/40 transition-colors">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{event.date}</p>
              <p className="text-muted text-xs mb-3">{event.time}</p>
              <h3 className="text-foreground font-sans font-semibold mb-2 group-hover:text-accent transition-colors">
                {event.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{event.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <hr className="border-foreground/10" />
      </div>

      {/* Latest News */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl text-foreground mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
            <Image
              src={latestPost.image}
              alt={latestPost.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-muted text-sm mb-3">{latestPost.date}</p>
            <h3 className="text-2xl text-foreground mb-4 leading-snug">{latestPost.title}</h3>
            <p className="text-muted leading-relaxed mb-6">{latestPost.excerpt}</p>
            <Link
              href={latestPost.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Read more
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <hr className="border-foreground/10" />
      </div>

      {/* Support + Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Donate CTA */}
          <div className="bg-foreground text-background p-8">
            <h2 className="text-3xl mb-4">Support the Arts</h2>
            <p className="text-background/70 leading-relaxed mb-6">
              MEDIUM Art Center is a 501(c)(3) nonprofit. Your donation directly
              supports free and low-cost exhibitions, workshops, and community
              programming in Mendocino County.
            </p>
            <Link
              href="/support/donate"
              className="inline-flex items-center gap-2 bg-accent text-foreground px-6 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Make a Donation
            </Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl text-foreground mb-4">Stay in the Loop</h2>
            <p className="text-muted leading-relaxed mb-6">
              Get exhibition announcements, event invitations, and community news
              delivered to your inbox.
            </p>
            {/* Mailchimp embed will replace this form */}
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-foreground/20 bg-surface text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-surface border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-center text-muted text-xs uppercase tracking-widest mb-6">
            Supported by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <span className="text-sm font-medium text-foreground">California Arts Council</span>
            <span className="text-sm font-medium text-foreground">Community Foundation of Mendocino County</span>
          </div>
        </div>
      </section>
    </>
  );
}
