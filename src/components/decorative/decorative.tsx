"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/** Four brass rivets pinned to the corners of a relatively-positioned box. */
export function CornerRivets({ inset = 10 }: { inset?: number }) {
  const positions = [
    { top: inset, left: inset },
    { top: inset, right: inset },
    { bottom: inset, left: inset },
    { bottom: inset, right: inset },
  ];
  return (
    <>
      {positions.map((style, i) => (
        <span key={i} className="rivet" style={style} aria-hidden />
      ))}
    </>
  );
}

/** Drifting steam puffs for the hero. */
export function SteamField() {
  const puffs = [
    { left: "8%", delay: "0s" },
    { left: "32%", delay: "-2s" },
    { left: "68%", delay: "-4s" },
    { left: "88%", delay: "-1s" },
  ];
  return (
    <>
      {puffs.map((p, i) => (
        <span
          key={i}
          className="steam"
          style={{ left: p.left, animationDelay: p.delay }}
          aria-hidden
        />
      ))}
    </>
  );
}

/** Brass gradient divider. */
export function BrandDivider({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return <div className={cn("brand-divider", className)} style={style} aria-hidden />;
}

/** Thinner rust divider for paper surfaces. */
export function RustDivider({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn("brand-divider-rust", className)} style={style} aria-hidden />
  );
}

/** Horizontal hairline with a fading gradient — used to flank section labels. */
export function HairLine({ direction }: { direction: "left" | "right" }) {
  const background =
    direction === "left"
      ? "linear-gradient(90deg, transparent, #c88d2b 70%, #ffe9a3)"
      : "linear-gradient(90deg, #ffe9a3, #c88d2b 30%, transparent)";
  return <span className="h-px w-10 md:w-16" style={{ background }} aria-hidden />;
}

/** Wraps children with the scroll-reveal animation. */
export function Reveal({
  children,
  className,
  delay,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "in", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
