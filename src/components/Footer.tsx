import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxe py-8 md:py-14">
        <div className="grid gap-8 md:gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <img src={logoWhite} alt="Oxford Venture Inc." className="h-12 md:h-20 w-auto mb-3 md:mb-4" />
            <p className="hidden md:block text-primary-foreground/70 max-w-md leading-relaxed text-sm">
              Connecting global students, educators, and school leaders with authentic Canadian educational experiences across British Columbia.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-primary-foreground/60 mb-3 md:mb-4">Explore</div>
            <ul className="grid grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-1.5 md:gap-y-2 text-sm">
              {[
                ["/programs", "Programs"],
                ["/leadership", "Leadership"],
                ["/about", "About"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-primary-foreground/80 hover:text-gold transition-colors link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-primary-foreground/60 mb-3 md:mb-4">Contact</div>
            <ul className="space-y-1.5 md:space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold" />
                <a href="tel:+17788896469" className="link-underline">+1 (778) 889-6469</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold" />
                <a href="mailto:info@oxfordventure.ca" className="link-underline">info@oxfordventure.ca</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-3 md:mt-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                   className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:border-gold hover:text-gold transition-colors">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-10 pt-4 md:pt-5 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-1.5 md:gap-2 text-[11px] md:text-xs text-primary-foreground/55 tracking-wider">
          <span>© 2026 Oxford Venture Inc. All rights reserved.</span>
          <span className="flex flex-col md:flex-row gap-1 md:gap-4">
            <span>Vancouver, British Columbia · Canada</span>
            <span>
              Web Design by{" "}
              <a
                href="https://Bluluma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors link-underline"
              >
                Bluluma.com
              </a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
