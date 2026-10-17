import { Slot as RadixSlot } from "@radix-ui/react-slot";
import React from "react";

export const Slot = RadixSlot;

export type WithAsChild<T> = T & { asChild?: boolean };
