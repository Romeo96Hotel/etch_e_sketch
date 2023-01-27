const container = document.querySelector(".container");
const sizeBtn = document.querySelector("#size-btn");
const colorBtn = document.querySelector("#color-btn");
let gridSize;

/* Button renders new grid with specified size */
sizeBtn.addEventListener("click", () => {
  const userInput = parseInt(prompt("set grid size"));
  gridSize = userInput;
  renderGrid(gridSize);
});

/* Button renders gridsquares with specified color on hover */
sizeBtn.addEventListener("click", () => {
  const userInput = parseInt(prompt("set grid size"));
  gridSize = userInput;
  renderGrid(gridSize);
});

/* Returns a 500px by 500px square grid */
/* Number of tiles is specified by user */
function renderGrid(numTiles) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.gridTemplateRows = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.height = "500px";
  container.style.width = "500px";
  container.style.backgroundColor = "gray";
  const area = numTiles * numTiles;

  for (let i = 0; i < area; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "red";
    });
    container.appendChild(gridSquare);
  }
}

/* returns color specified by user */
function setDrawColor() {}

/* Etch-e-Sketch */
