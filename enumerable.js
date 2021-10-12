/*enumerable */
/*
var obj1 = {
    a: 10,
    b: 20,
    c: 30
}
console.log("Before");
for (let key in obj1) {
    console.log("Key = " + key);
    console.log("Value = " + obj1[key]);
}
Object.defineProperty(obj1, 'c', { value: 300, enumerable: false });
console.log("After");
for (let key in obj1) {
    console.log("Key = " + key);
    console.log("Value = " + obj1[key]);
}
console.log("c is now a  not a-enumerable property -> " + obj1.c);
*/


/*writable*/
/*
var obj1 = {
    a: 10,
    b: 20,
    c: 30
}

console.log("a = " + obj1.a);
console.log("b = " + obj1.b);
console.log("c = " + obj1.c);

obj1.a = 100;
obj1.b = 200;
obj1.c = 300;

console.log("a = " + obj1.a);
console.log("b = " + obj1.b);
console.log("c = " + obj1.c);

Object.defineProperty(obj1, 'b', { value: 3555, writable: false });

console.log("a = " + obj1.a);
console.log("b = " + obj1.b);
console.log("c = " + obj1.c);

obj1.a = 1000;
obj1.b = 2000;
obj1.c = 3000;

console.log("a = " + obj1.a);
console.log("b = " + obj1.b);
console.log("c = " + obj1.c);


console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));
console.log(Object.getOwnPropertyDescriptor(obj1, 'b'));
console.log(Object.getOwnPropertyDescriptor(obj1, 'c'));
*/


/*configurable */

var obj1 = {
    a: 10,
    b: 20,
    c: 30
}

console.log("Before");
console.log("a = " + obj1.a);
console.log("b = " + obj1.b);
console.log("c = " + obj1.c);

obj1.a = 100;
obj1.b = 200;
obj1.c = 300;

console.log("a = " + obj1.a);
console.log("b = " + obj1.b);
console.log("c = " + obj1.c);

Object.defineProperty(obj1, 'a', {
    value: 3, configurable: false,


});


// This is Equivalent to enumerable: false, writable: false, configurable: false
// Object.defineProperty( obj1, 'a', { value: 3 }); 


console.log("After");
// It will not work for a
obj1.a = 1000;
obj1.b = 2000;
obj1.c = 3000;

console.log("a = " + obj1.a);
console.log("b = " + obj1.b);
console.log("c = " + obj1.c);

// a will not be enumerable
console.log("Looping")
for (let key in obj1) {
    console.log(key + " = " + obj1[key]);
}

// This will not work
// Try to comment this and Run Again
Object.defineProperty(obj1, 'a', {
    value: 89,
    enumerable: false,
    writable: false,
    configurable: false
});


console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));
console.log(Object.getOwnPropertyDescriptor(obj1, 'b'));
console.log(Object.getOwnPropertyDescriptor(obj1, 'c'));