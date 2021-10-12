for (var i = 0; i < 5; i = i + 1) {
    console.log("for loop");
}

/*
for (var i = 0; i < 5; i = i + 1) {
    console.log("entering body");
    if (i == 1) {
        console.log("inside if body");
        break;
    }
    console.log("Task");
    console.log("leaving body");
}
*/


for (var i = 0; i < 3; i = i + 1) {
    console.log("entering body");
    if (i == 1) {
        console.log("inside if body");
        continue;
    }
    console.log("Task");
    console.log("leaving body");
}



