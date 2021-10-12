function f1() {
    console.log("Entering function");
    console.log("Leaving function");
}
f1();

/* Multiple referncre variable pointing to one fn def. */
console.log("Multiple referncre variable pointing to one fn def");
function f1() {
    console.log("Entering function");
    console.log("Leaving function");
}
f1();
var f2 = f1;
f2();
var f3 = f2;
f3();

/* addition with functions */
console.log("addition with functions ");
function sum(a, b) {
    console.log("entering fn");
    var sum = a + b;
    console.log("sum is=", sum);

    console.log("leaving fn");
}
sum(5, 6)

function sum(a, b = 10) {
    console.log("entering fn");
    var sum = a + b;
    console.log("sum is=", sum);

    console.log("leaving fn");
}
sum(5);


/*  functions spread operator */
console.log(" functions spread operator ");
var ar = [10, 20, 30];
function sum(a, b, c) {
    console.log("entering fn");
    var sum = a + b + c;
    console.log("sum is=", sum);
    console.log("leaving fn");
}
sum(...ar);

/*  functions with return operator */
console.log(" functions with return operator ");

function sum(a, b) {
    console.log("entering fn");
    var r = a + b;
    return r;
    console.log("leaving fn");
}
let result = sum(10, 60);
console.log("sum is=", result);

/*  functions with argument array */
console.log(" functions with argument array ");
function sum() {
    console.log("entering fn");
    var r = arguments[0] + arguments[1];
    console.log("leaving fn");
    return r;
}
var result1 = sum(20, 60);
console.log("sum is=", result1);


/*  functions with argument array and for loop */
console.log(" functions with argument array and for ");
function sum() {
    let r = 0;
    console.log("Entering function");
    for (let i = 0; i < arguments.length; i++) {
        r = r + arguments[i];
    }
    console.log("Leaving function");
    return r;
}
var result1 = sum(10, 20, 30, 40);
console.log("The sum is --> " + result1);


function f1(a, b) {
    console.log("Entering function");
    let sum = a + b;
    let average = sum / 2;
    let r = [sum, average]
    console.log("Leaving function");
    return r;
}

let result0 = f1(10, 20);
let [v1, v2] = f1(10, 20);

console.log("The result is --> " + result0);

console.log("The sum is --> " + v1);
console.log("The average is --> " + v2);



function sum(a, b) {
    console.log("Entering function");
    let r = a + b;
    console.log("Leaving function");
    return r;
}

let c1 = sum(1, 2);
let c2 = sum(c1, sum(3, 4));
let c3 = sum(sum(1, 2), sum(sum(1, 2), sum(1, 2)));
let c4 = c3 + sum(1, 1) + sum(c2, sum(sum(4, 5), sum(6, 7)));

console.log("The value of c1 is --> ", c1);
console.log("The value of c2 is --> ", c2);
console.log("The value of c3 is --> ", c3);
console.log("The value of c4 is --> ", c4);



/**/
function percentage(p, c, m) {
    var marks = p + c + m;
    var percentage = marks * 100 / 300;
    return percentage;
}
var result1 = percentage(75, 85, 90);
var result2 = percentage(50, 50, 50);
var result3 = percentage(85, 90, 95);
console.log("result1=" + result1);
console.log("result2=" + result2);
console.log("result3=" + result3);