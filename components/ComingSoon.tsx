import Link from "next/link";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">Coming Soon</p>
      <h1 className="text-4xl text-foreground mb-4">{title}</h1>
      <p className="text-muted max-w-md mx-auto mb-8">
        This page is being built. Check back soon.
      </p>
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
