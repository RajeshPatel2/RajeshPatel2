/*
class Queue {
    constructor() {
       this.data = [];
    }
    
    enqueue(element) {
       this.data.push(element);
    }
  
    dequeue() {
       if(this.data.length > 0) { 
           return this.data.shift();
       } else {
           return 'Underflow situation';
       }
    }
    
    printStack(){
        this.data.forEach(element=>{
            console.log(element);
        })
    }

 }
 var Q1=new Queue;
 Q1.enqueue(20);
 Q1.enqueue(50);
 Q1.enqueue(200);
 Q1.enqueue(500);
 console.log("dequeue elemnt",Q1.dequeue());
 Q1.printStack();

 */

 var queue={
     data:[],
     top:0,//last elment(we can say tail also)
     bottom:0,//first element(we can say head also)
 };
 function enqueue(element) {
     queue.data[queue.top]=element;
     queue.top=queue.top+1;
 }
 function dequeue() {
    var i=queue.data.shift();
    queue.bottom=queue.bottom+1;
    return i;
 }
 enqueue(50);
 enqueue(500);
 enqueue(250);
 var k=dequeue();
 console.log(k);
 console.log(queue.data);