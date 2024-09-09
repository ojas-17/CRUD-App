let table = document.getElementById("table");
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let element1;
let flag = 0;

function add_details() {
    if (name1.value === '')
        alert("Please Enter Name");
    else if (email.value === '')
        alert("Please Enter Email");
    else if (contact.value === '')
        alert("Please Enter Contact No.");

    else if (flag == 1) {
        let element = element1;
        let td = element.parentElement;
        let row = td.parentElement;
        let data = row.getElementsByClassName("data");
        data[0].innerHTML = name1.value;
        data[1].innerHTML = email.value;
        data[2].innerHTML = contact.value;
        name1.value = "";
        email.value = "";
        contact.value = "";
        flag = 0;
    }

    else {
        let tablerow = document.createElement("tr");

        let rowname = document.createElement("td");
        rowname.innerHTML = name1.value;
        name1.value = "";
        rowname.classList.add("data");
        tablerow.appendChild(rowname);

        let rowemail = document.createElement("td");
        rowemail.innerHTML = email.value;
        email.value = "";
        rowemail.classList.add("data");
        tablerow.appendChild(rowemail);

        let rowcontact = document.createElement("td");
        rowcontact.innerHTML = contact.value;
        contact.value = "";
        rowcontact.classList.add("data");
        tablerow.appendChild(rowcontact);

        let rowEditButton = document.createElement("td");
        rowEditButton.classList.add("button-data");
        let editButton = document.createElement("button");
        editButton.classList.add("button2");
        // editButton.onclick = edit_details(editButton);
        editButton.addEventListener('click', function () { edit_details(editButton); });
        editButton.innerHTML = "Edit";
        rowEditButton.appendChild(editButton);
        tablerow.appendChild(rowEditButton);

        let rowDeleteButton = document.createElement("td");
        rowDeleteButton.classList.add("button-data");
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("button2");
        // deleteButton.onclick = delete_details(deleteButton);
        deleteButton.addEventListener('click', function () { delete_details(deleteButton); });
        deleteButton.innerHTML = "Delete";
        rowDeleteButton.appendChild(deleteButton);
        tablerow.appendChild(rowDeleteButton);

        table.appendChild(tablerow);
    }
};

function delete_details(element) {
    let td = element.parentElement;
    let row = td.parentElement;
    row.parentNode.removeChild(row);
    name1.value = "";
    email.value = "";
    contact.value = "";
};

function edit_details(element) {
    element1 = element;
    let td = element.parentElement;
    let row = td.parentElement;
    let data = row.getElementsByClassName("data");
    name1.value = data[0].innerHTML;
    email.value = data[1].innerHTML;
    contact.value = data[2].innerHTML;
    flag = 1;
}