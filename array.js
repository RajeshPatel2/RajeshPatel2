/*Array without loop*/
console.log("without loop");
var a = [10, 20, 30, 40, 50, 60];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);


/*Array with do-while loop*/
console.log("do-while loop");
var a = [10, 20, 30, 40, 50, 60];
var i = 0;
do {
    console.log(a[i]);
    i = i + 1;
} while (i < 6);


/*Array with while loop*/
console.log("while loop");
var a = [10, 20, 30, 40, 50, 60];
var i = 0;
while (i < 6) {
    console.log(a[i]);
    i = i + 1;
}


var a = [10, 20, 30, 40, 50, 60];
var i = 0;
while (i < a.length) {
    console.log(a[i]);
    i = i + 1;
}



/*Array with for loop*/
console.log("for loop");
a = [10, 20, 30, 40, 50, 60];
for (var i = 0; i < 6; i = i + 1) {
    console.log(a[i]);
}

/*Array with for-in loop*/
console.log("for-in loop");
a = [10, 20, 30, 40, 50, 60];
for (var i in a) {
    console.log(a[i]);
}

/*Array with for-of loop*/
console.log("for-of loop");
a = [10, 20, 30, 40, 50, 60];
for (var i of a) {
    console.log(i);
}

/*Array with for-in loop*/
console.log("for..in loop");
a = [10, 20, 30, 40, 50, 60];
a[9] = 90;
for (var i in a) {
    console.log("i = ", i);
    console.log("a[", i, "] = ", a[i]);
}

console.log("for..of")
var a = [10, 20, 30, 40, 50, 60];
a[9] = 90;
for (var v of a) {
    console.log(v);
}

console.log("while loop-array extensible")
var a = [10, 20, 30, 40, 50, 60];
a[9] = 90;
var i = 0;
while (i < a.length) {
    console.log(a[i]);
    i = i + 1;
}

/*find frequency of n*/
console.log("frequency of n")
var a = [10, 20, 30, 40, 50, 30, 30, 60];
n = 30;
i = 0;
for (var v of a) {
    if (n == v) {
        i = i + 1;
    }
}
console.log(i)


/*find max value*/
console.log("find max value")
var a = [10, 20, 30, 40, 50, 30, 30, 60];
max = a[0];
for (var v of a) {
    if (v > max) {
        max = v;
    }
}
console.log(max);


/*find a number in given array by do-while*/
console.log("find a number")
var a = [10, 20, 30, 10, 40, 50, 60];
var b = 10;
var i = 0;
var flag = false;

do {
    if (b == a[i]) {
        console.log("Number is Found");
        flag = true;
        break;
    }
    i++;

} while (i < a.length);

if (flag == false) {
    console.log("Sorry Number is Not Found :");
}

/*find a number in given array by while loop*/
console.log("find a number")
var a = [10, 20, 30, 10, 40, 50, 60];
var b = 10;
var i = 0;
var flag = false;
while (i < a.length) {
    if (b == a[i]) {
        console.log("Number is Found");
        flag = true;
        break;
    }
}
if (flag == false) {
    console.log("Sorry Number is Not Found :");
}