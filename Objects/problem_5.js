// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder: V = πr^2h
// INPUT: 7, 4
// OPUTPUT: volume.1234

function Cylinder( radius, height ) {
    this.radius = radius;
    this.height = height;
    this.getVolume = function () {
        return Math.PI * Math.pow( this.radius, 2 ) * this.height;
    }
}

let myCyl = new Cylinder( 7, 4 );
console.log( myCyl.getVolume().toFixed( 4 ) );
