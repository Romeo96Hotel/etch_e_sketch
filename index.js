for (let i = 0; i < 256; i++) {
  const container = document.querySelector(".container");
  const grid = document.createElement("div");
  grid.id = "square";
  grid.textContent = ".";
  container.appendChild(grid);
}
