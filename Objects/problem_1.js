// Write a JavaScript program to list the properties of a JavaScript object

// I
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// Sample Output: name, sclass, rollno


var student = {
    name: this.name,
    sclass: this.sclass,
    rollno: this.rollno,
};

console.log( Object.keys( student ).join( ', ' ) );
