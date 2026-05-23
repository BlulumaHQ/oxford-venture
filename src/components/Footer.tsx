import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxe py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src={logoWhite} alt="Oxford Venture Inc." className="h-20 md:h-24 w-auto mb-6" />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed text-sm">
              Personalized academic mentorship, university pathway planning, and
              STEAM enrichment for ambitious students and the families who believe in them.
            </p>
            <Link to="/contact" className="inline-block mt-8 btn-primary bg-gold border-gold text-gold-foreground hover:opacity-90">
              Book a Consultation
            </Link>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow text-primary-foreground/60 mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              {[
                ["/programs", "Programs"],
                ["/university-pathways", "University Pathways"],
                ["/steam", "STEAM Programs"],
                ["/about", "About"],
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

          <div className="lg:col-span-4">
            <div className="eyebrow text-primary-foreground/60 mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold" />
                <a href="tel:+17788896469" className="link-underline">+1 (778) 889-6469</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold" />
                <a href="mailto:hello@oxfordventure.com" className="link-underline">hello@oxfordventure.com</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                   className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:border-gold hover:text-gold transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/55 tracking-wider">
          <span>© 2026 Oxford Venture Inc. All rights reserved.</span>
          <span>Vancouver, British Columbia · Canada</span>
        </div>
      </div>
    </footer>
  );
}
