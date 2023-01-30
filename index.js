const container = document.querySelector(".container");
const sizeBtn = document.querySelector("#size-btn");
const clearBtn = document.querySelector("#clear-btn");

/* Etch-e-Sketch */
/* Button renders new grid*/
sizeBtn.addEventListener("click", renderGrid);

clearBtn.addEventListener("click", clear);

/* Returns a 500 x 500 square grid */
/* Number of tiles is initiated by prompt text */
/* Pen color is initiated by prompt text */
function renderGrid() {
  const numTiles = prompt("Set grid size");
  const penColor = prompt("Choose color");
  const area = numTiles * numTiles;

  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.gridTemplateRows = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.height = "500px";
  container.style.width = "500px";
  container.style.backgroundColor = "gray";

  /* creates the grid with specified number of tiles */
  /* Hover over each tile changes color from prompt */
  for (let i = 0; i < area; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = penColor;
    });
    container.appendChild(gridSquare);
  }
}

/* clears grid */
function clear() {
  container.textContent = "";
}

/* rainbow pen functionality */
function rainbow() {}
