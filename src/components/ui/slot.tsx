import { cloneElement, forwardRef, isValidElement } from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal Slot: merges its own props/className onto a single child element.
 * Used by <Button asChild> so a CTA can render as an <a> while keeping styles.
 */
export const Slot = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, className, ...props }, ref) => {
    if (!isValidElement(children)) return null;

    const child = children as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
    >;

    return cloneElement(child, {
      ...props,
      ...child.props,
      ref,
      className: cn(className, child.props.className),
    });
  },
);

Slot.displayName = "Slot";
