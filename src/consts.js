function getVariableFromHTML(variable) {
  if (typeof window === "undefined") {
    return;
  }
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

export const LIGHT_BACKGROUND = getVariableFromHTML("--background-light-color");
export const DARK_BACKGROUND = getVariableFromHTML("--background-dark-color");

export const COLORS = {
  LIGHT_BACKGROUND,
  DARK_BACKGROUND,
};

export const THEMES = {
  LIGHT: "light",
  NIGHT_OWL: "night owl",
  WINTER: "winter is coming",
  SOLARIZED: "solarized",
  DARK: "dark"
};

export const LIGHTS_THEMES = [THEMES.LIGHT, THEMES.WINTER];

export const LANGUAGES = {
  EN: "en",
  RU: "ru",
};
