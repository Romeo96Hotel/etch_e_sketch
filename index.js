const container = document.querySelector(".container");
const gridButton = document.querySelector("#grid-btn");
const sizeBtn = document.querySelector("#grid-btn");
const userInput = prompt("choose grid size");


function renderGrid(size) {
  size = parseInt(userInput);
  /* standard 16 x 16 grid */
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.id = "square";
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
    container.appendChild(grid);
  }
}
