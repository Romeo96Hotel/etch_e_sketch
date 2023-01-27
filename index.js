const container = document.querySelector(".container");
const gridButton = document.querySelector("#grid-btn");
const sizeBtn = document.querySelector("#grid-btn");

/* creates a square grid using size specified by user */
function renderGrid(size) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${size}, minmax(auto,auto))`;
  container.style.gridTemplateRows = `repeat(${size}, minmax(auto, auto))`;
  container.style.backgroundColor = "#ffebcd";
  container.style.height = "500px";
  container.style.width = "500px";
  const area = size * size;

  for (let i = 0; i < area; i++) {
    const grid = document.createElement("div");
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
    container.appendChild(grid);
  }
}

