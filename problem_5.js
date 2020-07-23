// Write a JavaScript
// for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.Go to the editor
// Sample Output:
//     "0 is even"
// "1 is odd"
// "2 is even"

for ( let i = 0; i <= 15; i += 1 ) {
    // if I is divisible by 2
    if ( i % 2 === 0 ) {
        console.log( `${i} is even` );
    } else {
        console.log( `${i} is odd` );
    }
}
