const listeners: (() => void)[] = [];

export function isDarkMode() {
  return localStorage.getItem("theme") === "dark";
}

export function enableTheme(theme: "dark" | "light") {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  for (const listener of listeners) {
    listener();
  }
}

export function toggleDarkMode() {
  if (isDarkMode()) {
    enableTheme("light");
  } else {
    enableTheme("dark");
  }
}

export function registerThemeToggleListener(listener: () => void) {
  listeners.push(listener);
}
