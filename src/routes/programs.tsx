import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

import universityImg from "@/assets/university.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import steamImg from "@/assets/steam.jpg";
import teacherImg from "@/assets/teacher-training.jpg";
import libraryImg from "@/assets/library.jpg";
import bgGeo1 from "@/assets/bg-geo-1.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Oxford Venture Inc." },
      { name: "description", content: "University guidance, academic mentorship, STEAM programs, teacher training, and seasonal enrichment programs designed for ambitious students." },
      { property: "og:title", content: "Programs — Oxford Venture Inc." },
      { property: "og:description", content: "Personalized programs across mentorship, university planning, STEAM, and teacher certification." },
      { property: "og:image", content: universityImg },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    img: universityImg,
    eyebrow: "01 · Pathways",
    title: "University Guidance",
    body: "End-to-end planning for Canadian, U.S., and U.K. university admissions. We work with students from early high school through final decisions, building thoughtful applications that reflect who they truly are.",
    points: ["Personalized university list", "Academic and extracurricular strategy", "Essay & personal statement coaching", "Interview preparation"],
  },
  {
    img: mentorshipImg,
    eyebrow: "02 · Mentorship",
    title: "Academic Mentorship & Tutoring",
    body: "One-on-one mentorship that goes beyond marks. Our educators help students develop study habits, intellectual curiosity, and the confidence to lead their own learning.",
    points: ["Subject-specific tutoring", "Study skills and time management", "Confidence & self-direction", "Long-term mentorship relationships"],
  },
  {
    img: steamImg,
    eyebrow: "03 · Enrichment",
    title: "STEAM Programs",
    body: "Sophisticated STEAM programming designed to cultivate innovation, design thinking, and collaborative problem-solving — preparing students for the disciplines shaping the next century.",
    points: ["Design and engineering studios", "Research-led inquiry", "Cross-disciplinary projects", "Leadership through innovation"],
  },
  {
    img: teacherImg,
    eyebrow: "04 · Training",
    title: "Teacher Training & Certification",
    body: "Professional development for educators seeking to deepen their STEAM teaching practice and integrate Canadian curriculum standards.",
    points: ["STEAM teaching methodology", "B.C. curriculum integration", "Educational leadership", "Canadian certification pathways"],
  },
  {
    img: libraryImg,
    eyebrow: "05 · Seasonal",
    title: "Summer & Winter Programs",
    body: "Immersive short-term programs that combine academic enrichment with cultural exposure, leadership development, and meaningful peer connection.",
    points: ["Summer academies", "Winter intensives", "Canadian education pathways", "International student programs"],
  },
];

function ProgramsPage() {
  return (
    <PageShell>
      <section className="pt-36 md:pt-44 pb-16 bg-background">
        <div className="container-luxe">
          <Reveal>
            <div className="eyebrow"><span className="gold-rule" />Our programs</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-primary">
              Programs designed around the student, not the system.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Every Oxford Venture program is built on the same belief — that
              meaningful mentorship, personalized to the student, produces
              lasting academic and personal growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-background bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${bgGeo1})` }}>
        <div className="container-luxe space-y-24 md:space-y-32">
          {programs.map((p, i) => (
            <Reveal key={p.title}>
              <article className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="eyebrow"><span className="gold-rule" />{p.eyebrow}</div>
                  <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">{p.title}</h2>
                  <p className="mt-6 text-foreground/80 leading-relaxed">{p.body}</p>
                  <ul className="mt-8 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary link-underline">
                    Inquire about this program <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
