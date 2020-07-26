// Get the subsets O(n^2)




function getSubsets( string ) {
    let subset = [];

    for ( let m = 0; m < string.length; m++ ) {
        for ( let n = m + 1; n < string.length + 1; n++ )
            subset.push( string.slice( m, n ) );
    }

    return subset;
}

console.log( getSubsets( 'dog' ) );

















