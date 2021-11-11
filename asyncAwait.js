console.log("async await");

async function f1() {
  console.log("inside f1 function");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("user resolved");
  return users;
}
f1();
console.log("hii");
