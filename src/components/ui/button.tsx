import { forwardRef } from "react";
import { Slot } from "./slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "brass" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as the single child element (e.g. an anchor) instead of <button>. */
  asChild?: boolean;
}

const VARIANTS: Record<ButtonVariant, string> = {
  brass: "btn-brass",
  outline: "btn-brass-outline",
  ghost:
    "inline-flex items-center justify-center font-display uppercase tracking-[.22em] text-primary hover:text-brass-pale transition-colors",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-3.5 text-[12px]",
  lg: "px-9 py-4 text-[12px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "brass", size = "md", asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(VARIANTS[variant], SIZES[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
