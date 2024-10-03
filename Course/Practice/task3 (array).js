// Write code that iterates over this array without using a function 
// and outputs the names and surnames of only those people whose age is greater than 50.

let o3 = [
    { fname: "Vitali", lname: "B", age: "34" },
    { fname: "John", lname: "Smith", age: "99" },
    { fname: "Alex", lname: "Jones", age: "65" }
  ];

  for (let i = 0; i < o3.length; i++) {
    if (o3[i].age > 50) {
        console.log(o3[i].fname);
        console.log(o3[i].lname);
    }
}

// Reault:
// John
// Smith
// Alex
// Jones
