const cols = document.querySelectorAll(".col");

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "Space") setRandomColors();
});

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type == "unlocked") {
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.children[0];
    node.classList.toggle("fa-unlock-alt");
    node.classList.toggle("fa-lock");
  }

  // if (type == "false") {
  //   console.log("need to lock");
  // }
});

function generateRandomColor() {
  const hexCodes = "123456789ABCDEF";
  let color = "";

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

function setRandomColors() {
  cols.forEach((col) => {
    const text = col.querySelector("h2");
    const color = generateRandomColor();
    const button = col.querySelector("button");
    const isLocked = col.querySelector("i").classList.contains("fa-lock");

    if (isLocked) {
      return;
    }

    text.textContent = color;
    col.style.background = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

setRandomColors();
