import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Phone, Mail, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oxford Venture Inc." },
      { name: "description", content: "Book a personalized consultation with Oxford Venture. Phone, email, and contact form for academic mentorship and university planning inquiries." },
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
                  <Mail size={18} className="text-gold mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                    <a href="mailto:info@educationbc.ca" className="font-display text-2xl text-primary link-underline">info@educationbc.ca</a>
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

      <section className="py-24 md:py-32 bg-muted/40">
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
