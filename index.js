const container = document.querySelector(".container");
const gridButton = document.querySelector("#grid-btn");

/* standard 16 x 16 grid */
for (let i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.id = "square";
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "black";
  });
  container.appendChild(grid);
}

/* gets users input from promp and creats a grid of that size */
function setGridSize(size) {
  size = getGridSize();
  console.log(size);
}

setGridSize();
