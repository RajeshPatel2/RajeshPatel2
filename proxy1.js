/*
var t = {
    a:10,
    b:20
 };
 
 console.log(t.a);
 console.log(t.b);
 
 var h = {};
 
 var proxy = new Proxy(t,h);
 
 console.log(proxy.a);
 console.log(proxy.b);
 */

 /*
 var t = {
    a:10,
    b:20
    };
    
    console.log(t.a);
    console.log(t.b);
    
    var h = {
        get:(target,key) => {
            console.log("Trying to Access -> " + key);
            return target[key];
        }
    };
    
    var proxy = new Proxy(t,h);
    
    console.log(proxy.a);
    console.log(proxy.b);

*/

/*
var t = {
    a:10,
    b:20
    };
    var h = {
        get:(target,key) => {
            console.log("Trying to Access -> " + key);
            return target[key];
        },
        set:(target,key,value) => {
            console.log("Trying to Write -> " + key + " = " + value);
            return target[key] = value;
        }
    };
var proxy = new Proxy(t,h);
console.log(proxy.a);
console.log(proxy.b);
proxy.a = 100;
proxy.b = 200;
console.log(proxy.a);   
console.log(proxy.b);
*/

/*
var rabbit = {
    age:10
    };
var h = {
        get:(target,key) => {
            console.log("Trying to Access -> " + key);
            return target[key];
        }, 
        set:(target,key,value) => {
            console.log("Trying to Write -> " + key + " = " + value);
            if(key == "age" && value > 0)
            {
               return target[key] = value;
            }
            console.log(`Cannot Change State of ${key} with ${value}`);
        }
    };
var prabbit = new Proxy(rabbit,h);
console.log(prabbit.age);
prabbit.age = 15; 
console.log(prabbit.age);
prabbit.age = -10;
console.log(prabbit.age);
*/


/*
var rabbit = {
    age:10,
    _height: 5
    };
    var h = {
        get:(target,key) => {
            console.log("Trying to Access -> " + key);
            if(key == "_height")
            {
                console.log(`Invalid attepmt for accessing private variable ${key}`);
                return;
            }
            return target[key];
        },
        set:(target,key,value) => {
            console.log("Trying to Write -> " + key + " = " + value);
            if(key == "_height")
            {
                console.log(`Invalid attepmt for writing to private variable ${key} with ${value}`);
                return;
            }
            else if(key == "age" && value > 0)
            {
                return target[key] = value;
            }
            console.log(`Cannot Change State of ${key} with ${value}`);
        }
    };
    var prabbit = new Proxy(rabbit,h);
    console.log(prabbit.age);
    prabbit.age = 15;
    console.log(prabbit.age);
    prabbit.age = -10;
    console.log(prabbit._height);
    prabbit._height = 100;
    */

/*   
function f1(){
   let a = 10;
   let b = 20;
   let c = 30;
   console.log("a = " + a);
   console.log("b = " + b);
   console.log("c = " + c);
}
f1 = new Proxy(f1, {
    apply: (target,thisArg,ArgList) =>{
        console.log(`Entering ${target.name}`);
        target.call(thisArg,...ArgList);
        console.log(`Leaving ${target.name}`);
    }
})
f1();
f1();
f1();
*/



function PiggyBank() {
    this.balance = 0;
    this.lt = 0;
}
const PiggyCount = {
    objectCount : 0,
    construct(target, args) {
        console.log('PiggyBank Object Created');
        console.log(target);
        console.log(args);
        this.objectCount++;
        return new target(...args);
    }
};
PiggyBank = new Proxy(PiggyBank, PiggyCount);
let pg1 = new PiggyBank();
console.log(pg1);
let pg2 = new PiggyBank();
console.log(pg2);
let pg3 = new PiggyBank();
console.log(pg3);
console.log("Total Objects Created -> " + PiggyCount.objectCount);

