// INPUT:
// - Array, (sorted: mandatory)
// - Search Value

function binarySearch( arr, x ) {

    let mid;
    let l = 0;
    let r = arr.length - 1;

    while ( l <= r ) {
        // Get the mid element
        mid = Math.floor( l + ( r - l ) / 2 );

        if ( arr[mid] === x ) {
            return mid;
        }

        if ( arr[mid] < x ) {
            l = mid + 1;
        }

        if ( arr[mid] > x ) {
            r = mid - 1;
        }
    }
    return -1;
}

console.log( binarySearch( [1, 2, 3], 2 ) ); // idx 1
console.log( binarySearch( [1, 2, 3], 1 ) ); // idx 0
console.log( binarySearch( [1, 2, 3], 3 ) ); // idx 2
console.log( binarySearch( [1, 2, 3, 4], 3 ) ); // idx 2












// [1,2,3,[4,5] search for 4 l
// [1,2],3,4,5] search for 2 r
// l = 0
// r = 4
// mid = 0 + ( 4 - 0 ) = ( 4 / 2 ) -> idx 2 -> val 3( mid )

// val 3




