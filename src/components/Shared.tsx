import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import campus from "@/assets/campus.jpg";

export function ConsultationCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={campus}
        alt="Historic ivy-covered university campus at golden hour"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
      <div className="relative container-luxe py-28 md:py-40 text-primary-foreground">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow text-primary-foreground/70 mb-5">
              <span className="gold-rule" />Begin the conversation
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-primary-foreground">
              Let's build a stronger future, together.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Book a personalized consultation and discover how Oxford Venture
              can support your child's academic journey and long-term goals.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary bg-gold border-gold text-gold-foreground">
                Schedule a Consultation
              </Link>
              <Link to="/contact" className="btn-ghost text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PageShell({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export { SectionHeading, Reveal };
