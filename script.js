var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData)
    }
    resetForm();
}
// Read operation using this function
function readFormData() {
    var formData = {};
    formData["empID"] = document.getElementById("empID").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

// Create operation
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empID;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a href="#" class="opbtn" onClick='onUpdate(this)'>Update</a> 
                        <a href="#" class="opbtn" onClick='onDelete(this)'>Delete</a>`;
}

// Reset Button
function resetForm() {
    document.getElementById('empID').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('city').value = '';
    selectedRow = null;
}

// Edit operation
function onUpdate(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('empID').value = selectedRow.cells[0].innerHTML;
    document.getElementById('fullName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
    document.getElementById('city').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.empID;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

// Delete opration
function onDelete(td) {
    if (confirm('Are you sure you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}