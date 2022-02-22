function onFormSubmit() {
  let a = document.forms["myForm"]["bookName"].value;
  let b = document.forms["myForm"]["subjectCode"].value;
  let c = document.forms["myForm"]["courseName"].value;
  let d = document.forms["myForm"]["perPrice"].value;
  let e = document.forms["myForm"]["Author"].value;
  let f = document.forms["myForm"]["Publisher"].value;
  if (a == "" && b == "" && c == "" && d == "" && e == "" && f== "") {
    alert("Name must be filled out");
    return false;
  }
}

function alphanumeric(inputBN, inputSC, inputCN, inputPP) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (
    inputBN.value.match(letters) &&
    inputSC.value.match(letters) &&
    inputCN.value.match(letters) &&
    inputPP.value.match(letters)
  ) {
    alert("Your registration number have accepted : you can try another");
    document.myForm.bookName.focus();
    document.myForm.subjectCode.focus();
    document.myForm.coureseName.focus();
    document.myForm.perPrice.focus();
    document.myForm.Author.focus();
    document.myForm.Publisher.focus();
    return true;
  } else {
    alert("Please input alphanumeric characters only");
    return false;
  }
}

var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["bookName"] = document.getElementById("bookName").value;
  formData["subjectCode"] = document.getElementById("subjectCode").value;
  formData["coureseName"] = document.getElementById("courseName").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  formData["perPrice"] = document.getElementById("Author").value;
  formData["perPrice"] = document.getElementById("Publisher").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.bookName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.subjectCode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.coureseName;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("bookName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("subjectCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("courseName").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Author").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Publisher").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.bookName;
  selectedRow.cells[1].innerHTML = formData.subjectCode;
  selectedRow.cells[2].innerHTML = formData.coureseName;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("bookName").value = "";
  document.getElementById("subjectCode").value = "";
  document.getElementById("courseName").value = "";
  document.getElementById("perPrice").value = "";
  document.getElementById("Author").value = "";
  document.getElementById("Publisher").value = "";
  selectedRow = null;
}
