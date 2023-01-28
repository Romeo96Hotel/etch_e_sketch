const container = document.querySelector(".container");
const sizeBtn = document.querySelector("#size-btn");

/* Button renders new grid with specified size */
sizeBtn.addEventListener("click", renderGrid);

/* Returns a 500 x 500 square grid */
/* Number of tiles is specified by user */
function renderGrid() {
  const numTiles = prompt("Set grid size");
  const area = numTiles * numTiles;

  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.gridTemplateRows = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.height = "500px";
  container.style.width = "500px";
  container.style.backgroundColor = "gray";

  for (let i = 0; i < area; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = penColor;
    });
    container.appendChild(gridSquare);
  }
}

/* returns color specified by user */
function setDrawColor() {}

/* Etch-e-Sketch */
