import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Phone, MapPin, Check } from "lucide-react";
import bgGeo2 from "@/assets/bg-geo-2.jpg";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oxford Venture Inc." },
      { name: "description", content: "Book a personalized consultation with Oxford Venture. Phone and contact form for academic mentorship and university planning inquiries." },
      { property: "og:title", content: "Contact — Oxford Venture Inc." },
      { property: "og:description", content: "Book a personalized consultation with Oxford Venture." },
    ],
  }),
  component: ContactPage,
});


const faqs = [
  ["When is the right time to start university planning?",
   "We often recommend beginning in Grade 9 or 10, though we work with students at every stage. Earlier planning creates more room for thoughtful exploration and authentic application narratives."],
  ["Do you work with international students?",
   "Yes. We work with families based in Canada and internationally, including those preparing students for the Canadian education system."],
  ["What does a typical engagement look like?",
   "Engagements are personalized. Some families work with us intensively over a single year; others build a multi-year mentorship relationship from early high school through university admission."],
  ["Is the first consultation paid?",
   "The initial consultation is complimentary. It is a conversation — for us to understand your child's goals, and for you to understand whether we are the right fit."],
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="pt-36 md:pt-44 pb-16 bg-background">
        <div className="container-luxe">
          <Reveal>
            <div className="eyebrow"><span className="gold-rule" />Contact</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-primary">
              Begin with a conversation.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Tell us about your child. We'll respond personally within two
              business days to arrange a complimentary consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-background">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-muted/40 p-8 md:p-12 border border-border space-y-6"
            >
              {sent ? (
                <Reveal>
                  <div className="text-center py-10">
                    <div className="mx-auto w-14 h-14 rounded-full bg-gold text-gold-foreground flex items-center justify-center">
                      <Check size={20} />
                    </div>
                    <h3 className="mt-6 font-display text-3xl text-primary">Thank you.</h3>
                    <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                      Katherine will personally review your inquiry and respond within two business days.
                    </p>
                  </div>
                </Reveal>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Parent Name" name="parentName" required />
                    <Field label="Student Name" name="studentName" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Student Grade" name="grade" placeholder="e.g. Grade 10" />
                    <Field label="Phone Number" name="phone" type="tel" />
                  </div>
                  <Field label="Email Address" name="email" type="email" required />
                  <Field label="Academic Goals" name="goals" placeholder="University, subject focus, areas to develop…" />
                  <div>
                    <label className="eyebrow block mb-3">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Tell us a little about your child and what you hope they'll achieve."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Request Consultation
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-10">
            <div>
              <div className="eyebrow mb-5"><span className="gold-rule" />Direct Contact</div>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Phone size={18} className="text-gold mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</div>
                    <a href="tel:+17788896469" className="font-display text-2xl text-primary link-underline">+1 (778) 889-6469</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <WhatsAppIcon size={18} className="text-gold mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</div>
                    <a href="https://wa.me/17788896469" target="_blank" rel="noopener noreferrer" className="font-display text-2xl text-primary link-underline">+1 (778) 889-6469</a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-gold mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Location</div>
                    <div className="font-display text-2xl text-primary">Vancouver, British Columbia</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-8">
              <div className="eyebrow mb-3"><span className="gold-rule" />Hours</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Monday — Friday · 9:00 to 18:00<br />
                Saturday · By appointment
              </p>
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Oxford Venture Vancouver"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-123.2247%2C49.2200%2C-123.0500%2C49.3000&layer=mapnik"
                className="w-full h-full grayscale contrast-110"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-muted/40 border-y border-border">
        <div className="container-luxe max-w-4xl text-center">
          <Reveal>
            <blockquote className="font-display text-2xl md:text-3xl text-primary leading-snug italic">
              "An investment in education always pays the best interest."
            </blockquote>
            <div className="mt-5 text-xs tracking-[0.2em] uppercase text-gold">
              — Benjamin Franklin
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${bgGeo2})` }}>
        <div className="container-luxe">
          <SectionHeading eyebrow="Frequently asked" title="Questions families often ask." />
          <div className="mt-14 max-w-3xl divide-y divide-border border-y border-border">
            {faqs.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60}>
                <details className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-display text-xl md:text-2xl text-primary pr-8">{q}</span>
                    <span className="text-gold text-2xl font-display transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">{label}{required && <span className="text-gold ml-1">*</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
