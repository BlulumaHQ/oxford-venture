import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, GraduationCap, Sparkles, Users, Play } from "lucide-react";
import { PageShell, ConsultationCTA } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

import heroStudent from "@/assets/hero-student.jpg";
import founderImg from "@/assets/founder.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import steamImg from "@/assets/steam.jpg";
import universityImg from "@/assets/university.jpg";
import teacherImg from "@/assets/teacher-training.jpg";
import libraryImg from "@/assets/library.jpg";
import bgGeo1 from "@/assets/bg-geo-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oxford Venture Inc. — Premium Academic Mentorship & University Pathways" },
      { name: "description", content: "Personalized academic mentorship, university pathway planning, tutoring, and STEAM programs designed to help students discover their strengths and achieve long-term success." },
      { property: "og:title", content: "Oxford Venture Inc. — Premium Academic Mentorship" },
      { property: "og:description", content: "Personalized mentorship and university guidance designed around your child's future." },
      { property: "og:image", content: heroStudent },
      { property: "twitter:image", content: heroStudent },
    ],
  }),
  component: HomePage,
});

const stats = [
  ["35+", "Years Experience"],
  ["50+", "Expert Educators"],
  ["B.C.", "Education Expertise"],
  ["3", "Countries · CA · US · UK"],
];

const trustCards = [
  { n: "01", t: "35+ Years of Educational Experience", d: "Trusted academic mentorship rooted in decades of experience within the Canadian education system." },
  { n: "02", t: "Personalized Learning Pathways", d: "Every student receives customized guidance designed around their goals, strengths, and future aspirations." },
  { n: "03", t: "University Admission Support", d: "Comprehensive planning and support for Canadian, U.S., and U.K. university applications." },
  { n: "04", t: "Confidence & Leadership Development", d: "Helping students grow into independent thinkers, strong communicators, and future leaders." },
];

const journey = [
  ["01", "Consultation & Assessment", "An in-depth conversation to understand the student and family vision."],
  ["02", "Academic Goal Planning", "Clear, structured goals that align with the student's strengths and ambitions."],
  ["03", "Personalized Learning Strategy", "A customized roadmap of subjects, mentors, and milestones."],
  ["04", "Tutoring & Skill Development", "One-on-one mentorship that builds confidence and academic depth."],
  ["05", "University Preparation", "Application strategy, essays, and personal profile development."],
  ["06", "Future Success", "A student ready for university, leadership, and lifelong opportunity."],
];

const programs = [
  { img: universityImg, icon: GraduationCap, title: "University Application Support",
    items: ["Academic planning", "Application strategy", "Personal profile development", "Essay support"] },
  { img: mentorshipImg, icon: Users, title: "Academic Mentorship & Tutoring",
    items: ["Personalized tutoring", "Study habits", "Subject support", "Confidence building"] },
  { img: steamImg, icon: Sparkles, title: "STEAM Programs & Camps",
    items: ["Innovation mindset", "Creative problem solving", "Team collaboration", "Hands-on learning"] },
  { img: teacherImg, icon: Compass, title: "Teacher Training & Certification",
    items: ["STEAM teaching methods", "B.C. curriculum integration", "Educational leadership", "Canadian certification pathways"] },
];

const testimonials = [
  { name: "Helen W.", role: "Parent of Grade 11 student", text: "Within a few months, our daughter went from anxious about university to having a clear plan she's genuinely excited about. Katherine's guidance has been transformative." },
  { name: "Daniel C.", role: "Parent of Grade 12 student", text: "What we appreciate most is how personal it feels. Every recommendation is built around our son, not a template. He's now studying at his first-choice university." },
  { name: "Sophia L.", role: "Student, Oxford Venture alumna", text: "I came in unsure of what I wanted. The mentorship helped me find my voice and apply to schools I never thought possible. I was accepted at three of them." },
  { name: "Mr. & Mrs. Tan", role: "Parents", text: "As an immigrant family, navigating the university system felt overwhelming. Oxford Venture gave us clarity, structure, and a sense of confidence we didn't have before." },
  { name: "Priya R.", role: "Parent of Grade 10 student", text: "The mentors don't just tutor — they truly care. Our son's grades improved, but more importantly, his self-belief did." },
  { name: "James K.", role: "Student, accepted to UBC", text: "Katherine helped me write essays that actually sounded like me. The whole process felt thoughtful and never rushed." },
];

function HomePage() {
  return (
    <PageShell transparentHeader>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="container-luxe pt-36 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow text-primary-foreground/70 mb-6 animate-fade-up">
                <span className="gold-rule" />Oxford Venture · Est. mentorship
              </div>
              <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] text-primary-foreground animate-fade-up delay-100">
                Helping students build a future beyond the classroom.
              </h1>
              <p className="mt-7 text-lg md:text-xl text-primary-foreground/75 max-w-xl leading-relaxed animate-fade-up delay-200">
                Personalized academic planning, university guidance, tutoring,
                and STEAM-based programs designed to help students discover
                their strengths and achieve long-term success.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
                <Link to="/contact" className="btn-primary bg-gold border-gold text-gold-foreground">
                  Book a Consultation
                </Link>
                <Link to="/programs" className="btn-ghost text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                  Explore Programs
                </Link>
              </div>
              <p className="mt-8 text-sm text-primary-foreground/60 max-w-md leading-relaxed animate-fade-up delay-400">
                Trusted by families seeking academic excellence and future
                opportunities in Canada, the U.S., and the U.K.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={heroStudent}
                  alt="Student studying in warm golden light"
                  width={1280}
                  height={1600}
                  className="w-full h-full object-cover animate-slow-zoom"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              </div>
              {/* floating stat card */}
              <div className="hidden md:block absolute -left-6 bottom-10 bg-background text-foreground p-6 max-w-[14rem] shadow-2xl animate-fade-up delay-300">
                <div className="font-display text-4xl text-primary">35+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  Years of mentorship in B.C. education
                </div>
              </div>
              <div className="hidden md:flex absolute -right-4 top-12 items-center gap-3 bg-gold text-gold-foreground px-5 py-3 animate-fade-up delay-400">
                <Sparkles size={14} />
                <span className="text-[10px] tracking-[0.22em] uppercase">University Pathway Guidance</span>
              </div>
            </div>
          </div>

          {/* stats bar */}
          <div className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 border-t border-primary-foreground/15">
            {stats.map(([n, l], i) => (
              <Reveal key={i} delay={i * 80} className="border-b lg:border-b-0 lg:border-r border-primary-foreground/15 last:border-r-0 px-2 py-7">
                <div className="font-display text-3xl md:text-4xl text-primary-foreground">{n}</div>
                <div className="mt-2 text-xs tracking-[0.18em] uppercase text-primary-foreground/60">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 md:py-32 bg-background bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${bgGeo1})` }}>
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Why families choose us"
            title="A trusted partner in your child's academic future."
            subtitle="We help students gain clarity, confidence, and direction through personalized educational mentorship."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {trustCards.map((c, i) => (
              <Reveal key={c.n} delay={i * 80} className="bg-background p-8 md:p-10 group hover:bg-muted/40 transition-colors duration-500">
                <div className="font-display text-gold text-2xl">{c.n}</div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-primary">{c.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The student journey"
            title="A personalized journey toward academic success."
            subtitle="Every Oxford Venture student follows a thoughtfully orchestrated pathway — from first conversation to university and beyond."
          />
          <div className="mt-20 relative">
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-border" />
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
              {journey.map(([n, t, d], i) => (
                <Reveal key={n} delay={i * 80} as="li" className="relative">
                  <div className="relative w-14 h-14 rounded-full bg-background border border-gold flex items-center justify-center font-display text-gold text-lg">
                    {n}
                  </div>
                  <h4 className="font-display text-xl text-primary mt-6 leading-tight">{t}</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <SectionHeading
              eyebrow="Featured programs"
              title="Programs designed for long-term growth."
              subtitle="From university preparation to STEAM enrichment, our programs help students build confidence, academic strength, and future opportunities."
            />
            <Link to="/programs" className="self-start lg:self-end inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary link-underline">
              View all programs <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 100} className="group">
                <article className="bg-background">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy"
                         className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
                    <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-primary">
                      <p.icon size={18} />
                    </div>
                  </div>
                  <div className="pt-7">
                    <h3 className="font-display text-3xl text-primary leading-tight">{p.title}</h3>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="text-gold mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary link-underline">
                      Learn more <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={founderImg} alt="Katherine Chiang Martin, Founder of Oxford Venture Inc."
                   loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block absolute -right-4 -bottom-6 bg-gold text-gold-foreground p-5 max-w-[12rem]">
              <div className="text-[10px] tracking-[0.22em] uppercase">Founder</div>
              <div className="font-display text-lg leading-tight mt-1">Katherine Chiang Martin</div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="eyebrow mb-5"><span className="gold-rule" />Founder Story</div>
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.08] text-primary">
                Meet Katherine Chiang Martin.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-3 text-sm uppercase tracking-[0.2em] text-gold">
                Senior Education Consultant &amp; Founder
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 space-y-5 text-foreground/85 leading-relaxed text-[1.03rem]">
                <p>
                  With over 35 years of experience in the B.C. education industry,
                  Katherine Chiang Martin has dedicated her career to helping students
                  discover their strengths, develop confidence, and pursue meaningful
                  academic futures.
                </p>
                <p>
                  Through personalized mentorship, academic planning, and university
                  guidance, she has helped students successfully transition into
                  respected universities across Canada, the United States, and the
                  United Kingdom.
                </p>
                <p>
                  Oxford Venture Inc. was built on the belief that every student
                  deserves guidance, encouragement, and the opportunity to reach
                  their full potential.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl md:text-3xl text-primary italic leading-snug">
                "Every student deserves the opportunity to discover their strengths
                and build a future they can be proud of."
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow="In conversation"
            title="Hear Katherine's educational philosophy."
            subtitle="Learn more about Oxford Venture's vision for student growth, confidence, and academic success."
          />
          <Reveal delay={200}>
            <a
              href="https://youtu.be/ydSyb9lYRWE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-14 block relative aspect-[16/9] overflow-hidden group"
            >
              <img src={libraryImg} alt="Cinematic library scene" loading="lazy"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/55 group-hover:bg-primary/45 transition-colors duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/95 text-gold-foreground flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Play size={28} className="ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/70">Watch · 4 min</div>
                <div className="font-display text-2xl md:text-3xl mt-2 text-primary-foreground">A Philosophy of Mentorship</div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Voices of families"
            title="Stories that speak to confidence, clarity, and direction."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80} className="bg-background p-8 md:p-10">
                <div className="text-gold font-display text-4xl leading-none">"</div>
                <p className="mt-3 text-foreground/85 leading-relaxed text-[0.98rem]">
                  {t.text}
                </p>
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-display flex items-center justify-center text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-primary text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground tracking-wide">{t.role}</div>
                  </div>
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
