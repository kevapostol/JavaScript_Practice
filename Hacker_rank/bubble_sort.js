// Complete the countSwaps function below.
function countSwaps( a ) {
    let counter = 0;
    for ( let i = 0; i < a.length; i++ ) {
        for ( let j = 0; j < a.length - 1; j++ ) {
            // Swap adjacent elements if they are in decreasing order
            if ( a[j] > a[j + 1] ) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                counter++;
            }
        }
    }
    console.log( `Array is sorted in ${counter} swaps.` );
    console.log( `First Element: ${a[0]}` );
    console.log( `Last Element: ${a[a.length - 1]}` );
    console.log();
}

countSwaps( [3, 2, 1] );
countSwaps( [1, 2, 3] );
countSwaps( [] );
countSwaps( [1] );
