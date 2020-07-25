// Write a JavaScript function to check whether an`input` is a string or not.

let checkIsString = ( str ) => {
    // 'abc' -> true
    // 42 -> false !== 'string') {
    // false -> false

    if ( typeof ( str ) !== 'string' ) {
        return false;
    } else {
        return true;
    }
};


console.log( checkIsString( 'abc' ) );
console.log( checkIsString( 42 ) );
console.log( checkIsString( false ) );
console.log( checkIsString( true ) );
console.log( checkIsString( '71' ) );
console.log( checkIsString( NaN ) );
console.log( checkIsString( '' ) );
