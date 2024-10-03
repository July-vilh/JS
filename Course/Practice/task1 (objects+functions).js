/*
You need to implement a system for storing and managing contacts using an array and functions. 
The task requires creating a simple program that will allow adding contacts to a list and displaying them.

Steps to follow:
1. Create an array to store contacts:
   The array `contacts` will be used to store objects where each object represents a contact with a first name, last name, and age.
   
2. Function to add a contact:
   The function `addContact(fname, lname, age)` takes three arguments: first name, last name, and age.
   It creates an object with this data and adds it to the `contacts` array.
   After adding the new contact, a message confirming the successful addition is logged to the console.

3. Function to display all contacts:
   The function `showContacts()` outputs the list of all contacts.
   If the array is empty, it displays the message "No contacts."
   Otherwise, the function iterates through all contacts in the array and displays them with their first name, last name, and age.
*/

let contacts = []

function addContact(fname, lname, age){
    let contact = {
        fname: fname,
        lname: lname,
        age: age
    };
    contacts.push(contact);
    console.log("Contact", fname, lname, "is added, ", "age " + age)
}

addContact("Vitali", "Brunovski", 34);
addContact("John", "Smith", 99);

function showContacts(){
    if (contacts.length === 0){
        console.log("No contacts")
    }
    else{
        for (let i = 0; i < contacts.length; i++) {
            console.log(contacts[i].lname, contacts[i].fname, contacts[i].age)
    }
}
}

// Result:
// Contact Vitali Brunovski is added,  age 34
// Contact John Smith is added,  age 99
