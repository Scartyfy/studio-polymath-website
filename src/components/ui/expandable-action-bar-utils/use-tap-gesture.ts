import { PointerEvent, useRef } from "react";

export function useTapGesture<T>() {
  const state = useRef<{ pointerType: string, state: T | null } | null>(null);
  return {
    start: (e: PointerEvent<any>, initialState: T) => {
      state.current = { pointerType: e.pointerType, state: initialState };
    },
    drop: () => {
      state.current = null;
    },
    take: () => {
      const current = state.current;
      state.current = null;
      return current;
    }
  };
}
