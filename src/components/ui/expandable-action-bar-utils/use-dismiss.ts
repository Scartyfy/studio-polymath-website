import { RefObject, useEffect } from "react";

export function useDismiss(
  enabled: boolean,
  onDismiss: () => void,
  ref: RefObject<HTMLElement | null>,
  options?: { behavior?: "consume" }
) {
  useEffect(() => {
    if (!enabled) return;
    const listener = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (options?.behavior === "consume") {
          e.preventDefault();
          e.stopPropagation();
        }
        onDismiss();
      }
    };
    document.addEventListener("pointerdown", listener, { capture: true });
    return () => document.removeEventListener("pointerdown", listener, { capture: true });
  }, [enabled, onDismiss, ref, options?.behavior]);
}
