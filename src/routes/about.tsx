import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

import founderImg from "@/assets/founder.jpg";
import graduationImg from "@/assets/graduation.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import bgGeo2 from "@/assets/bg-geo-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Oxford Venture Inc." },
      {
        name: "description",
        content:
          "Oxford Venture Inc. connects students, educators, school leaders, and educational organizations with the British Columbia education system through international partnerships, professional development, and customized programs.",
      },
      { property: "og:title", content: "About — Oxford Venture Inc." },
      {
        property: "og:description",
        content:
          "An international education organization building lasting partnerships across British Columbia for more than two decades.",
      },
      { property: "og:image", content: founderImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Institution-focused", "We work alongside schools, districts, universities, and government agencies — not around them."],
  ["Educational excellence", "Programs grounded in the standards and practices of the British Columbia education system."],
  ["Long-term partnerships", "Relationships measured in years and cohorts, not single transactions."],
  ["Global collaboration", "Cross-cultural learning is the method and the outcome of everything we do."],
];

function AboutPage() {
  return (
    <PageShell transparentHeader>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={graduationImg} alt="International educators and students at a Canadian school" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary" />
        <div className="relative container-luxe pt-44 md:pt-52 pb-28 md:pb-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-primary-foreground/70 mb-6"><span className="gold-rule" />About Oxford Venture Inc.</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-primary-foreground">
              An international education organization rooted in British Columbia.
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
              <div className="text-xs uppercase tracking-[0.2em] text-gold mt-1">Founder · Oxford Venture Inc.</div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-16">
            <div>
              <div className="eyebrow"><span className="gold-rule" />Who we are</div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">About Oxford Venture Inc.</h2>
              <div className="mt-7 space-y-5 text-foreground/85 leading-relaxed text-[1.03rem]">
                <p>
                  Oxford Venture Inc. is dedicated to creating meaningful
                  educational experiences that connect students, educators,
                  school leaders, and educational organizations with the
                  British Columbia education system.
                </p>
                <p>
                  Through international partnerships, educational exchange
                  programs, professional development initiatives, leadership
                  training, and customized educational experiences, Oxford
                  Venture Inc. promotes lifelong learning, global citizenship,
                  and educational excellence.
                </p>
                <p>
                  For more than two decades, we have worked with schools,
                  school districts, educational institutions, government
                  agencies, and international partners to build lasting
                  educational relationships that create positive outcomes for
                  participants around the world.
                </p>
              </div>
            </div>

            <div>
              <div className="eyebrow"><span className="gold-rule" />Our approach</div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-primary leading-tight">
                Partnership is the method. Educational excellence is the outcome.
              </h2>
              <p className="mt-6 text-foreground/85 leading-relaxed">
                We believe meaningful international education depends on
                genuine institutional partnerships — between schools, between
                educators, between leaders, and between cultures. Our role is
                to design and steward those relationships with care.
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
            <img src={mentorshipImg} alt="Educators in a professional development workshop" loading="lazy" className="w-full aspect-[16/7] object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <blockquote className="mt-12 max-w-3xl mx-auto text-center font-display text-3xl md:text-4xl text-primary leading-snug italic">
              "Authentic educational experiences are built on partnership — between students, educators, schools, and the communities that host them."
            </blockquote>
            <div className="text-center mt-6 text-xs tracking-[0.2em] uppercase text-gold">
              — Oxford Venture Inc.
            </div>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
