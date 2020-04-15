import { writable } from "svelte/store";

const isLS = typeof window !== "undefined";
typeof window.localStorage === "object" &&
  typeof window.localStorage.setItem === "function";

const initialTheme = isLS && window.localStorage.getItem("theme");

export const theme = writable(initialTheme || "light");
