import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Users, Compass, Globe2, BookOpen } from "lucide-react";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

import heroStudent from "@/assets/hero-student.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import steamImg from "@/assets/steam.jpg";
import universityImg from "@/assets/university.jpg";
import teacherImg from "@/assets/teacher-training.jpg";
import libraryImg from "@/assets/library.jpg";
import campusImg from "@/assets/campus.jpg";
import graduationImg from "@/assets/graduation.jpg";
import studyImg from "@/assets/study-session.jpg";
import summerWinterImg from "@/assets/summer-winter.jpg";
import pathwayImg from "@/assets/pathway.jpg";
import bgGeo1 from "@/assets/bg-geo-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oxford Venture Inc. — Authentic Canadian Educational Experiences" },
      {
        name: "description",
        content:
          "Oxford Venture Inc. connects global students, educators, school leaders, and educational organizations with authentic Canadian educational experiences across British Columbia.",
      },
      { property: "og:title", content: "Oxford Venture Inc. — International Education Organization" },
      {
        property: "og:description",
        content:
          "Student programs, educator training, leadership development, study tours, and international partnerships across British Columbia.",
      },
      { property: "og:image", content: heroStudent },
      { property: "twitter:image", content: heroStudent },
    ],
  }),
  component: HomePage,
});

const highlights = [
  "International Student Programs",
  "Teacher Professional Development",
  "Principal Leadership Training",
  "Educational Study Tours",
  "International Educator Exchanges",
  "School District Partnerships",
  "Cultural Immersion Experiences",
];

const programs = [
  {
    img: universityImg,
    icon: GraduationCap,
    eyebrow: "01 · Students",
    title: "International Student Programs",
    body: "A variety of student-focused educational experiences designed to help participants improve language skills, develop cultural understanding, and experience life within Canada's world-renowned education system.",
    items: [
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
    icon: BookOpen,
    eyebrow: "02 · Educators",
    title: "Teacher Professional Development",
    body: "Customized professional development programs designed for international educators seeking practical insights into British Columbia's education system and modern teaching practices.",
    items: [
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
    icon: Compass,
    eyebrow: "03 · Leadership",
    title: "Principal & School Leadership Development",
    body: "Leadership-focused programs for principals, vice principals, school administrators, and educational leaders interested in learning from Canadian educational leadership models.",
    items: [
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
    icon: Users,
    eyebrow: "04 · Delegations",
    title: "Educational Study Tours & Delegations",
    body: "Customized educational study tours and professional visits for schools, universities, educational organizations, and government agencies.",
    items: [
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
    icon: Globe2,
    eyebrow: "05 · Partnerships",
    title: "International Educator Exchange Programs",
    body: "Building long-term educational partnerships through meaningful international collaboration and cultural exchange.",
    items: [
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

const impactStats = [
  ["20+", "Years Experience"],
  ["1000s", "Participants Served"],
  ["Global", "Educational Partnerships"],
  ["Custom", "Program Design"],
];

const gallery = [
  { img: universityImg, label: "Student Programs", span: "lg:row-span-2 lg:col-span-2" },
  { img: teacherImg, label: "Teacher Training", span: "" },
  { img: mentorshipImg, label: "Principal Leadership Programs", span: "" },
  { img: campusImg, label: "Educational Delegations", span: "lg:col-span-2" },
  { img: graduationImg, label: "School District Partnerships", span: "" },
  { img: steamImg, label: "Cultural Exchange Activities", span: "" },
];

const testimonials = [
  {
    text: "The program gave me a real glimpse into Canadian classroom life — the host school, the teachers, and the students all made it unforgettable.",
    name: "International Student Participant",
    role: "Short-Term Study Program",
  },
  {
    text: "The professional development sessions reshaped how I approach inquiry-based learning in my own classroom back home.",
    name: "Visiting Teacher",
    role: "Teacher Professional Development",
  },
  {
    text: "Observing British Columbia school leadership in practice gave our delegation new frameworks we are now applying district-wide.",
    name: "Visiting Principal",
    role: "Principal Leadership Development",
  },
  {
    text: "Every visit, school meeting, and observation was thoughtfully arranged. A genuinely substantive professional study tour.",
    name: "Education Bureau Delegate",
    role: "Educational Study Tour",
  },
  {
    text: "Our school's partnership with Oxford Venture Inc. has opened doors for both our staff and students that we could not have imagined.",
    name: "School Administrator",
    role: "International School Partnership",
  },
  {
    text: "From curriculum framing to classroom strategies, the program offered the kind of depth our teaching team had been looking for.",
    name: "International Educator",
    role: "Educator Exchange Program",
  },
];

function HomePage() {
  return (
    <PageShell transparentHeader>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="container-luxe pt-36 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow text-primary-foreground/70 mb-6 animate-fade-up">
                <span className="gold-rule" />International Education · British Columbia
              </div>
              <h1 className="font-display text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] text-primary-foreground animate-fade-up delay-100">
                Connecting Global Students, Educators &amp; School Leaders with Authentic Canadian Educational Experiences
              </h1>
              <p className="mt-7 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed animate-fade-up delay-200">
                For more than two decades, Oxford Venture Inc. has created
                meaningful educational opportunities through student programs,
                educator training, leadership development, educational study
                tours, and international partnerships across British Columbia.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
                <Link to="/programs" className="btn-primary bg-gold border-gold text-gold-foreground">
                  Explore Our Programs
                </Link>
                <Link to="/contact" className="btn-ghost text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={heroStudent}
                  alt="Educators and students collaborating in a Canadian classroom"
                  width={1280}
                  height={1600}
                  className="w-full h-full object-cover animate-slow-zoom"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              </div>
              <div className="hidden md:block absolute -left-6 bottom-10 bg-background text-foreground p-6 max-w-[14rem] shadow-2xl animate-fade-up delay-300">
                <div className="font-display text-4xl text-primary">20+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  Years of international education in B.C.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE — Benjamin Franklin */}
      <section className="py-16 md:py-20 bg-muted/40 border-y border-border">
        <div className="container-luxe max-w-4xl text-center">
          <Reveal>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-primary leading-snug italic">
              "An investment in education always pays the best interest."
            </blockquote>
            <div className="mt-5 text-xs tracking-[0.2em] uppercase text-gold">
              — Benjamin Franklin
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 md:py-32 bg-background bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${bgGeo1})` }}>
        <div className="container-luxe">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Why Oxford Venture"
                title="More Than Student Recruitment"
              />
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="space-y-5 text-foreground/85 leading-relaxed text-[1.03rem]">
                  <p>
                    Oxford Venture Inc. provides educational experiences that
                    extend far beyond traditional student placement services.
                  </p>
                  <p>
                    We work with students, teachers, principals, educational
                    organizations, government agencies, and international
                    partners to create meaningful learning opportunities that
                    promote educational excellence, leadership development, and
                    global collaboration.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <SectionHeading
              eyebrow="Programs & Services"
              title="Five program areas serving global education."
              subtitle="From student programs to leadership development, every offering is customized to the participant, the institution, and the partnership."
            />
            <Link to="/programs" className="self-start lg:self-end inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary link-underline">
              View all programs <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-16 space-y-8 lg:space-y-10">
            {programs.map((p, i) => (
              <Reveal key={p.title}>
                <article className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-background border border-border ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                      <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                      <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-primary">
                        <p.icon size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-8 md:p-10 lg:py-12 lg:pr-12">
                    <div className="eyebrow text-gold">{p.eyebrow}</div>
                    <h3 className="mt-4 font-display text-3xl md:text-4xl text-primary leading-tight">{p.title}</h3>
                    <p className="mt-5 text-foreground/80 leading-relaxed">{p.body}</p>
                    <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/80">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <Link to="/programs" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary link-underline">
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={libraryImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/70" />
        <div className="relative container-luxe py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow text-primary-foreground/70 mb-5"><span className="gold-rule" />Our Impact</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-primary-foreground">
              Creating Educational Connections Across Borders
            </h2>
            <div className="mt-8 space-y-5 text-primary-foreground/80 leading-relaxed text-[1.03rem]">
              <p>
                For over twenty years, Oxford Venture Inc. has helped students,
                educators, school leaders, and educational organizations connect
                with authentic Canadian educational experiences.
              </p>
              <p>
                Through customized programs, professional development
                opportunities, leadership training, and international
                partnerships, we continue to build meaningful relationships
                that support educational excellence worldwide.
              </p>
            </div>

            <Reveal delay={200}>
              <blockquote className="mt-10 font-display text-xl md:text-2xl text-primary-foreground/90 leading-snug italic border-l-2 border-gold/60 pl-6">
                "Some people dream of success… while others wake up and work hard at it."
              </blockquote>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase text-primary-foreground/60 pl-6">
                — Mark Zuckerberg
              </div>
            </Reveal>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-primary-foreground/15">
            {impactStats.map(([n, l], i) => (
              <Reveal key={i} delay={i * 80} className="border-b lg:border-b-0 lg:border-r border-primary-foreground/15 last:border-r-0 px-2 py-8">
                <div className="font-display text-4xl md:text-5xl text-primary-foreground">{n}</div>
                <div className="mt-2 text-xs tracking-[0.18em] uppercase text-primary-foreground/70">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Program Highlights"
            title="Inside Oxford Venture programs."
            subtitle="A visual record of student programs, educator training, leadership development, school district partnerships, and cultural exchange activities across British Columbia."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 lg:auto-rows-[260px]">
            {gallery.map((g, i) => (
              <Reveal key={g.label} delay={(i % 4) * 80} className={`group relative overflow-hidden ${g.span}`}>
                <div className="relative w-full h-full min-h-[260px]">
                  <img src={g.img} alt={g.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-primary-foreground/70">Program Highlight</div>
                    <div className="font-display text-xl md:text-2xl mt-2 leading-tight">{g.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What Participants Say"
            title="Voices from students, educators, and school leaders."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 80} className="bg-background p-8 md:p-10">
                <div className="text-gold font-display text-4xl leading-none">"</div>
                <p className="mt-3 text-foreground/85 leading-relaxed text-[0.98rem]">
                  {t.text}
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="font-medium text-primary text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground tracking-wide mt-1">{t.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
