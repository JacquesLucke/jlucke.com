export function isDarkMode() {
  return localStorage.getItem("theme") === "dark";
}

export function enableTheme(theme: "dark" | "light") {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function toggleDarkMode() {
  if (isDarkMode()) {
    enableTheme("light");
  } else {
    enableTheme("dark");
  }
}
