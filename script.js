var ctr = 1;

var addBtn = document.getElementById("add-button");
addBtn.addEventListener('click', function handelEvent(){
    AddNewRow();
})

// Function to add new Table Now with 2 cells
function AddNewRow(){
    var tabl = document.getElementById("dynamic-table");
    var len = tabl.rows.length;

    var trow = document.createElement("TR");
    tabl.appendChild(trow);

    var Col1 = trow.insertCell(0);
    var Col2 = trow.insertCell(1);
    
    Col1.innerHTML = "Cell " + ctr; ctr++;
    Col2.innerHTML = "Cell " + ctr; ctr++;
}