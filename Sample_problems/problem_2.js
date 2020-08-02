// Write a JavaScript conditional statement to sort three numbers.Display an alert box to show the result.Go to the editor
// Sample numbers: 0, -1, 4
// Output: 4, 0, -1

function sortNumbers( num1, num2, num3 ) {
    // Edge case
    if ( typeof ( num1 ) !== 'number' || typeof ( num2 ) !== 'number' || typeof ( num3 ) !== 'number' ) {
        alert( 'Err: One inputs is not a number' );
    }
    let values = [ num1, num2, num3 ];
    values = values.sort().reverse();

    alert( values );
}
