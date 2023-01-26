for (let i = 0; i < 256; i++) {
  const container = document.querySelector(".container");
  const grid = document.createElement("div");
  grid.id = "square";
  grid.innerHTML = ".";

  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "cyan";
  });

  container.appendChild(grid);
}
