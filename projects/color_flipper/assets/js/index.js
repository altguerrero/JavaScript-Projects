const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");

const changeColor = () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber(hex.length)];
  }

  document.querySelector("body").style.backgroundColor = hexColor;

  return hexColor;
};

const getRandomNumber = (amount) => {
  return Math.floor(Math.random() * amount);
};

const copyColor = () => {
  const copy = document.querySelector(".copy");

  navigator.clipboard.writeText(color.textContent);
  copy.classList.add("show");
  setTimeout(() => {
    copy.classList.remove("show");
  }, 1500);
};

document.body.onkeyup = (e) => {
  if (e.code === "Space") {
    color.textContent = changeColor();
  }
};

document.ondblclick = (e) => {
  if (e.target === color) {
    copyColor();
  }
};

document.ontouchstart = (e) => {
  if (e.target === color) {
    copyColor();
  } else {
    color.textContent = changeColor();
  }
};

changeColor();
