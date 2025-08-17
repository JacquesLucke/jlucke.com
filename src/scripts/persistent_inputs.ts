function getStorageKey(elem: HTMLInputElement) {
  return `persistent-input-${elem.id}`;
}

export function persistInput(elem: HTMLInputElement) {
  const storageKey = getStorageKey(elem);
  localStorage.setItem(storageKey, elem.value);
}

for (const elem of document.querySelectorAll(".persist-value")) {
  if (elem instanceof HTMLInputElement) {
    const storageKey = getStorageKey(elem);
    elem.addEventListener("input", () => {
      persistInput(elem);
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
