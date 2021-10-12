//let p = new Promise(()=>{});
//console.log(p);

//let p = new Promise(resolve =>resolve (8));
//console.log(p);

//let p = new Promise((resolve,reject)=> reject(3));
//console.log(p);

//let p = new Promise((resolve,reject)=> {resolve(30);reject(-3);resolve(8);});
//console.log(p);


/*
let p = new Promise(
    (resolve,reject) => {
        console.log("Entering Executor");
        reject(-3);
        console.log("Leaving Executor");
    }
 );
 console.log(p);
 let q = p.catch(e => {
    console.log("In Catch");
    console.log(e)
    console.log("Leaving catch");
    return ;
 });
 console.log(p);
 console.log(q);
 setImmediate(() => {
    console.log("Entering setImmediate");
    console.log("Leaving SetImmediate");
    console.log("q is ", q);
 })
*/

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