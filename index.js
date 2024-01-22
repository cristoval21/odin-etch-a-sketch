function drawGrid(container, squares) {
  
  // Create rows
  for (let i = 1; i <= squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    
    // Create columns
    for (let j = 1; j <= squares; j++) {
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
    }
  
    container.appendChild(row);
  }
  
  const columns = document.querySelectorAll(".col");
  columns.forEach((col) => {
    col.addEventListener("mouseenter", () => {
      col.style.backgroundColor = "black";
    })
  })
}

// Create button
const btnNew = document.createElement("button");
btnNew.textContent = "Set number of squares";
document.body.appendChild(btnNew);
const gridWrapper = document.createElement("div");
gridWrapper.classList.add("grid-wrapper");
document.body.appendChild(gridWrapper);

btnNew.addEventListener("click", () => {
  let numberOfSquares;
  do {
    numberOfSquares = +prompt("Enter number of squares (max of 100");
  } while (numberOfSquares > 100);
  
  // Create wrapper
  gridWrapper.innerText = "";

  drawGrid(gridWrapper, numberOfSquares);
})
