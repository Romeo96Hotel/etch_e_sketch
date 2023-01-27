const container = document.querySelector(".container");
const gridButton = document.querySelector("#grid-btn");

/* standard 16 x 16 grid */
function standardGrid() {
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.id = "square";
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
    container.appendChild(grid);
  }
}

/* returns grid size based on inputted number */
function getGridSize() {
  gridButton.addEventListener("click", () => {
    const userInput = prompt("select grid size");
    return userInput;
  });
}
