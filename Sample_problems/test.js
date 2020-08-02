function repeatedString( s, n ) {
    // aba
    let x = Math.floor( n / s.length );
    console.log( `Getting X value: ${x}` );

    //aba -> [ '', 'b', '' ].length -> 3 -> 2 * 3
    //aba aba aba  
    let count = ( s.split( "a" ).length - 1 ) * x;
    console.log( s.split( "a" ) );
    console.log( `Getting count value: ${count}` );

    console.log( `S.length: ${s.length}` )
    let rem = n % s.length;

    console.log( `Getting rem value: ${rem}` );


    for ( var i = 0; i < rem; i++ ) {
        if ( s.charAt( i ) === "a" ) {
            count++;
        }
    }
    return count;
}


console.log( repeatedString( 'aba', 10 ) );
