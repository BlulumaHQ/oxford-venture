import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

import campusImg from "@/assets/campus.jpg";
import universityImg from "@/assets/university.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";

export const Route = createFileRoute("/university-pathways")({
  head: () => ({
    meta: [
      { title: "University Pathways — Oxford Venture Inc." },
      { name: "description", content: "Personalized university pathway planning for Canadian, U.S., and U.K. admissions. Early strategy, thoughtful application, lasting confidence." },
      { property: "og:title", content: "University Pathways — Oxford Venture Inc." },
      { property: "og:description", content: "Personalized university pathway planning for Canadian, U.S., and U.K. admissions." },
      { property: "og:image", content: campusImg },
    ],
  }),
  component: UniversityPathwaysPage,
});

const pillars = [
  { n: "I", t: "Why early planning matters", d: "University admission is shaped over years, not months. Beginning early creates space for academic depth, meaningful extracurriculars, and reflection — the foundations of a strong, authentic application." },
  { n: "II", t: "Personalized pathway strategy", d: "Every student receives a tailored academic and admissions roadmap aligned with their strengths, interests, and the universities they aspire to attend." },
  { n: "III", t: "Canadian · U.S. · U.K. guidance", d: "We navigate the distinct expectations of each system — from Canadian transcripts and U.S. holistic review to U.K. UCAS personal statements." },
  { n: "IV", t: "Application preparation", d: "Comprehensive support across essays, personal profiles, interviews, and supplementary materials, refined through expert review." },
  { n: "V", t: "Academic confidence", d: "Beyond strategy, we cultivate the self-belief, study habits, and intellectual curiosity students need to thrive at university and beyond." },
  { n: "VI", t: "Future readiness", d: "We prepare students not just for admission, but for the responsibility and opportunity that follows — independent thinkers ready for the world." },
];

const regions = [
  ["Canada", "UBC · McGill · U of T · Queen's · Waterloo · SFU"],
  ["United States", "Ivy League · Top liberal arts · Research universities"],
  ["United Kingdom", "Oxford · Cambridge · LSE · Imperial · UCL"],
];

function UniversityPathwaysPage() {
  return (
    <PageShell transparentHeader>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={campusImg} alt="University campus at golden hour" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary" />
        <div className="relative container-luxe pt-44 md:pt-52 pb-28 md:pb-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-primary-foreground/70 mb-6"><span className="gold-rule" />University Pathways</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-primary-foreground">
              A thoughtful path to the universities that fit your child best.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              We help families plan early, choose wisely, and apply with
              confidence — across Canada, the United States, and the United Kingdom.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our approach"
            title="Six pillars of a meaningful university pathway."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 80} className="bg-background p-8 md:p-10">
                <div className="font-display text-gold text-3xl">{p.n}</div>
                <h3 className="mt-5 font-display text-2xl text-primary leading-tight">{p.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <img src={universityImg} alt="Student reviewing applications" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Regions we guide"
              title="Three systems. One personalized strategy."
              subtitle="Each country values different qualities — academic rigor, extracurricular leadership, intellectual focus. We help families understand what each university truly looks for."
            />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {regions.map(([r, schools]) => (
                <li key={r} className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                  <div className="font-display text-2xl text-primary min-w-[10rem]">{r}</div>
                  <div className="text-sm text-muted-foreground">{schools}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionHeading
              eyebrow="For parents"
              title="What it feels like to have a plan."
              subtitle="The difference is calm. The difference is clarity. Knowing that a trusted mentor is walking beside your child means the years ahead become possibility rather than uncertainty."
            />
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl text-primary italic leading-snug">
              "Our daughter knows where she's going — and more importantly, why."
            </blockquote>
          </div>
          <Reveal className="lg:col-span-6 order-1 lg:order-2">
            <img src={mentorshipImg} alt="Mentorship session" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
