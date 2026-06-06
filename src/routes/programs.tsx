import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

import bgGeo1 from "@/assets/bg-geo-1.jpg";
import bgGeoCorner from "@/assets/bg-geo-corner.jpg";
const universityImg = "/gallery/oxford-education-019.webp";
const teacherImg = "/gallery/steam-teacher-027.webp";
const mentorshipImg = "/gallery/senior-principal-training.webp";
const campusImg = "/gallery/steam-principal-002.webp";
const steamImg = "/gallery/steam-principal-001.webp";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Services — Oxford Venture Inc." },
      {
        name: "description",
        content:
          "International student programs, teacher professional development, principal leadership training, educational study tours, and international educator exchange programs across British Columbia.",
      },
      { property: "og:title", content: "Programs & Services — Oxford Venture Inc." },
      {
        property: "og:description",
        content:
          "Five program areas connecting global students, educators, school leaders, and organizations with Canadian educational experiences.",
      },
      { property: "og:image", content: universityImg },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    img: universityImg,
    eyebrow: "01 · Students",
    title: "International Student Programs",
    body: "Oxford Venture Inc. offers a variety of student-focused educational experiences designed to help participants improve language skills, develop cultural understanding, and experience life within Canada's world-renowned education system.",
    points: [
      "Short-Term Study Programs",
      "Summer Programs",
      "Winter Programs",
      "School Integration Programs",
      "Homestay Placement",
      "Cultural Activities",
      "Airport Reception",
      "Student Support Services",
    ],
  },
  {
    img: teacherImg,
    eyebrow: "02 · Educators",
    title: "Teacher Professional Development",
    body: "Customized professional development programs designed for international educators seeking practical insights into British Columbia's education system and modern teaching practices.",
    points: [
      "Classroom Observation",
      "Inquiry-Based Learning",
      "BC Curriculum Framework",
      "Assessment & Evaluation",
      "Classroom Management",
      "Inclusive Education",
      "STEAM Education",
      "Educational Technology Integration",
    ],
  },
  {
    img: mentorshipImg,
    eyebrow: "03 · Leadership",
    title: "Principal & School Leadership Development",
    body: "Leadership-focused programs for principals, vice principals, school administrators, and educational leaders interested in learning from Canadian educational leadership models.",
    points: [
      "Educational Leadership",
      "Strategic Planning",
      "School Improvement Initiatives",
      "Staff Development",
      "Student Success Strategies",
      "Change Management",
      "Innovation in Education",
      "District Leadership Models",
    ],
  },
  {
    img: campusImg,
    eyebrow: "04 · Delegations",
    title: "Educational Study Tours & Delegations",
    body: "Oxford Venture Inc. organizes customized educational study tours and professional visits for schools, universities, educational organizations, and government agencies.",
    points: [
      "School Visits",
      "School District Visits",
      "University Visits",
      "Educational Conferences",
      "Professional Networking",
      "Classroom Observation",
      "Best Practice Sharing",
      "Customized Educational Itineraries",
    ],
  },
  {
    img: steamImg,
    eyebrow: "05 · Partnerships",
    title: "International Educator Exchange Programs",
    body: "Building long-term educational partnerships through meaningful international collaboration and cultural exchange.",
    points: [
      "Cross-Cultural Learning",
      "School Partnerships",
      "Academic Collaboration",
      "Joint Educational Projects",
      "International Networking",
      "Educational Research Opportunities",
      "Professional Exchange Experiences",
    ],
  },
];

function ProgramsPage() {
  return (
    <PageShell>
      <section className="pt-36 md:pt-44 pb-16 bg-background">
        <div className="container-luxe">
          <Reveal>
            <div className="eyebrow">
              <span className="gold-rule" />
              Programs & Services
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-primary">
              Five program areas serving global education.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Oxford Venture Inc. designs and delivers programs for students,
              educators, school leaders, and educational organizations seeking
              authentic Canadian educational experiences in British Columbia.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-24 md:py-32 bg-background bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${bgGeo1})` }}
      >
        <img
          src={bgGeoCorner}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-[42%] max-w-[560px] opacity-90 select-none"
        />
        <div className="container-luxe space-y-24 md:space-y-32">
          {programs.map((p, i) => (
            <Reveal key={p.title}>
              <article
                className={`relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="eyebrow">
                    <span className="gold-rule" />
                    {p.eyebrow}
                  </div>
                  <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">
                    {p.title}
                  </h2>
                  <p className="mt-6 text-foreground/80 leading-relaxed">{p.body}</p>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary link-underline"
                  >
                    Learn More <ArrowRight size={12} />
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
