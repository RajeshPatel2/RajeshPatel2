/*
var EventEmitter = require("events");
console.log("Welcome to EventEmitter");
var em1 = new EventEmitter();
em1.on('overflow', () => {
    console.log('I am overflow Listener');
});
em1.emit('overflow');
*/

/*
var EventEmitter = require("events");
console.log("Welcome to EventEmitter");
var em1 = new EventEmitter();
em1.on('overflow', () => {
    console.log('I am overflow Listener');
});
em1.emit('overflow');
em1.on('underflow', function (a, b) {
    console.log(a, b, this);
});
em1.emit('underflow', 10, 20);
*/

/*
var EventEmitter = require("events");
console.log("Welcome to EventEmitter");
var em1 = new EventEmitter();
em1.on('overflow', () => {
    console.log('I am overflow Listener');
});
em1.emit('overflow');
em1.on('underflow', function (a, b) {
    console.log(a, b);
});
em1.emit('underflow', 10, 20);
em1.emit('underflow', 30, 40);
em1.on('underflow', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
});
em1.emit('underflow', 50, 60);
console.log("Program Ends");
*/


/*
var EventEmitter = require("events");
console.log("Welcome to EventEmitter");
var myEmitter = new EventEmitter();
myEmitter.on('overflow', () => {
    console.log('I am overflow Listener');
});
myEmitter.emit('overflow');
myEmitter.on('underflow', function (a, b) {
    console.log(a, b,);
});
myEmitter.emit('underflow', 10, 20);
myEmitter.on('underflow', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
});
myEmitter.emit('underflow', 30, 40);
var m = 0;
myEmitter.on('overflow', () => {
    console.log(++m);
});
myEmitter.emit('overflow');
myEmitter.emit('overflow');
console.log("Program Ends");
*/
;