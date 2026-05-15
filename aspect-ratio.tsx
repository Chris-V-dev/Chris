import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl">Carpenter's Daughter</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A small, lovingly curated home goods shop in downtown Watertown — restored
            furniture, locally made decor, and pieces with a story.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</h4>
          <p>113 Lewis Ave S</p>
          <p>Watertown, MN 55388</p>
          <a href="tel:9526839565" className="mt-2 inline-block hover:underline">
            (952) 683-9565
          </a>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Hours</h4>
          <p>Wed – Fri · 10 AM – 5 PM</p>
          <p>Saturday · 10 AM – 4 PM</p>
          <p className="text-muted-foreground">Closed Sun – Tue</p>
          <div className="mt-4 flex gap-4 text-xs">
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/visit" className="hover:underline">Visit</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Carpenter's Daughter</span>
          <span>Made with care in Watertown, MN</span>
        </div>
      </div>
    </footer>
  );
}
