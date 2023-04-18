function square(num){
    var a =  num * num;
    console.log(`area of square ${a}`);

}

function rectangle(a,b){
    var A =  a * b;
    console.log(`area of rectangle ${A}`);

}

function circle(r){
    const pi = Math.PI;
    var b = pi* r * r;
    console.log(`area of circle ${b}`);

}

module.exports = {
    square : square,
    rectangle : rectangle,
    circle: circle

}