// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 



function addR() { // Add a row
    var Table = document.getElementById('grid');

    if (Table.rows.length === 0) {
        var newR = Table.insertRow();

        var newCell = newR.insertCell();

        newCell.className = 'cell';
        newCell.addEventListener('click', function() { changeColor(newCell) });
    } 
    
    else {
        // Clone the first row to create a new row
        var firstRow = Table.rows[0];
        var newR = firstRow.cloneNode(true);

        // Reset background color of all cells in new row
        var ColorCell = newR.querySelectorAll('.cell');
        for (var i = 0; i < ColorCell.length; i++) {
            ColorCell[i].style.backgroundColor = '';
        }

        // Append the new row to the table
        Table.appendChild(newR);

    }
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