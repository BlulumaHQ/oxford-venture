import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/Shared";
import { Reveal } from "@/components/Reveal";

import img1 from "@/assets/gallery/oxford-education-019.webp.asset.json";
import img2 from "@/assets/gallery/steam-teacher-027.webp.asset.json";
import img3 from "@/assets/gallery/senior-principal-training.webp.asset.json";
import img4 from "@/assets/gallery/steam-principal-002.webp.asset.json";
import img5 from "@/assets/gallery/steam-principal-001.webp.asset.json";
import img6 from "@/assets/gallery/steam-teacher-031.webp.asset.json";
import img7 from "@/assets/gallery/steam-teacher-033.webp.asset.json";
import img8 from "@/assets/gallery/steam-principal-003.webp.asset.json";
import img9 from "@/assets/gallery/oxford-education-012.webp.asset.json";
import img10 from "@/assets/gallery/oxford-education-004.webp.asset.json";
import img11 from "@/assets/gallery/steam-teacher-program-028.webp.asset.json";
import img12 from "@/assets/gallery/steam-teacher-program-029.webp.asset.json";
import img13 from "@/assets/gallery/steam-teacher-program-030.webp.asset.json";
import img14 from "@/assets/gallery/steam-teacher-program-032.webp.asset.json";
import img15 from "@/assets/gallery/steam-teacher-program-034.webp.asset.json";
import img16 from "@/assets/gallery/steam-principal-program-004.webp.asset.json";
import img17 from "@/assets/gallery/oxford-education024.webp.asset.json";
import img18 from "@/assets/gallery/oxford-education025.webp.asset.json";
import img19 from "@/assets/gallery/oxford-education026.webp.asset.json";
import img20 from "@/assets/gallery/oxford-education027.webp.asset.json";
import img21 from "@/assets/gallery/oxford-education-011.webp.asset.json";
import img22 from "@/assets/gallery/oxford-education-013.webp.asset.json";
import img23 from "@/assets/gallery/oxford-education-016.webp.asset.json";
import img24 from "@/assets/gallery/oxford-education-017.webp.asset.json";
import img25 from "@/assets/gallery/oxford-education-018.webp.asset.json";
import img26 from "@/assets/gallery/oxford-education-020.webp.asset.json";
import img27 from "@/assets/gallery/oxford-education-021.webp.asset.json";
import img28 from "@/assets/gallery/oxford-education-022.webp.asset.json";
import img29 from "@/assets/gallery/oxford-education-023.webp.asset.json";
import img30 from "@/assets/gallery/oxford-education-028.webp.asset.json";
import img31 from "@/assets/gallery/oxford-education-001.webp.asset.json";
import img32 from "@/assets/gallery/oxford-education-002.webp.asset.json";
import img33 from "@/assets/gallery/oxford-education-003.webp.asset.json";
import img34 from "@/assets/gallery/oxford-education-005.webp.asset.json";
import img35 from "@/assets/gallery/oxford-education-006.webp.asset.json";
import img36 from "@/assets/gallery/oxford-education-009.webp.asset.json";
import img37 from "@/assets/gallery/oxford-education-010.webp.asset.json";
import img38 from "@/assets/gallery/oxford-education-014.webp.asset.json";

const allPhotos = [
  { src: img1.url, caption: "Welcoming international students to Canada" },
  { src: img2.url, caption: "Teacher professional development workshop" },
  { src: img3.url, caption: "Senior principal leadership training" },
  { src: img4.url, caption: "Certificate ceremony — Maple Ridge–Pitt Meadows School District 42" },
  { src: img5.url, caption: "Principal collaborative design challenge" },
  { src: img6.url, caption: "International educators in session" },
  { src: img7.url, caption: "Collaborative speaking-frame practice" },
  { src: img8.url, caption: "Hands-on workshop activity" },
  { src: img9.url, caption: "Summer student program — community outing" },
  { src: img10.url, caption: "Educators connecting across cultures" },
  { src: img11.url, caption: "Mentorship moment with a student teacher" },
  { src: img12.url, caption: "Student artwork display — winter night studies" },
  { src: img13.url, caption: "Why does STEAM education matter?" },
  { src: img14.url, caption: "Adding more S.T.E.A.M. to teaching" },
  { src: img15.url, caption: "Student chalk art — Aurora Borealis" },
  { src: img16.url, caption: "Principal team-building challenge" },
  { src: img17.url, caption: "Summer beach day with student program" },
  { src: img18.url, caption: "Engineering & robotics learning lab" },
  { src: img19.url, caption: "Evening cultural program by the water" },
  { src: img20.url, caption: "Campfire moments — Canadian outdoor experience" },
  { src: img21.url, caption: "Canada Day celebration with students" },
  { src: img22.url, caption: "Guided forest walk — BC nature program" },
  { src: img23.url, caption: "International students bonding on program" },
  { src: img24.url, caption: "Exploring downtown Vancouver in winter" },
  { src: img25.url, caption: "Students relaxing between activities" },
  { src: img26.url, caption: "Evening outing in downtown Vancouver" },
  { src: img27.url, caption: "Student group at Gastown steam clock" },
  { src: img28.url, caption: "STEAM engineering build challenge" },
  { src: img29.url, caption: "Summer fair excursion with students" },
  { src: img30.url, caption: "Summer camp in Canada — chalkboard welcome" },
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
      { property: "og:image", content: img3.url },
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
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    []
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
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
