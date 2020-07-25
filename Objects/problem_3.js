// A JavaScript program to get the length of a JavaScript object

// INPUT
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// Sample Output: 3


var student = {
    name: this.name,
    sclass: this.sclass,
    rollno: this.rollno,
};

function getObjLen( myObj ) {
    let ctr = 0, key;

    for ( key in myObj ) {
        ctr += 1;
    }

    return ctr;
}


console.log( getObjLen( student ) );
