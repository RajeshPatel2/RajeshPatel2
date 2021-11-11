/*
console.log("Stage 1");
let obj1 = {
    a: 10,
    b: 20
};
let obj2 = {
    c: 30,
    d: 40
};

console.log(obj1.a);
console.log(obj1.b);
console.log(obj2.c);
console.log(obj2.d);
*/
/*
console.log("Stage 2");
let obj1 = {
    a: 10,
    b: 20
};
let obj2 = {
    c: 30,
    d: 40
};
obj2.__proto__ = obj1;
console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2")
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);
*/
/*
let obj1 = {
    a: 10,
    b: 20
};

let obj2 = {
    c: 30,
    d: 40
};

let obj3 = {
    e: 50,
    f: 60,

};

obj2.__proto__ = obj1;
obj3.__proto__ = obj1;
console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);
*/
/*
let obj1 = {
    a: 10,
    b: 20
};

let obj2 = {
    c: 30,
    d: 40
};

let obj3 = {
    e: 50,
    f: 60,

};

obj2.__proto__ = obj1;
obj3.__proto__ = obj1;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);

obj1.a = 99;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);
*/

/*
let obj1 = {
    a: 10,
    b: 20
};

let obj2 = {
    c: 30,
    d: 40
};

let obj3 = {
    e: 50,
    f: 60,
    __proto__: obj1
};

obj2.__proto__ = obj1;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);

obj1.a = 99;
obj2.a = 110;
obj3.b = 220;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);
*/

/*
let obj1 = {
    a: 10,
    b: 20
};
let obj2 = {
    c: 30,
    d: 40
};
let obj3 = {
    e: 50,
    f: 60,
};

obj2.__proto__ = obj1;
obj3.__proto__ = obj2;

obj1.a = 99;
obj2.a = 110;
obj3.b = 220;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.c);
console.log(obj3.d);
console.log(obj3.e);
console.log(obj3.f);
*/

/*
let obj1 = {
    a: 10,
    b: 20
};

let obj2 = {
    c: 30,
    d: 40
};

let obj3 = {
    e: 50,
    f: 60,
    __proto__: obj1
};

obj2.__proto__ = obj1;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);

obj1.a = 99;
obj2.a = 110;
obj3.b = 220;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);
*/

/*
let obj1 = {
    a: 10,
    b: 20
};
let obj2 = {
    c: 30,
    d: 40
};
let obj3 = {
    e: 50,
    f: 60,
};

obj2.__proto__ = obj1;
obj3.__proto__ = obj2;

obj1.a = 99;
obj2.a = 110;
obj3.b = 220;
obj1.w = 500;
delete obj1.a;
delete obj1.b;
delete obj2.c;
delete obj3.d;
delete obj3.e;

console.log("OBJ1");
console.log(obj1.a);
console.log(obj1.b);
console.log(obj1.w);

console.log("OBJ2");
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);
console.log(obj1.w);

console.log("OBJ3");
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.c);
console.log(obj3.d);
console.log(obj3.e);
console.log(obj3.f);
console.log(obj1.w);
*/

/*
function deposit(amount) {
    this.balance = this.balance + amount;
    this.lt = amount;
}
function withdraw(amount) {
    if (this.balance >= amount) {
        this.balance = this.balance - amount;
        this.lt = -amount;
    }
}
function statement() {
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
}
var base = {
    deposit: deposit,
    withdraw: withdraw,
    statement: statement
};
var pg1 = {
    balance: 0,
    lt: 0,
    __proto__: base
};
var pg2 = {
    balance: 0,
    lt: 0,
    __proto__: base
};
pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();


pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();
*/

/*
var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    sp1: { }
};
var obj2 = {
    d: 4,
    e: 5,
    f: {}

};
var obj3 = {
    g: 7,
    h: 8,
    i: 9

};
obj1.sp1 = obj2;
obj2.sp2 = obj3;
obj1.sp2 = obj3;
obj3.sp3 = obj1;
console.log(obj1.sp2.i);
console.log(obj1.sp1.sp2.i);
console.log(obj2.sp2.i);
console.log(obj1.sp2.sp3.c);
console.log(obj1);
console.log(derived.hasOwnProperty('e'));
*/

/*
var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    m1: f1,
    m2: f2
};

var obj2 = {
    a: 10,
    b: 20,
    c: 30,
    m1: f1,
    m2: f2
};

function f1() {
    console.log("entering f1");
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
    console.log("leaving f1");
}
function f2() {
    console.log("entering f2");
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
    console.log("leaving f2");
}
obj1.m1 = f1;
obj1.m2 = f2;
obj2.m1 = f1;
obj2.m2 = f2;
obj1.m1();
obj2.m1();
obj1.m2();
obj2.m2();
*/
