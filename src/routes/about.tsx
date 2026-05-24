import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

import founderImg from "@/assets/founder.jpg";
import graduationImg from "@/assets/graduation.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import bgGeo2 from "@/assets/bg-geo-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Oxford Venture Inc." },
      { name: "description", content: "Founded by Katherine Chiang Martin — 35+ years of mentorship within the B.C. education system. Personalized academic guidance for ambitious students." },
      { property: "og:title", content: "About — Oxford Venture Inc." },
      { property: "og:description", content: "Founded by Katherine Chiang Martin. 35+ years of academic mentorship in British Columbia." },
      { property: "og:image", content: founderImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Student-centered", "Every plan begins and ends with the student — never a template."],
  ["Quiet excellence", "We measure success in confidence, character, and lasting capability."],
  ["Long-term mentorship", "Relationships built over years, not transactions counted in sessions."],
  ["Cultural understanding", "Deep familiarity with the families and communities we serve."],
];

function AboutPage() {
  return (
    <PageShell transparentHeader>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={graduationImg} alt="Students celebrating graduation, throwing caps into the sky" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary" />
        <div className="relative container-luxe pt-44 md:pt-52 pb-28 md:pb-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-primary-foreground/70 mb-6"><span className="gold-rule" />About Oxford Venture</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-primary-foreground">
              Built on the belief that every student has a future worth shaping.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${bgGeo2})` }}>
        <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <img src={founderImg} alt="Katherine Chiang Martin, Founder" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="mt-6">
              <div className="font-display text-2xl text-primary">Katherine Chiang Martin</div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold mt-1">Founder · Senior Education Consultant</div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-16">
            <div>
              <div className="eyebrow"><span className="gold-rule" />Founder Story</div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">A career devoted to students.</h2>
              <div className="mt-7 space-y-5 text-foreground/85 leading-relaxed text-[1.03rem]">
                <p>
                  Over more than 35 years in the British Columbia education
                  industry, Katherine Chiang Martin has worked alongside
                  thousands of students and families — guiding them through
                  the critical years when academic decisions shape the rest of
                  a young person's life.
                </p>
                <p>
                  Her practice is built on patience, listening, and the
                  conviction that no two students should ever receive the same
                  plan. The students she has mentored have gone on to study at
                  respected universities across Canada, the United States, and
                  the United Kingdom — but more importantly, they have gone on
                  to lead lives of purpose.
                </p>
                <p>
                  Oxford Venture Inc. is the culmination of that work: a
                  boutique mentorship practice for families who want more than
                  tutoring, more than a checklist, more than a service.
                </p>
              </div>
            </div>

            <div>
              <div className="eyebrow"><span className="gold-rule" />Educational philosophy</div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-primary leading-tight">
                Mentorship is the work. Everything else is the method.
              </h2>
              <p className="mt-6 text-foreground/85 leading-relaxed">
                We believe academic excellence follows from confidence, and
                confidence follows from being truly seen. Our role is to know
                each student well enough to help them know themselves.
              </p>
            </div>

            <div>
              <div className="eyebrow"><span className="gold-rule" />Our values</div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-primary leading-tight">What guides our practice.</h2>
              <ul className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
                {values.map(([t, d]) => (
                  <li key={t} className="bg-background p-7">
                    <div className="font-display text-xl text-primary">{t}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe">
          <Reveal>
            <img src={mentorshipImg} alt="Mentorship in practice" loading="lazy" className="w-full aspect-[16/7] object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <blockquote className="mt-12 max-w-3xl mx-auto text-center font-display text-3xl md:text-4xl text-primary leading-snug italic">
              "Every student deserves the opportunity to discover their strengths and build a future they can be proud of."
            </blockquote>
            <div className="text-center mt-6 text-xs tracking-[0.2em] uppercase text-gold">
              — Katherine Chiang Martin
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
