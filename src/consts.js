function getVariableFromHTML(variable) {
  if (typeof window === "undefined") {
    return;
  }
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

export const LIGHT_BACKGROUND = getVariableFromHTML("--background-light-theme");
export const DARK_BACKGROUND = getVariableFromHTML("--background-dark-theme");

export const COLORS = {
  LIGHT_BACKGROUND,
  DARK_BACKGROUND,
};

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const LANGUAGES = {
  EN: "en",
  RU: "ru",
};
