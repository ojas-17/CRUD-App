let table = document.getElementById("table");
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let loading = document.getElementById("loading-msg");
let add_btn = document.getElementById("add_button");
let element1;
let update_id;
let flag = 0;


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQCSRfC6gC3c58F20r861glE9JEBa8TVE",
    authDomain: "project-1-4a629.firebaseapp.com",
    projectId: "project-1-4a629",
    storageBucket: "project-1-4a629.appspot.com",
    messagingSenderId: "608776121466",
    appId: "1:608776121466:web:e97f9364e058b1faa05fc3",
    measurementId: "G-3571Y06KD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function load_details() {
    try {
    
        const querySnapshot = await getDocs(collection(db, "users"));
        table.innerHTML = `
            <tr class="header">
                <th class="data">Name</th>
                <th class="data">Email</th>
                <th class="data">Contact No.</th>
                <td class="button-data"><button class="button3">Edit</button></td>
                <td class="button-data"><button class="button3">Delete</button></td>
            </tr>
        `;
        querySnapshot.forEach((element) => {
            let ele = element.data();
            display_details(element.id, ele.name, ele.email, ele.contact);
            // console.log(element.id);
        })
        // loading.style.opacity = '0';
        loading.classList.remove("loading");
        loading.innerText = '';
        console.log("Data loaded successfully");
    } catch (error) {
        console.log(error);
    }
}

window.onload = load_details;

function display_details(id, name, email, contact) {

    let tablerow = document.createElement("tr");
    tablerow.setAttribute('data-id', id);
    // console.log(tablerow.getAttribute('data-id'));

    let rowname = document.createElement("td");
    rowname.innerHTML = name;
    rowname.classList.add("data");
    tablerow.appendChild(rowname);

    let rowemail = document.createElement("td");
    rowemail.innerHTML = email;
    rowemail.classList.add("data");
    tablerow.appendChild(rowemail);

    let rowcontact = document.createElement("td");
    rowcontact.innerHTML = contact;
    rowcontact.classList.add("data");
    tablerow.appendChild(rowcontact);

    let rowEditButton = document.createElement("td");
    rowEditButton.classList.add("button-data");
    let editButton = document.createElement("button");
    editButton.classList.add("button2");
    editButton.classList.add("edit_button");
    // editButton.onclick = edit_details(editButton);
    // editButton.addEventListener('click', function () { edit_details(editButton); });
    editButton.innerHTML = "Edit";
    rowEditButton.appendChild(editButton);
    tablerow.appendChild(rowEditButton);

    let rowDeleteButton = document.createElement("td");
    rowDeleteButton.classList.add("button-data");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("button2");
    deleteButton.classList.add("delete_button");
    // deleteButton.onclick = delete_details(deleteButton);
    // deleteButton.addEventListener('click', function () { delete_details(deleteButton); });
    deleteButton.innerHTML = "Delete";
    rowDeleteButton.appendChild(deleteButton);
    tablerow.appendChild(rowDeleteButton);

    table.appendChild(tablerow);
}

async function add_details() {
    if (name1.value === '')
        alert("Please Enter Name");
    else if (email.value === '')
        alert("Please Enter Email");
    else if (contact.value === '')
        alert("Please Enter Contact No.");

    
    else if (flag == 1) {
        let updatedData = {
        name: name1.value,
        email: email.value,
        contact: contact.value
        }

        try {
            // console.log(update_id);
            await updateDoc(doc(db, "users", update_id), updatedData);
            load_details();
            loading.classList.remove("loading");
            loading.innerText = '';
        } catch (error) {
            console.log(error);
        }

        name1.value = "";
        email.value = "";
        contact.value = "";
        add_btn.innerText = 'Add';
        flag = 0;
    }

    else {
        try {
            const docRef = await addDoc(collection(db,"users"), {
                name: name1.value,
                email: email.value,
                contact: contact.value
            })
            name1.value = "";
            email.value = "";
            contact.value = "";
            load_details();
            loading.classList.remove("loading");
            loading.innerText = '';
        } catch (error) {
            console.log(error);
        }
    }
};

async function delete_details(element) {
    let td = element.parentElement;
    let row = td.parentElement;
    let delete_id = row.getAttribute('data-id');
    try {
        await deleteDoc(doc(db, "users", delete_id));
        load_details();
        loading.classList.remove("loading");
        loading.innerText = '';
    } catch (error) {
        console.log(error);
    }
    // console.log(row.getAttribute('data-id'));
    // row.parentNode.removeChild(row);
    name1.value = "";
    email.value = "";
    contact.value = "";
};

function edit_details(element) {
    element1 = element;
    let td = element.parentElement;
    let row = td.parentElement;
    update_id = row.getAttribute('data-id');
    let data = row.getElementsByClassName("data");
    name1.value = data[0].innerHTML;
    email.value = data[1].innerHTML;
    contact.value = data[2].innerHTML;

    add_btn.innerText = 'Update';
    flag = 1;
}

add_btn.addEventListener('click', () => {
    loading.innerText = 'LOADING';
    loading.classList.add("loading");
    add_details();
});

document.getElementById("table").addEventListener('click', (e) => {
    if(e.target.classList.contains('button2')) {
        if(e.target.classList.contains('edit_button')) {
            // loading.innerText = 'LOADING';
            // loading.classList.add("loading");
            edit_details(e.target);
        }
        else if(e.target.classList.contains('delete_button')) {
            loading.innerText = 'LOADING';
            loading.classList.add("loading");
            delete_details(e.target);
        }
    }
});
