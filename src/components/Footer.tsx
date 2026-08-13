import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

function WhatsAppIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}


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
                <WhatsAppIcon size={14} className="text-gold" />
                <a href="https://wa.me/17788896469" target="_blank" rel="noopener noreferrer" className="link-underline">+1 (778) 889-6469</a>
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

