const container = document.querySelector(".container");
const gridButton = document.querySelector("#grid-btn");
const sizeBtn = document.querySelector("#grid-btn");

/* Gets user input from prompt after pressing button */
function setGridSize() {
  sizeBtn.addEventListener("click", () => {
    const input = parseInt(prompt("input grid size"));
    container.appendChild(renderGrid(input));
  });
}

/* Returns a 500px by 500px square grid */
/* Using number of tiles specified by user */
function renderGrid(numTiles) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${numTiles}, minmax(auto,auto))`;
  container.style.gridTemplateRows = `repeat(${numTiles}, minmax(auto, auto))`;
  container.style.backgroundColor = "#ffebcd";
  container.style.height = "500px";
  container.style.width = "500px";
  const area = numTiles * numTiles;

  for (let i = 0; i < area; i++) {
    const grid = document.createElement("div");
    return grid;
  }
}

setGridSize();
