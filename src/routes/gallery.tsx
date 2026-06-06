import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

const allPhotos = [
  { src: "/gallery/oxford-education-019.webp", caption: "Welcoming international students to Canada" },
  { src: "/gallery/steam-teacher-027.webp", caption: "Teacher professional development workshop" },
  { src: "/gallery/senior-principal-training.webp", caption: "Senior principal leadership training" },
  { src: "/gallery/steam-principal-002.webp", caption: "Certificate ceremony — Maple Ridge–Pitt Meadows School District 42" },
  { src: "/gallery/steam-principal-001.webp", caption: "Principal collaborative design challenge" },
  { src: "/gallery/steam-teacher-031.webp", caption: "International educators in session" },
  { src: "/gallery/steam-teacher-033.webp", caption: "Collaborative speaking-frame practice" },
  { src: "/gallery/steam-principal-003.webp", caption: "Hands-on workshop activity" },
  { src: "/gallery/oxford-education-012.webp", caption: "Summer student program — community outing" },
  { src: "/gallery/oxford-education-004.webp", caption: "Educators connecting across cultures" },
  { src: "/gallery/steam-teacher-program-028.webp", caption: "Mentorship moment with a student teacher" },
  { src: "/gallery/steam-teacher-program-029.webp", caption: "Student artwork display — winter night studies" },
  { src: "/gallery/steam-teacher-program-030.webp", caption: "Why does STEAM education matter?" },
  { src: "/gallery/steam-teacher-program-032.webp", caption: "Adding more S.T.E.A.M. to teaching" },
  { src: "/gallery/steam-teacher-program-034.webp", caption: "Student chalk art — Aurora Borealis" },
  { src: "/gallery/steam-principal-program-004.webp", caption: "Principal team-building challenge" },
  { src: "/gallery/oxford-education-024.webp", caption: "Summer beach day with student program" },
  { src: "/gallery/oxford-education-025.webp", caption: "Engineering & robotics learning lab" },
  { src: "/gallery/oxford-education-026.webp", caption: "Evening cultural program by the water" },
  { src: "/gallery/oxford-education-027.webp", caption: "Campfire moments — Canadian outdoor experience" },
  { src: "/gallery/oxford-education-011.webp", caption: "Canada Day celebration with students" },
  { src: "/gallery/oxford-education-013.webp", caption: "Guided forest walk — BC nature program" },
  { src: "/gallery/oxford-education-016.webp", caption: "International students bonding on program" },
  { src: "/gallery/oxford-education-017.webp", caption: "Exploring downtown Vancouver in winter" },
  { src: "/gallery/oxford-education-018.webp", caption: "Students relaxing between activities" },
  { src: "/gallery/oxford-education-020.webp", caption: "Evening outing in downtown Vancouver" },
  { src: "/gallery/oxford-education-021.webp", caption: "Student group at Gastown steam clock" },
  { src: "/gallery/oxford-education-022.webp", caption: "STEAM engineering build challenge" },
  { src: "/gallery/oxford-education-023.webp", caption: "Summer fair excursion with students" },
  { src: "/gallery/oxford-education-028.webp", caption: "Summer camp in Canada — chalkboard welcome" },
  { src: "/gallery/oxford-education-001.webp", caption: "Chinese principal delegation visit — BCIT" },
  { src: "/gallery/oxford-education-002.webp", caption: "Thank-you moment with a partner educator" },
  { src: "/gallery/oxford-education-003.webp", caption: "Educator gathering — Mission Springs" },
  { src: "/gallery/oxford-education-005.webp", caption: "Art, Music & Education Community Event — O.V.I." },
  { src: "/gallery/oxford-education-006.webp", caption: "Celebration treats at a community event" },
  { src: "/gallery/oxford-education-009.webp", caption: "O.V.I. consultancy showcase — academic guidance & STEAM" },
  { src: "/gallery/oxford-education-010.webp", caption: "Bouquet of thanks from program partners" },
  { src: "/gallery/oxford-education-014.webp", caption: "Salmon hatchery field study with students" },
];


function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Oxford Venture Inc." },
      {
        name: "description",
        content:
          "Photo gallery of Oxford Venture Inc. programs — student exchanges, teacher professional development, and principal leadership training across British Columbia.",
      },
      { property: "og:title", content: "Gallery — Oxford Venture Inc." },
      {
        property: "og:description",
        content:
          "Moments from two decades of student programs, teacher PD, and leadership training in British Columbia.",
      },
      { property: "og:image", content: "/gallery/senior-principal-training.webp" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const photos = useMemo(() => shuffle(allPhotos), []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [openIndex, close, prev, next]);

  return (
    <PageShell>
      <section className="pt-36 md:pt-44 pb-16 bg-background">
        <div className="container-luxe">
          <Reveal>
            <div className="eyebrow">
              <span className="gold-rule" />
              Gallery
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-primary">
              Moments from two decades of programs.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Students, educators, and school leaders across British Columbia — a
              glimpse into the work and partnerships Oxford Venture Inc. has
              built over the years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-background">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {photos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 4) * 60}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative block w-full aspect-square overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label={`Open photo: ${p.caption}`}
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} />
          </button>
          <figure
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[openIndex].src}
              alt={photos[openIndex].caption}
              className="max-h-[80vh] w-auto max-w-full object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80 tracking-wide">
              {photos[openIndex].caption}
              <span className="ml-3 text-white/40">
                {openIndex + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </PageShell>
  );
}
