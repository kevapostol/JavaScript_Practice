// Write a JavaScript program that accept two integers and display the larger.

function getLarger( num_a, num_b ) {
    // Edge Case: checks if both are numbers
    if ( typeof ( num_a ) !== 'number' || typeof ( num_b ) !== 'number' ) {
        return -1;
    }

    // Edge Case: Both Equal
    if ( num_a === num_b ) {
        return -1;
    } else if ( num_a > num_b ) {
        return num_a;
    } else {
        return num_b
    }
}

console.log( getLarger( 1, 1 ) );
console.log( getLarger( 2, 1 ) );
console.log( getLarger( 1, 3 ) );
console.log( getLarger( -5, 5 ) );
console.log( getLarger( 'A', 5 ) );
console.log( getLarger( 'A', 'B' ) );
console.log( getLarger( 5, true ) );
