// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

/**
 * checkObjValues - Checks if the value o
 * @param {obj} obj1 
 * @param {obj} obj2 
 * @param {string} property - the key/property of object
 * Return: true if the 2 object has the same value, false if either is not matching or none at all
 */


function checkObjValues( obj1, obj2, property ) {
    // S1 check
    if ( ( obj1[property] === obj2[property] ) && ( obj1[property] !== undefined && obj2[property] !== undefined ) ) {
        return true;
    } else {
        return false;
    }
}

//  INPUT: obj1 {chicken: 'nuggets'}
//         obj2 {chicken: 'fries'}
//  OUTPUT: false
console.log( checkObjValues( { chicken: 'nuggets' }, { chicken: 'fries' }, 'chicken' ) );// false
//  INPUT: obj1 {chicken: 'nuggets'}
//         obj2 {chicken: 'nuggets'}
//  OUTPUT: true
console.log( checkObjValues( { chicken: 'nuggets' }, { chicken: 'nuggets' }, 'chicken' ) ); // true

console.log( checkObjValues( { chicken: 'nuggets' }, { chicken: 'nuggets' }, 'dog' ) );// false
