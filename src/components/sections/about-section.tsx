"use client";

import Image from "next/image";
import { useTranslation } from "@/components/providers/locale-provider";
import { Reveal, RustDivider } from "@/components/decorative/decorative";

const MAP_WATERMARK =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600' fill='none' stroke='%237B3F00' stroke-width='.6'><path d='M40 520 C 200 480 280 380 380 360 S 540 300 640 280 S 820 220 900 180 1100 120 1180 60'/><path d='M60 440 C 220 420 320 360 460 320 S 700 240 880 220 1120 200 1180 160'/><circle cx='380' cy='360' r='3' fill='%237B3F00'/><circle cx='620' cy='280' r='3' fill='%237B3F00'/></svg>\")";

interface Stat {
  value: string;
  label: string;
}

export function AboutSection() {
  const { t, messages } = useTranslation();
  const stats = (messages.about.stats ?? []) as Stat[];

  return (
    <section id="about" className="relative bg-background px-5 py-20 md:px-12 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundImage: MAP_WATERMARK, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — tilted brass-framed photograph */}
        <Reveal className="relative" >
          <div className="rusted-frame" style={{ transform: "rotate(-1.6deg)" }}>
            <div className="relative h-[440px] w-full overflow-hidden md:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
                alt={t("about.imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                style={{ filter: "sepia(.55) saturate(.9) contrast(1.05) brightness(.92)" }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,.55)" }}
              />
            </div>
          </div>
        </Reveal>

        {/* RIGHT — story */}
        <Reveal>
          <div className="text-[11px] font-medium uppercase tracking-[.4em] text-primary">
            {t("about.eyebrow")}
          </div>

          <h2
            className="text-grad-on-paper mt-4 font-black uppercase leading-[.95] tracking-[.02em]"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
          >
            {t("about.title")}
          </h2>

          <RustDivider className="mt-6" style={{ maxWidth: "220px" }} />

          <div
            className="mt-7 space-y-5 leading-relaxed text-foreground/85"
            style={{ fontSize: "clamp(.95rem, 1.1vw, 1.05rem)" }}
          >
            <p>{t("about.body1")}</p>
            <p>{t("about.body2")}</p>
          </div>

          <figure className="mt-8 border-l-2 border-accent pl-5">
            <blockquote
              className="font-serif italic leading-snug text-rust-deep dark:text-primary"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.25rem)" }}
            >
              {t("about.quote")}
            </blockquote>
            <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[.32em] text-primary">
              {t("about.quoteAuthor")}
            </figcaption>
          </figure>

          <div className="mt-9 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="paper-card rounded-md px-3 py-4 text-center">
                <div
                  className="text-grad-on-paper font-black leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[.24em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
