const hurensohn = document.getElementById("hurensohn");
const gifContainer = document.getElementById("gif-container");
const gif = document.getElementById("hehehaw");
const sound = document.getElementById("sound");

const positions = ["top", "right", "bottom"];

hurensohn.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();

  const randomPos = positions[Math.floor(Math.random() * positions.length)];
  const rect = hurensohn.getBoundingClientRect();

  const gifWidth = 100;
  const gifHeight = 100;

  let top, left, rotation;

if (randomPos === "top") {
  const offsetY = gifHeight;
  top = rect.top - offsetY - 30; // ← statt -10 → mehr Abstand
  left = rect.left + (rect.width / 2) - (gifWidth / 2);
  rotation = "rotate(0deg)";
} else if (randomPos === "right") {
  const offset = 30; // Abstand zum Text
  top = rect.top + (rect.height / 2) - (gifHeight / 2);
  left = rect.right + offset;
  rotation = "rotate(90deg)";
}
 else if (randomPos === "bottom") {
  const offsetY = gifHeight;
  top = rect.bottom + 30; // optional auch mehr Abstand unten
  left = rect.left + (rect.width / 2) - (gifWidth / 2);
  rotation = "rotate(180deg)";
}



  gif.style.transform = rotation;
  gifContainer.style.left = `${left}px`;
  gifContainer.style.top = `${top}px`;
  gifContainer.style.opacity = 1;

  setTimeout(() => {
    gifContainer.style.opacity = 0;
  }, 3000);
});

gif.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=_84F_Mb8Oz0&list=RD_84F_Mb8Oz0", "_blank");
});
