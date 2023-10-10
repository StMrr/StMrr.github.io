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
    alert("Clicked Add Col"); // Replace this line with your code.
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
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}