const dialogElem: HTMLElement = document.getElementById("image-popup-dialog")!;
const dialogImageElem: HTMLImageElement = document.getElementById(
  "image-popup-dialog-image",
)! as HTMLImageElement;
const popupImageElems = Array.from(
  document.getElementsByClassName("popup-image"),
).filter((elem) => elem instanceof HTMLImageElement);

async function setup() {
  for (const imageElem of popupImageElems) {
    imageElem.addEventListener("click", (event) => {
      openPopup(event.target as HTMLImageElement);
    });
  }

  dialogElem.addEventListener("click", () => {
    closePopup();
  });

  window.addEventListener("popstate", (event) => {
    if (isPopupOpen()) {
      closePopup(true);
    }
  });
}

function isPopupOpen() {
  return !dialogElem.classList.contains("hidden");
}

function openPopup(imageElem: HTMLImageElement) {
  if (isPopupOpen()) {
    return;
  }
  const highresSrc = imageElem.getAttribute("data-popup-src")!;
  dialogImageElem.src = "";
  dialogImageElem.width = parseInt(imageElem.getAttribute("data-popup-width")!);
  dialogImageElem.height = parseInt(
    imageElem.getAttribute("data-popup-height")!,
  );
  dialogImageElem.src = highresSrc;
  dialogElem.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  history.pushState({ isPopupImage: true }, "", "#image");
}

function closePopup(fromPop: boolean = false) {
  if (!isPopupOpen()) {
    return;
  }
  dialogElem.classList.add("hidden");
  document.body.style.overflow = "";

  if (!fromPop) {
    if (history.state && history.state.isPopupImage) {
      history.back();
    } else {
      history.pushState(null, "", location.pathname + location.search);
    }
  }
}

setup();
