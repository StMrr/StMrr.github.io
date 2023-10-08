// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    const grid = document.getElementById("grid");

    for (let i = 0; i < grid.rows.length; i++) {
        const cell = grid.rows[i].insertCell(-1);
        cell.onclick = function () {
            colorSingleCell(this);
        };
    }
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    if (colorSelected !== "SELECT") { // Check if a color is selected
        const gridCells = document.querySelectorAll('td');

        gridCells.forEach(function(cell) {
            cell.style.backgroundColor = colorSelected;
        });
    }
}

// Clear all cells
function clearAll(){
  const gridCells = document.querySelectorAll("td");
  gridCells.forEach(function(cell){
    cell.style.backgroundColor = "white"
  });
}

// Fill single cell
function colorSingleCell(element){
  element.style.backgroundColor = colorSelected;
}
