for (const elem of document.querySelectorAll(".persist-value")) {
  if (elem instanceof HTMLInputElement) {
    const storageKey = `count-input-${elem.id}`;
    elem.addEventListener("input", () => {
      localStorage.setItem(storageKey, elem.value);
    });
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue === null) {
      continue;
    }
    const parsedValue = parseInt(storedValue);
    if (parsedValue === null) {
      continue;
    }
    const defaultValue = parseInt(elem.value);
    if (parsedValue === defaultValue) {
      continue;
    }
    elem.value = parsedValue.toString();
  }
}
