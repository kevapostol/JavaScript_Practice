// Write a JavaScript function to convert a string in abbreviated form

let abbrev_name = ( name ) => {
    const arrName = name.split( ' ' ); // Array ['Robin', 'Singh']

    const firstName = arrName[0]; // 'Robin'
    const lastName = arrName[1]; // 'Singh'

    return `${firstName} ${lastName.charAt( 0 )}.`
};
console.log( abbrev_name( "Robin Singh" ) );
