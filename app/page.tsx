import Image from "next/image";
import Link from "next/link";

// Placeholder data — will come from Sanity CMS
const currentExhibition = {
  title: "Sanctuaries of Color",
  artist: "Jessica Hernández",
  dates: "May 3 – June 28, 2025",
  description:
    "A vibrant exploration of sanctuary, belonging, and the healing power of color. Hernández invites viewers into intimate spaces where hue and form become a language of refuge.",
  image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
  href: "/exhibitions",
};

const upcomingEvents = [
  {
    title: "First Friday Opening Reception",
    date: "June 6",
    time: "6:00 – 9:00 PM",
    description: "Free and open to everyone. Come see the new show, meet the artist, and say hi.",
    href: "/events",
  },
  {
    title: "Ukiah Photography Club",
    date: "June 12",
    time: "6:30 PM",
    description: "Monthly meetup for photographers of all skill levels. Bring your work and your curiosity.",
    href: "/events",
  },
  {
    title: "Pieced Together Workshop",
    date: "June 19",
    time: "2:00 – 4:00 PM",
    description: "A collaborative collage workshop open to all. Materials provided, no experience needed.",
    href: "/events",
  },
];

const latestPost = {
  title: "We have a new name: MEDIUM Art Center",
  date: "April 30, 2025",
  excerpt:
    "After four years of growth and community impact, we're stepping into a new identity that better reflects who we are and where we're going.",
  href: "/about/blog",
  image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
};

export default function HomePage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[540px]">
        {/* Text side */}
        <div className="flex flex-col justify-center px-8 sm:px-12 py-16 bg-background">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Now Showing
          </p>
          <h1 className="text-5xl md:text-6xl text-foreground leading-tight mb-4">
            {currentExhibition.title}
          </h1>
          <p className="text-lg text-muted mb-1">{currentExhibition.artist}</p>
          <p className="text-sm text-muted mb-6">{currentExhibition.dates}</p>
          <p className="text-foreground/80 leading-relaxed mb-8 max-w-sm">
            {currentExhibition.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={currentExhibition.href}
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-foreground/80 transition-colors"
            >
              View Exhibition
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div className="relative min-h-[320px] md:min-h-0">
          <Image
            src={currentExhibition.image}
            alt={currentExhibition.title}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* Gold tagline strip */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-foreground font-semibold text-center sm:text-left">
            A nonprofit art gallery in the heart of downtown Ukiah — free to visit, open to all.
          </p>
          <p className="text-foreground/70 text-sm shrink-0">Tue – Sat &nbsp;·&nbsp; 11 AM – 6 PM</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl text-foreground">What's Coming Up</h2>
            <Link href="/events" className="text-sm text-accent font-semibold hover:underline">
              See all events →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Link
                key={event.title}
                href={event.href}
                className="group block border-l-4 border-accent bg-background p-6 hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent text-foreground text-xs font-bold px-2 py-1 uppercase tracking-wide">
                    {event.date}
                  </span>
                  <span className="text-muted text-xs">{event.time}</span>
                </div>
                <h3 className="text-foreground font-sans font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{event.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About strip — warm, human */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 leading-snug">
              Art should be for&nbsp;everyone.<br />
              We really mean&nbsp;that.
            </h2>
            <p className="text-background/70 leading-relaxed mb-6">
              MEDIUM Art Center is a 501(c)(3) nonprofit in downtown Ukiah. We run
              free and low-cost exhibitions, workshops, and community events because
              we believe art makes life better — for all of us.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline"
            >
              Our story →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80"
              alt="People enjoying art at MEDIUM Art Center"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-4xl text-foreground mb-10">From the Blog</h2>
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
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{latestPost.date}</p>
            <h3 className="text-3xl text-foreground mb-4 leading-snug">{latestPost.title}</h3>
            <p className="text-muted leading-relaxed mb-6">{latestPost.excerpt}</p>
            <Link
              href={latestPost.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b-2 border-accent hover:text-accent transition-colors pb-0.5"
            >
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* Support + Newsletter — gold background */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Donate */}
            <div>
              <h2 className="text-4xl text-foreground mb-4">Keep the lights on.</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                We're community-funded and community-focused. Every donation — big or small —
                goes directly toward keeping art accessible in Mendocino County.
              </p>
              <Link
                href="/support/donate"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-foreground/80 transition-colors"
              >
                Make a Donation
              </Link>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-4xl text-foreground mb-4">Stay in the loop.</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Show openings, events, workshops, and community news — straight to your inbox.
                We don't spam. We barely email.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-background/80 text-foreground placeholder:text-muted text-sm focus:outline-none focus:bg-background border border-transparent focus:border-foreground/20"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background text-sm font-semibold hover:bg-foreground/80 transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-background border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-center text-muted text-xs uppercase tracking-widest mb-5">
            Proudly supported by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <span className="text-sm font-medium text-foreground/50">California Arts Council</span>
            <span className="text-sm font-medium text-foreground/50">Community Foundation of Mendocino County</span>
          </div>
        </div>
      </section>
    </>
  );
}
