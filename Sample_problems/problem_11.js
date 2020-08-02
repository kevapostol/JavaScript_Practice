// Write a JavaScript program to compute the greatest common divisor( GCD ) of two positive integers.

// inputs: 28, 35

let getGCD = ( num1, num2 ) => {

    // check fo numbers
    if ( typeof ( num1 ) !== 'number' || typeof ( num2 ) !== 'number' ) {
        return -1;
    }
    let gcd = 1;
    let ctr = 1;

    while ( ctr !== num1 ) {
        if ( num1 % ctr === 0 && num2 % ctr === 0 ) {
            gcd = ctr;
        }
        ctr += 1;
    }

    return gcd;
}

console.log( getGCD( 28, 35 ) );
console.log( getGCD( 144, 156 ) );
console.log( getGCD( 144, 'a' ) );
