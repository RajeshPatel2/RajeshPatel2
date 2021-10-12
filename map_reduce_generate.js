/*
var a = [10, 20, 30];
console.log("Loop using foreach")
a.forEach(x => console.log(x * 2));
*/


/*
var a = [10, 20, 30];
console.log("Loop using foreach")

a.forEach(op1);
function op1(e) {
    console.log(e);
}
*/



/*
var a = [10, 20, 30, 40, 50, 60];
console.log("Loop using foreach")
a.forEach((e) => { console.log(e) });
a.filter((e) => e > 20).forEach((e) => console.log(e));
console.log("find");
var v = a.find((e) => e > 20);
console.log(v);
*/

/*
console.log("map Function");
var a = [10, 20, 30, 40, 50, 60, 70];
a.forEach(x => console.log(x));
a.filter(x => x > 30).forEach(x => console.log(x));
var v = a.find(x => x > 20);
console.log(v);
a.map(x => x * 3).forEach(x => console.log(x));
a.forEach(x => console.log(x));
var b = a.map(x => x * 2);
console.log("Printing b");
b.forEach(x => console.log(x));
*/

/*
var a = [10, 20, 30, 40, 50, 60, 70];
a.forEach(x => console.log(x));
a.filter(x => x > 30).forEach(x => console.log(x));
var v = a.find(x => x > 20);
console.log(v);
a.map(x => x * 3).forEach(x => console.log(x));
a.forEach(x => console.log(x));
var b = a.map(x => x * 2);
console.log("Printing b");
b.forEach(x => console.log(x));
var k = 5;
a.map(x => x + 1).map(y => y + k).map(x => x - 1).forEach(x => console.log(x))
*/


/*
var a = [10, 20, 30, 40, 50, 60, 70];
a.forEach(x => console.log(x));
a.filter(x => x > 30).forEach(x => console.log(x));
var v = a.find(x => x > 20);
console.log(v);
a.map(x => x * 3).forEach(x => console.log(x));
a.forEach(x => console.log(x));
var b = a.map(x => x * 2);
console.log("Printing b");
b.forEach(x => console.log(x));
console.log("Printing result of reduce");
console.log(a.reduce((acc, v) => acc + v));
console.log("Printed result of reduce");
var k = 5;
a.map(x => x + 1).map(y => y + k).map(x => x - 1).forEach(x => console.log(x));
var result = a.map(x => x * 2).reduce((acc, v) => acc + v, 0);
console.log("Result=" + result);
/*



/*
var a = Array.of(10, 20, 30, 40, 50, 60, 70);
a.forEach(x => console.log(x));
console.log("A");
a.slice(1, 3).forEach(x => console.log(x));
console.log("A1");
a.slice(0, 4).forEach(x => console.log(x));
console.log("A2");
a.slice(2).forEach(x => console.log(x));
console.log("A3");
a.slice(-3, -1).forEach(x => console.log(x));
console.log("A4");
var b = a.splice(2, 4);
console.log("Printing a");
a.forEach(x => console.log(x));
console.log("Printing b");
b.forEach(x => console.log(x));
*/


/*
console.log("generator");
function* f1() {
    var a = [10, 20, 30, 40, 50, 60];
    for (let v of a) {
        yield v;
    }
}
var g1 = f1();
for (let v of g1) {
    console.log(v);
}
*/


/*generator with while loop same as above*/
/*
console.log("generator");
function* f1() {
    var a = [10, 20, 30, 40, 50, 60];
    for (let v of a) {
        yield v;
    }
}
var g1 = f1();
for (let v of g1) {
    console.log(v);
}
var g2 = f1();
var d = g2.next();
console.log(d);
while (!d.done) {
    console.log(d.value);
    d = g2.next();
}
*/



var obj = {
    a: 10,
    b: 20,
    c: 30,
};
function* f1() {
    for (var v in this) {
        yield this[v];
    }
}
obj[Symbol.iterator] = f1;

for (let v of obj) {
    console.log(v);
}