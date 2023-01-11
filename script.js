const container = document.querySelector(".container");
const gridButton = document.querySelector(".set-grid");
const resetButton = document.querySelector(".clear-board");
let dimensions = 16;

setGrid(dimensions);

function setGrid(args) {
  for (let i = 0; i < args * args; i++) {
    const content = document.createElement("div");
    const divSize = String(100 / args) + "%";
    content.classList = `divs divs${i}`;
    content.style.setProperty("width", divSize);
    content.style.setProperty("height", divSize);
    content.style.backgroundColor = "rgb(220, 220, 220)";
    content.addEventListener("mouseover", function (e) {
      content.style.backgroundColor = "black";
    });
    container.appendChild(content);
  }
}
function wipeBoard() {
  while (container.firstChild) container.removeChild(container.firstChild);
}

gridButton.addEventListener("click", function (e) {
  const gridSize = Number(window.prompt("Enter grid size"));
  dimensions = gridSize;
  wipeBoard();
  setGrid(dimensions);
});

resetButton.addEventListener("click", function (e) {
  wipeBoard();
  setGrid(dimensions);
});
