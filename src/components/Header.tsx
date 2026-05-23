import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoBlue from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/university-pathways", label: "University Pathways" },
  { to: "/steam", label: "STEAM" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-24">
        <Link to="/" className="flex items-center">
          <img
            src={solid ? logoBlue : logoWhite}
            alt="Oxford Venture Inc."
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.slice(1, -1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-xs tracking-[0.18em] uppercase font-medium link-underline transition-colors ${
                solid ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/85 hover:text-primary-foreground"
              }`}
              activeProps={{ className: solid ? "text-primary" : "text-primary-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-[10px]">
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`lg:hidden p-2 ${solid ? "text-primary" : "text-primary-foreground"}`}
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-primary text-primary-foreground animate-fade-in">
          <div className="container-luxe flex items-center justify-between h-24">
            <img src={logoWhite} alt="Oxford Venture Inc." className="h-16 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X size={22} />
            </button>
          </div>
          <nav className="container-luxe flex flex-col gap-6 mt-12">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-8 btn-primary bg-gold border-gold text-gold-foreground">
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
