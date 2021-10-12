/*
// stack in class
class stack{
    constructor(){
        this.data=[];
        this.top=0;

    }
    push(element){
       
        this.data[this.top]=element;
        this.top=this.top+1;
    }
    pop(){
        var element=this.data.pop();
        this.top=this.top-1;
        return element;
    }
    printStack(){
        this.data.forEach(element=>{
            console.log(element);
        })
    }
}
var stack1= new stack();
stack1.push(20);
stack1.push(50);
stack1.push(200);
stack1.push(500);
console.log("poped elemnt",stack1.pop());
stack1.printStack();
*/


//stack in object



var stack={
    data:[],
    top:0,
};

function push(elements) {
    stack.data[stack.top]=elements;
    stack.top=stack.top+1;
 
}
function pop() {
    var i=stack.data.pop();
    stack.top=stack.top-1;
    return i;
}
push(50);
push(500);
push(250);
var k=pop();
console.log(k);
console.log(stack.data);




var stk = new Array(10);
console.log(typeof(Array));
var st = 10;
var top = 9;
function push(v) {
    if (st == 0) {
        alert("Stack Overflow");
    }
    else {
        st = st - 1;
        stk[st] = v;
    }
}
function pop() {
    var temp;
    if (st == 10) {
        console.log("Stack underflow");
    }
    else {
        temp = stk[st];
        st = st + 1;
    }
    return temp;
}
function print() {
    var evolving = "";
    for (var i = st; i < stk.length; i++) {
        evolving = evolving + "\n" + stk[i] + "\n";
    }
    return evolving;
}
function pushHandler() {
    var v = document.getElementById("takeValue");
    if (st == 0) {
        alert("Stack Overflow");
        v.value = "";
    }
    else {
        var b = parseInt(v.value);
        push(b);
        v.value = "";
        v = document.getElementById("showStack");
        v.value = print();
    }
}
function popHandler() {
    if (st == 10) {
        alert("Stack Underflow");
    }
    else {
        var v = pop();
        v = document.getElementById("showStack");
        v.value = print();
    }
}

