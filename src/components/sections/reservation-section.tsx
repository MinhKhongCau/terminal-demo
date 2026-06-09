"use client";

import { useState } from "react";
import { Ticket } from "lucide-react";
import { useTranslation } from "@/components/providers/locale-provider";
import { Reveal, RustDivider } from "@/components/decorative/decorative";

const MAP_WATERMARK =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600' fill='none' stroke='%237B3F00' stroke-width='.6'><path d='M40 520 C 200 480 280 380 380 360 S 540 300 640 280 S 820 220 900 180 1100 120 1180 60'/><path d='M60 440 C 220 420 320 360 460 320 S 700 240 880 220 1120 200 1180 160'/><circle cx='380' cy='360' r='3' fill='%237B3F00'/><circle cx='620' cy='280' r='3' fill='%237B3F00'/></svg>\")";

export function ReservationSection() {
  const { t, messages } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const partySizes = (messages.reservation.partySizes ?? []) as string[];
  const branchOptions = (messages.reservation.branchOptions ?? []) as string[];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-background-deep px-5 py-20 md:px-12 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{ backgroundImage: MAP_WATERMARK, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal as="header" className="text-center">
          <div className="text-[11px] font-medium uppercase tracking-[.4em] text-accent">
            {t("reservation.eyebrow")}
          </div>
          <h2
            className="text-grad-on-paper mt-4 font-black uppercase leading-[.95] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
          >
            {t("reservation.title")}
          </h2>
          <RustDivider className="mx-auto mt-5" style={{ maxWidth: "280px" }} />
          <p
            className="mx-auto mt-5 max-w-xl font-serif italic text-muted-foreground"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}
          >
            {t("reservation.subtitle")}
          </p>
        </Reveal>

        <Reveal className="paper-card relative mt-12 rounded-md p-6 md:p-10">
          <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-dashed border-accent bg-background-deep" />
          <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-dashed border-accent bg-background-deep" />

          <div
            className="absolute right-4 top-4 hidden h-20 w-20 -rotate-[14deg] place-items-center rounded-full border-2 border-dashed border-accent md:right-6 md:top-6 md:grid"
            style={{ background: "radial-gradient(circle, rgba(207,169,63,.16), transparent 70%)" }}
          >
            <div className="text-center leading-tight">
              <div className="text-[9px] font-bold uppercase tracking-[.2em] text-accent">
                {t("reservation.stampTop")}
              </div>
              <div className="text-2xl font-black leading-none text-accent">09</div>
              <div className="text-[8px] font-bold uppercase tracking-[.2em] text-accent">
                {t("reservation.stampBottom")}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="field md:col-span-2">
              <label className="field-label" htmlFor="f-name">
                {t("reservation.name")}
              </label>
              <input id="f-name" type="text" placeholder={t("reservation.namePlaceholder")} required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="f-phone">
                {t("reservation.phone")}
              </label>
              <input id="f-phone" type="tel" placeholder={t("reservation.phonePlaceholder")} required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="f-email">
                {t("reservation.email")}
              </label>
              <input id="f-email" type="email" placeholder={t("reservation.emailPlaceholder")} />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="f-date">
                {t("reservation.date")}
              </label>
              <input id="f-date" type="date" required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="f-time">
                {t("reservation.time")}
              </label>
              <input id="f-time" type="time" defaultValue="19:00" required />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="f-guests">
                {t("reservation.party")}
              </label>
              <select id="f-guests">
                {partySizes.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="field-label" htmlFor="f-branch">
                {t("reservation.branch")}
              </label>
              <select id="f-branch">
                {branchOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="field md:col-span-2">
              <label className="field-label" htmlFor="f-notes">
                {t("reservation.notes")}
              </label>
              <input id="f-notes" type="text" placeholder={t("reservation.notesPlaceholder")} />
            </div>

            <div className="mt-2 flex flex-col items-start justify-between gap-5 md:col-span-2 sm:flex-row sm:items-center">
              <div className="text-[12px] font-medium uppercase leading-tight tracking-[.18em] text-accent">
                {t("reservation.terms")}
              </div>
              <button type="submit" className="btn-brass min-w-[220px] px-10 py-4 text-[12px]">
                <Ticket className="mr-3 h-4 w-4" />
                {t("reservation.submit")}
              </button>
            </div>

            {submitted && (
              <div
                className="mt-4 border-2 border-dashed border-accent p-4 font-medium text-rust-deep dark:text-brass-light md:col-span-2"
                style={{ background: "rgba(255, 233, 163, .18)" }}
                role="status"
              >
                {t("reservation.success")}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
