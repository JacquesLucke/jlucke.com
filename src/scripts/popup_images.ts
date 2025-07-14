const dialogElem: HTMLElement = document.getElementById("image-popup-dialog")!;
const dialogImageElem: HTMLImageElement = document.getElementById(
  "image-popup-dialog-image",
)! as HTMLImageElement;
const popupImageElems = document.getElementsByClassName("popup-image");

async function setup() {
  for (const imageElem of popupImageElems) {
    imageElem.addEventListener("click", (event) => {
      triggerPopup(event.target as HTMLImageElement);
    });
  }

  dialogElem.addEventListener("click", () => {
    closePopup();
  });
}

function triggerPopup(imageElem: HTMLImageElement) {
  const alreadyLoadedSrc = imageElem.getAttribute("src")!;
  const highresSrc = imageElem.getAttribute("data-popup-src")!;
  dialogImageElem.src = "";
  dialogImageElem.width = parseInt(imageElem.getAttribute("data-popup-width")!);
  dialogImageElem.height = parseInt(
    imageElem.getAttribute("data-popup-height")!,
  );
  dialogImageElem.src = highresSrc;
  dialogElem.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePopup() {
  dialogElem.classList.add("hidden");
  document.body.style.overflow = "";
}

setup();
