import { writable, type Writable } from "svelte/store";

// PATCH
export const currentIndex: Writable<number> = writable(0);
export const isScrollProgress: Writable<boolean> = writable(false);
