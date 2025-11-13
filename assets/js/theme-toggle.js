/* The Gild Store – Theme & Direction Toggle */

const THEME_KEY = "rm-theme";
const DIR_KEY = "rm-direction";

const applyTheme = (theme) => {
  document.body.classList.toggle("rm-dark", theme === "dark");
};

const applyDirection = (dir) => {
  document.documentElement.setAttribute("dir", dir);
};

const initializeThemeToggle = () => {
  const storedTheme = localStorage.getItem(THEME_KEY) || "light";
  const storedDir = localStorage.getItem(DIR_KEY) || "ltr";

  applyTheme(storedTheme);
  applyDirection(storedDir);

  const darkToggle = document.querySelector("[data-toggle='theme']");
  const dirToggle = document.querySelector("[data-toggle='direction']");

  if (darkToggle) {
    darkToggle.setAttribute("aria-pressed", storedTheme === "dark");
    darkToggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("rm-dark") ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
      darkToggle.setAttribute("aria-pressed", nextTheme === "dark");
    });
  }

  if (dirToggle) {
    dirToggle.setAttribute("aria-pressed", storedDir === "rtl");
    dirToggle.addEventListener("click", () => {
      const nextDir = document.documentElement.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
      applyDirection(nextDir);
      localStorage.setItem(DIR_KEY, nextDir);
      dirToggle.setAttribute("aria-pressed", nextDir === "rtl");
    });
  }
};

document.addEventListener("DOMContentLoaded", initializeThemeToggle);
/* The Gild Store – Theme & Direction Toggle */

const THEME_KEY = "rm-theme";
const DIR_KEY = "rm-direction";

const applyTheme = (theme) => {
  document.body.classList.toggle("rm-dark", theme === "dark");
};

const applyDirection = (dir) => {
  document.documentElement.setAttribute("dir", dir);
};

const initializeThemeToggle = () => {
  const storedTheme = localStorage.getItem(THEME_KEY) || "light";
  const storedDir = localStorage.getItem(DIR_KEY) || "ltr";

  applyTheme(storedTheme);
  applyDirection(storedDir);

  const darkToggle = document.querySelector("[data-toggle='theme']");
  const dirToggle = document.querySelector("[data-toggle='direction']");

  if (darkToggle) {
    darkToggle.setAttribute("aria-pressed", storedTheme === "dark");
    darkToggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("rm-dark") ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
      darkToggle.setAttribute("aria-pressed", nextTheme === "dark");
    });
  }

  if (dirToggle) {
    dirToggle.setAttribute("aria-pressed", storedDir === "rtl");
    dirToggle.addEventListener("click", () => {
      const nextDir = document.documentElement.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
      applyDirection(nextDir);
      localStorage.setItem(DIR_KEY, nextDir);
      dirToggle.setAttribute("aria-pressed", nextDir === "rtl");
    });
  }
};

document.addEventListener("DOMContentLoaded", initializeThemeToggle);


