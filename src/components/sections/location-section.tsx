"use client";

import { MapPin, PhoneCall } from "lucide-react";
import { useTranslation } from "@/components/providers/locale-provider";
import {
  BrandDivider,
  CornerRivets,
  Reveal,
  RustDivider,
} from "@/components/decorative/decorative";

interface Branch {
  label: string;
  name: string;
  address: string;
  note?: string;
  phone: string;
  tel?: string;
}

interface HoursRow {
  day: string;
  window: string;
}

export function LocationSection() {
  const { t, messages } = useTranslation();
  const branches = (messages.location.branches ?? []) as Branch[];
  const hours = (messages.location.hours ?? []) as HoursRow[];

  return (
    <section id="location" className="relative bg-background px-5 py-20 md:px-12 md:py-28">
      <Reveal as="header" className="mx-auto max-w-6xl text-center">
        <div className="text-[11px] font-medium uppercase tracking-[.4em] text-primary">
          {t("location.eyebrow")}
        </div>
        <h2
          className="text-grad-on-paper mt-4 font-black uppercase leading-[.95] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
        >
          {t("location.title")}
        </h2>
        <RustDivider className="mx-auto mt-5" style={{ maxWidth: "280px" }} />
        <p
          className="mx-auto mt-5 max-w-xl font-serif italic text-muted-foreground"
          style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}
        >
          {t("location.subtitle")}
        </p>
      </Reveal>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-6 md:mt-16 md:gap-8">
        {branches.map((branch) => (
          <Reveal as="article" key={branch.label} className="paper-card relative w-full max-w-md rounded-md p-6">
            <CornerRivets inset={8} />
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="flex-1">
                <div className="text-[10px] font-medium uppercase tracking-[.3em] text-primary">
                  {branch.label}
                </div>
                <h3
                  className="text-grad-on-paper mt-1 font-bold uppercase tracking-[.04em]"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
                >
                  {branch.name}
                </h3>
              </div>
            </div>
            <RustDivider className="my-4" />
            <p className="whitespace-pre-line text-[14px] leading-relaxed text-foreground/85">
              {branch.address}
              {branch.note && (
                <>
                  {"\n"}
                  <span className="text-[13px] italic text-muted-foreground">{branch.note}</span>
                </>
              )}
            </p>
            <a
              href={`tel:${branch.tel ?? branch.phone.replace(/[^\d+]/g, "")}`}
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold tabular-nums text-primary transition-colors hover:text-rust-deep dark:hover:text-brass-pale"
            >
              <PhoneCall className="h-4 w-4" />
              {branch.phone}
            </a>
          </Reveal>
        ))}
      </div>

      {/* Hours timetable */}
      <Reveal className="signboard relative mx-auto mt-12 max-w-5xl p-8 md:mt-16 md:p-10">
        <CornerRivets />
        <div className="signboard-inner grid items-start gap-8 md:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="text-grad-accent mb-2 text-[10px] font-medium uppercase tracking-[.4em]">
              {t("location.departureBoard")}
            </div>
            <h3
              className="text-primary box-shadow font-black uppercase leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {t("location.hoursTitle")}
            </h3>
            <BrandDivider className="mt-5" style={{ maxWidth: "220px" }} />

            <div className="mt-7 grid grid-cols-1 gap-4">
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[.32em] text-primary">
                  {t("location.hotline")}
                </div>
                <a
                  href={`tel:${t("location.hotlineTel")}`}
                  className="text-grad-accent font-bold tabular-nums"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
                >
                  {t("location.hotlineDisplay")}
                </a>
              </div>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[.32em] text-primary">
                  {t("location.emailLabel")}
                </div>
                <a
                  href={`mailto:${t("location.email")}`}
                  className="text-[14px] text-quartz hover:text-primary"
                >
                  {t("location.email")}
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 border-b border-brass/30 pb-2 text-[11px] font-medium uppercase tracking-[.22em] text-primary">
              <span>{t("location.colDay")}</span>
              <span className="text-right">{t("location.colWindow")}</span>
            </div>
            {hours.map((row) => (
              <div className="timetable-row" key={row.day}>
                <span>{row.day}</span>
                <span className="dep">{row.window}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
