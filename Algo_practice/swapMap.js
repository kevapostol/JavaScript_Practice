
/**
 * swapMap - takes in an object and swaps it with the key and value then outputs it
 * @param {object} obj
 * Returns: none
 */
function swapMap( obj ) {
    // let myMap = new Map( [['first', 'Ariana'], ['myFunc', () => console.log( `im a func` )]] );
    let myMap = new Map();
    let retmap = {};

    // S1: Extract the Object
    for ( let key in obj ) {
        myMap.set( obj[key], key ); // swap -> kevin: 'first'
        retmap[obj[key]] = key;
    }

    // for ( let value of myMap ) {
    //     console.log( value );
    // }
    console.log( retmap );

}


swapMap( { first: 'Kevin', last: 'Apostol' } ) // {kevin: 'first', apostol: 'last'}

