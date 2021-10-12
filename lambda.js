function Server(f) {
    const g = 70;
    console.log("Task 1");
    f(55);
    console.log("Task 3");
}

function Client1() {
    console.log("Entering Client1");
    Server(
        v => {
            console.log("Task 2 - v1");
            console.log(`Value = ${v}`);
        }
    );
    console.log("Leaving Client1");
}

function Client2() {
    console.log("Entering Client2");
    Server(
        v => {
            console.log("Task 2 - v2");
            console.log(`Value = ${v}`);
        }
    );
    console.log("Leaving Client2");
}

function Client3() {
    const x = 22;
    console.log("Entering Client3");
    Server(
        v => {
            console.log("Task 2");
            console.log(`Value = ${v + x}`);
        }
    );
    console.log("Leaving Client3");
}

Client1();
Client2();
Client3();

