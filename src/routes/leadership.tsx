import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

import bgGeo2 from "@/assets/bg-geo-2.jpg";
import teacher031 from "@/assets/gallery/steam-teacher-031.webp.asset.json";
import teacher027 from "@/assets/gallery/steam-teacher-027.webp.asset.json";
import teacher033 from "@/assets/gallery/steam-teacher-033.webp.asset.json";
import seniorPrincipal from "@/assets/gallery/senior-principal-training.webp.asset.json";
import principal001 from "@/assets/gallery/steam-principal-001.webp.asset.json";
import principal002 from "@/assets/gallery/steam-principal-002.webp.asset.json";
import principal003 from "@/assets/gallery/steam-principal-003.webp.asset.json";
import oxford004 from "@/assets/gallery/oxford-education-004.webp.asset.json";
import oxford012 from "@/assets/gallery/oxford-education-012.webp.asset.json";
import oxford019 from "@/assets/gallery/oxford-education-019.webp.asset.json";

const teacherImg = teacher031.url;
const mentorshipImg = seniorPrincipal.url;
const campusImg = principal002.url;
const steamImg = principal003.url;
const universityImg = oxford004.url;
const graduationImg = teacher027.url;
// secondary tour images
const tourSchoolImg = teacher033.url;
const tourDelegationImg = principal001.url;
const tourExchangeImg = oxford019.url;
const tourStudyImg = oxford012.url;

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Educational Leadership Programs — Oxford Venture Inc." },
      {
        name: "description",
        content:
          "Teacher professional development, principal leadership training, school administration programs, district leadership, educational study tours, and professional exchange programs.",
      },
      { property: "og:title", content: "Educational Leadership Programs — Oxford Venture Inc." },
      {
        property: "og:description",
        content:
          "Professional programs for educators, principals, school administrators, and district leaders across British Columbia.",
      },
      { property: "og:image", content: mentorshipImg },
    ],
  }),
  component: LeadershipPage,
});

const professional = [
  {
    img: teacherImg,
    title: "Teacher Professional Development",
    body: "Customized professional learning for international educators — practical insights into modern Canadian teaching, classroom observation, and reflective practice.",
  },
  {
    img: mentorshipImg,
    title: "Principal Leadership Development",
    body: "Leadership programs for principals and vice principals studying Canadian school leadership models, instructional leadership, and improvement planning.",
  },
  {
    img: campusImg,
    title: "School Administration Training",
    body: "Operational and academic leadership development for school administrators — staffing, scheduling, student services, and school culture.",
  },
  {
    img: steamImg,
    title: "Educational Innovation",
    body: "Workshops and applied programs in inquiry-based learning, STEAM integration, assessment innovation, and educational technology.",
  },
  {
    img: universityImg,
    title: "District Leadership Programs",
    body: "Strategic programs for district-level leaders — policy frameworks, system improvement, and large-scale change management in B.C. school districts.",
  },
];

const tours = [
  {
    img: campusImg,
    title: "Educational Study Tours",
    body: "Customized professional visits combining classroom observation, leader briefings, university stops, and cultural programming across British Columbia.",
  },
  {
    img: universityImg,
    title: "School Visits",
    body: "Structured visits to public and independent schools, including classroom observation and meetings with teaching staff and administration.",
  },
  {
    img: graduationImg,
    title: "District Visits",
    body: "Meetings with school district leadership and international education offices to understand B.C.'s system, governance, and partnership models.",
  },
  {
    img: mentorshipImg,
    title: "Customized Delegations",
    body: "Delegation programs designed for ministries, bureaus, foundations, and educational organizations — tailored agendas and logistical support end-to-end.",
  },
  {
    img: steamImg,
    title: "Professional Exchange Programs",
    body: "Two-way professional exchanges that pair international educators and leaders with B.C. partner institutions for sustained collaboration.",
  },
];

function LeadershipPage() {
  return (
    <PageShell transparentHeader>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={mentorshipImg} alt="Educational leaders in a workshop" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary" />
        <div className="relative container-luxe pt-44 md:pt-52 pb-28 md:pb-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-primary-foreground/70 mb-6"><span className="gold-rule" />Educational Leadership Programs</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-primary-foreground">
              Programs for the educators and leaders shaping schools.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Professional development, leadership training, and educational
              study programs for teachers, principals, school administrators,
              and district leaders — designed around the British Columbia
              education system.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${bgGeo2})` }}>
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Professional Programs"
            title="Building capability across every level of school leadership."
            subtitle="From classroom teaching to district strategy, our professional programs are customized to the institution and the educational goals it is working toward."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {professional.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80} className="bg-background overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-7 md:p-8 flex-1">
                  <h3 className="font-display text-2xl text-primary leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Study Tours & Exchange"
            title="Educational visits, delegations, and professional exchange."
            subtitle="Structured itineraries for schools, districts, universities, ministries, and educational organizations visiting British Columbia."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {tours.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 80} className="bg-background overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-7 md:p-8 flex-1">
                  <h3 className="font-display text-2xl text-primary leading-tight">{t.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">
              Request a Custom Program <ArrowRight size={14} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
