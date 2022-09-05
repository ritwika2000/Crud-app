var selectedRow = null
let cnt=1;
//console.log('hi');
function onFormSubmit() {
    if (validate()) {
        console.log('hi');
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["date"] = document.getElementById("date").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = cnt;
    cnt+=1;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.date;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell5 = newRow.insertCell(4);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    cell5.innerHTML=time;
    cell6= newRow.insertCell(5);
    cell6.innerHTML = `<button type="button" class="btn btn-outline-primary" onclick="onEdit(this)">Edit</button>
    <button type="button" class="btn btn-outline-danger" onclick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("date").value = "";
    document.getElementById("address").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("date").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
  
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.date;
    selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        cnt-=1;
        resetForm();
    }
}
function validate() {
    isValid = true;
    console.log('hi');
    var y=document.getElementsByTagName('Input');
    for(let i=0;i<y.length;i++)
    {
        if(y[i].value=='')
        {
            isValid=false;
        }
    }
    if(!isValid)
    {
        alert("Please fill all the fields!!");
    }
    return isValid;
}