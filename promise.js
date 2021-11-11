//let p = new Promise(()=>{});
//console.log(p);

//let p = new Promise(resolve =>resolve (8));
//console.log(p);

//let p = new Promise((resolve,reject)=> reject(3));
//console.log(p);

//let p = new Promise((resolve,reject)=> {resolve(30);reject(-3);resolve(8);});
//console.log(p);

//stage 5
/*
let p = new Promise((resolve, reject) => {
  console.log("Entering Executor");
  reject(-3);
  console.log("Leaving Executor");
});
console.log(p);
let q = p.catch((e) => {
  console.log("In Catch");
  console.log(e);
  console.log("Leaving catch");
  return;
});
console.log(p);
console.log(q);
setImmediate(() => {
  console.log("Entering setImmediate");
  console.log("Leaving SetImmediate");
  console.log("q is ", q);
});
console.log("loop ends");
*/

/*
let p = new Promise(
   (resolve, reject) => {
       console.log("Entering Executor");
       resolve(3);
       console.log("Leaving Executor");
   }
).then((e)=>{
   console.log("Entering SuccessHandler");
   console.log(e);
   console.log("Leaving SuccessHandler");
   return 7;
})

console.log(p);
*/

/*
//stage 6
let p = new Promise((e, f) => {
  console.log("Entering Executor");
  e(3);
  console.log("Leaving Executor");
}).then((e) => {
  console.log("Entering SuccessHandler");
  console.log(e);
  console.log("Leaving SuccessHandler");
  return 7;
});
console.log(p);
process.nextTick(() => {
  console.log("Entering ProcessTick");
  console.log(p);
  console.log("Leaving ProcessTick");
});
setImmediate(() => {
  console.log("Entering SetImmediate");
  console.log(p);
  console.log("Leaving SetImmediate");
});
console.log("loop Ends");
*/

/*
//Stage 7
let fs = require("fs");

console.log("Before Executor");
function executor(resolve, reject) {
  console.log("Entering work");
  fs.readFile("./input1.txt", "utf8", (err, data) => {
    if (err) {
      console.log("This is err of work");
      reject(err);
    } else {
      console.log("This is data of work");
      resolve(data);
    }
  });
}
console.log("After executor");
let fp = new Promise(executor).then(
  (value) => {
    console.log("success" + value);
  },
  (reason) => {
    console.log("failed " + reason);
  }
);
console.log("End of Script");
*/

//stage 8
let fs = require("fs");
let fs1 = require("fs/promises");

async function work1(n) {
  console.log("Entering work1");
  data = await fs1.readFile(n, "utf-8");
  console.log(data);
  console.log("That ends work1");
}
work1("./Input.txt");
console.log("Ends Loop");
