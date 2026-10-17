import { PointerEvent } from "react";

export function useHoverGesture() {
  return {
    enter: (e: PointerEvent<any>) => e.pointerType === "mouse",
    leave: (e: PointerEvent<any>) => e.pointerType === "mouse"
  };
}
