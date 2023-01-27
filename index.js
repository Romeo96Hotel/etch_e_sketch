const container = document.querySelector(".container");
const gridButton = document.querySelector("#grid-btn");
const sizeBtn = document.querySelector("#grid-btn");
const colorBtn = document.querySelector("#rbw-btn");

/* Returns a 500px by 500px square grid */
/* Number of tiles is specified by user */
function setGridSize(numTiles) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.gridTemplateRows = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.height = "500px";
  container.style.width = "500px";
  const area = numTiles * numTiles;

  for (let i = 0; i < area; i++) {
    const grid = document.createElement("div");
    return grid;
  }
}

/* returns color specified by user */
function setDrawColor() {}

/* Etch-e-Sketch */
setGridSize();
