import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <div className={`eyebrow mb-5 ${invert ? "text-primary-foreground/70" : ""}`}>
            <span className="gold-rule" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={`font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] ${invert ? "text-primary-foreground" : "text-primary"}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={180}>
          <p className={`mt-6 text-base md:text-lg leading-relaxed ${invert ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
