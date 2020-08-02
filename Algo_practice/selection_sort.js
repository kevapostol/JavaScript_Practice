// Selection Sort

// INPUT [3,2,1,5,4]
// OUTPUT [1,2,3,4,5]
// O(n^2)
// Finds the lowest value from an array
function findLowest( arr ) {
    let lowest = null;
    for ( let i = 0; i < arr.length; i++ ) { // [3,2,1,5,4] 
        if ( lowest === null ) {
            lowest = arr[i];
        }

        if ( arr[i] < lowest ) {
            lowest = arr[i];
        }
    }
    return lowest
}

// Main function, selection sort
function selectionSort( arr ) {
    let newArr = [];

    while ( arr.length !== 0 ) {
        let lowest = findLowest( arr ); // Helper function

        arr = arr.filter( ( num ) => num !== lowest );

        let indxOfLowest = arr.indexOf( lowest );
        arr.splice( indxOfLowest, 1 );
        newArr.push( lowest );
    }
    console.log( newArr );
}


selectionSort( [3, 2, 1, 5, 4] );
