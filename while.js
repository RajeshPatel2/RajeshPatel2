var i = 0;
do {
    console.log("Hello");
    i = i + 1;
}
while (i < 5);


var i = 5;
do {
    console.log("Hi");
    i = i - 1;
}
while (i > 0)


var i = 5;
do {
    console.log("Hello World");
    i = i - 1;
}
while (i);

var i = 5;
do {
    console.log("post Decrement");
}
while (i--);


var i = 5;
do {
    console.log("pre Decrement");
}
while (--i);


var i = -5;
do {
    console.log("post increment");
}
while (i++);

var i = -5;
do {
    console.log("pre increment");
}
while (++i);



var i = 5;
do {
    console.log("Good");
}
while (i = i - 1);


var i = 6;
do {
    console.log("Great");
}
while (i = i - 2);

var i = 0;
while (i < 5) {
    console.log("While loop");
    i = i + 1
}

/*while loop without currly brackets*/
var i = 0;
while (i < 5)
    console.log("While loop");
i = i + 1


/*coomom error in while loop in js is to put currly brackets after while statment,there is no currly brack after while condition*/
var i = 0;
while (i < 5); {
    console.log("While loop");
    i = i + 1
}