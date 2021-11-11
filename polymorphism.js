/*
class A {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello from A");
  }
}

class B extends A {
  constructor(name) {
    super(name);
  }
}

// // var a = new A("Rajesh");
// // console.log(a.name);
// // a.sayHello();

// var b = new B("Raj");
// console.log(b.sayHello());
// // b.sayHello();
*/

class A {
  constructor() {
    this.a = "A";
    this.b = new B();
  }
  sayHello() {
    console.log("HI from BB");
  }
}

class B {
  constructor() {
    this.b = "B";
  }

  sayHello() {
    console.log("HI from B");
  }
}

var a = new A();
console.log(a.b.sayHello());
