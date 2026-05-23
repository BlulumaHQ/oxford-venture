import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

import steamImg from "@/assets/steam.jpg";
import teacherImg from "@/assets/teacher-training.jpg";

export const Route = createFileRoute("/steam")({
  head: () => ({
    meta: [
      { title: "STEAM Programs — Oxford Venture Inc." },
      { name: "description", content: "Sophisticated STEAM programs for high school students — innovation, design thinking, leadership, and future-ready skills." },
      { property: "og:title", content: "STEAM Programs — Oxford Venture Inc." },
      { property: "og:description", content: "Modern STEAM education for ambitious students. Innovation, leadership, and future-ready skills." },
      { property: "og:image", content: steamImg },
    ],
  }),
  component: SteamPage,
});

const pillars = [
  { t: "Innovation", d: "A mindset of inquiry — challenging assumptions and asking better questions." },
  { t: "Creativity", d: "The freedom to imagine, the discipline to build, and the rigor to refine." },
  { t: "Leadership", d: "Quiet, principled leadership shaped through real responsibility and collaboration." },
  { t: "Problem Solving", d: "Structured frameworks for navigating complexity and ambiguity." },
  { t: "Future Skills", d: "Computational literacy, design fluency, and ethical reasoning for the work ahead." },
];

const offerings = [
  { eyebrow: "Summer Academies", t: "Summer STEAM Academies", d: "Two- and four-week residential and day programs combining design, engineering, and entrepreneurial thinking." },
  { eyebrow: "Winter Intensives", t: "Winter STEAM Intensives", d: "Focused short-form programs during the winter break — applied research, prototype, present." },
  { eyebrow: "Teacher Training", t: "Educator Training Programs", d: "Professional development for teachers integrating STEAM methodology into the B.C. curriculum." },
  { eyebrow: "Certification", t: "Canadian Certification Pathways", d: "Structured pathways for international educators seeking Canadian credentials and classroom-ready practice." },
];

function SteamPage() {
  return (
    <PageShell transparentHeader>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={steamImg} alt="Students working on a design project" className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary" />
        <div className="relative container-luxe pt-44 md:pt-52 pb-28 md:pb-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-primary-foreground/70 mb-6"><span className="gold-rule" />STEAM Programs</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-primary-foreground">
              Modern STEAM education for ambitious young minds.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Not coding camps. Not novelty workshops. A serious, design-led
              approach to the disciplines defining the next century — taught with
              the patience and rigor of true mentorship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What we cultivate"
            title="Five qualities that outlast any curriculum."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 60} className="bg-background p-8 md:p-10">
                <div className="text-gold text-xs tracking-[0.22em] uppercase">0{i + 1}</div>
                <h3 className="mt-5 font-display text-2xl text-primary">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Programs"
            title="Where students step into work that matters."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
            {offerings.map((o, i) => (
              <Reveal key={o.t} delay={(i % 2) * 80} className="bg-background border border-border p-8 md:p-10">
                <div className="eyebrow text-gold">{o.eyebrow}</div>
                <h3 className="mt-5 font-display text-3xl text-primary leading-tight">{o.t}</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">{o.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <img src={teacherImg} alt="Educator training" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="For educators"
              title="Training the teachers who shape the next generation."
              subtitle="Our teacher development programs equip educators with the methodology, curriculum fluency, and certification pathways to lead STEAM classrooms in Canada and abroad."
            />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
