/*
var obj = {
    a: 10,
    b: 20,

};
obj.c = 40;
console.log(obj);
obj.e = 50;
console.log(obj);
delete obj.b;
console.log(obj);
obj.f = 60;
console.log(obj);
obj.a = 50;
console.log(obj);
obj.a = 90;
console.log(obj);
Object.preventExtensions(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
*/



/*Create */
var obj2 = {
    a: 10,
    b: 20
};

var obj1 = Object.create(obj2);
console.log(obj1.a);
console.log(obj1.b);


/*Assign */
var obj2 = {
    a: 10,
    b: 20
};
var obj3 = {
    a: 100,
    d: 200
};
Object.defineProperty(obj2, 'a', {
    value: 89,
    enumerable: false,
});
Object.assign(obj1, obj2, obj3);
console.log(obj1);


/*computational property */
let a = "cat";
let b = { x: 70, Y: 80 };
let c = 90;
let d = "j";
let e = "k";


let obj4 = {
    [a]: 50,
    b: b,
    c: c,
    [d + e]: 120,
};
console.log(obj4);

/*spread operator */
let obj5 = {
    a: 10,
    b: 20,
};
let obj6 = {
    c: 30,
    d: 40,
};
let obj7 = { ...obj5, ...obj6 };
console.log(obj7);


