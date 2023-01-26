for (let i = 0; i < 256; i++) {
  const container = document.querySelector(".container");
  const grid = document.createElement("div");
  grid.id = "square";
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "black";
  });

  container.appendChild(grid);
}
