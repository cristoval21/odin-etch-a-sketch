// Create wrapper
const gridWrapper = document.createElement("div");
gridWrapper.classList.add("grid-wrapper");
document.body.appendChild(gridWrapper);

// Create rows
for (let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  
  // Create columns
  for (let j = 1; j <= 16; j++) {
    const col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);
  }

  gridWrapper.appendChild(row);
}

const columns = document.querySelectorAll(".col");
columns.forEach((col) => {
  col.addEventListener("mouseenter", () => {
    col.style.backgroundColor = "red";
  })
})