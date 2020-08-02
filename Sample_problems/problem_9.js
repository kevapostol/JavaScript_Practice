// Write a JavaScript program to find the armstrong numbers of 3 digits.Go to the editor
// Note: An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.For example, 371 is an Armstrong number since 3 ** 3 + 7 ** 3 + 1 ** 3 = 371.

function isArmstrong( number ) {
    // input: number
    // output: return true if its armstrong/ false if its not
    sum = 0;

    // Check if its a number & check if 3 digits long
    if ( typeof ( number ) !== 'number' || ( number + "" ).split( '' ).length !== 3 ) {
        return false;
    }

    // Convert num to a string
    let arrNumber = ( number + "" ).split( '' );

    // ['5','7']
    // Loop each of the digits
    for ( num of arrNumber ) {
        sum += Math.pow( num, 3 );
    }

    if ( sum === number ) {
        return true;
    } else {
        return false;
    }
}

console.log( isArmstrong( 371 ) );
console.log( isArmstrong( 0 ) );
console.log( isArmstrong( 555 ) );
console.log( isArmstrong( 370 ) );
console.log( isArmstrong( 407 ) );
