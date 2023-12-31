// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;



function addR() { // Add a row
    const Table = document.getElementById('grid'); 
    const newRow = grid.insertRow(-1);
    newCols = grid.rows[0].cells.length; 

    for (let i = 0; i < newCols; i++ ) {
        const cell = newRow.insertCell(i);
        cell.onclick = function () {
            colorSingleCell(this);
            };
    }
   numRows++;
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
    
    var grid = document.getElementById('grid');

    var LastR = grid.rows[grid.rows.length - 1];
    grid.deleteRow(grid.rows.length - 1);
}

// Remove a column
function removeC() {
    const grid = document.getElementById("grid");
	if (numCols > 0) {
		for(let i = 0; i < grid.rows.length;i++) {
			grid.rows[i].deleteCell(-1); 
		}
		numCols--;
	}
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}


function fillU() {
    if (colorSelected !== "SELECT") { // Check if a color is selected
        const gridCells = document.querySelectorAll('td');

        gridCells.forEach(function(cell) {
            if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
                cell.style.backgroundColor = colorSelected;
            }
        });
    }
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
