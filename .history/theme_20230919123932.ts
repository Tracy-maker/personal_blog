import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--glad-brand": "#4169E1",
  "--my-purple": "	#9370DB",
  "--my-blue": "#00BFFF",
  "--my-green": "#7CFC00",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--glad-brand"],

  /* Default Button */
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--glad-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-blue"],
  "--default-button-danger-color": props["--my-purple"],

  /* State */
  "--state-info-color": props["--glad-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-blue"],
  "--state-danger-color": props["--my-purple"],

  /*Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--glad-brand"],
});
