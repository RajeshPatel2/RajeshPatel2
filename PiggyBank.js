
/*
console.log("Piggy Bank");
var balance = 0;
var last_transection = 0;

function statement() {
    console.log("balance is=", balance);
    console.log("last transection is=", last_transection);
}
function deposit(amount) {
    if (amount > 0) {
        balance = balance + amount;
        last_transection = amount;
    }
    else {
        console.log("invalid Amount");
    }
}
function withdraw(amount) {
    if (amount > 0) {
        balance = balance - amount;
        last_transection = -amount;
    }
    else {
        console.log("invalid Amount");
    }
}

statement();
deposit(20);
statement();
withdraw(50);
statement();
*/
/*
console.log("Piggy Bank with object");
let pg1 = {
    balance: 0,
    lt: 0
};
function deposit(amount) {
    if (amount > 0) {
        pg1.balance = pg1.balance + amount;
        pg1.lt = amount;
    }
}
function withdraw(amount) {
    if (amount > 0 && amount <= pg1.balance) {
        pg1.balance = pg1.balance - amount;
        pg1.lt = -amount;
    }
}
function statement() {

    console.log("Balance: ", pg1.balance);
    console.log("Last Transaction: ", pg1.lt);

}
deposit(1000);
withdraw(500);
statement();
*/


/*
console.log("Piggy Bank with object with last 10 transections");
var pg1 = {
    balance: 0,
    lt: []
};
function deposit(amount) {
    if (amount > 0) {
        pg1.balance = pg1.balance + amount;
        pg1.lt.push(amount);
    }
}
function withdraw(amount) {
    if (amount > 0 && amount <= pg1.balance) {
        pg1.balance = pg1.balance - amount;
        pg1.lt.push(-amount);
    }
}
function statement() {
    let a = pg1.lt.length;
    console.log("Balance: ", pg1.balance);
    console.log("Last Transaction: ", pg1.lt[a - 1]);
    console.log("Last Ten Transections: ");

    for (let i = (a - 10); i < a; i++) {
        console.log(pg1.lt[i]);
    }

}
deposit(100);
withdraw(1);
deposit(2);
withdraw(3);
deposit(4);
withdraw(5);
deposit(6);
withdraw(7);
deposit(8);
withdraw(9);
deposit(10);
withdraw(11);
deposit(12);
withdraw(13);
deposit(14);
withdraw(15);
deposit(16);
withdraw(17);
statement();
*/


/*console.log("Multiple Piggy Bank with object");
var pg1 = {
    balance: 0,
    lt: 0
};
var pg2 = {
    balance: 0,
    lt: 0
};
function deposit1(amount) {
    pg1.balance = pg1.balance + amount;
    pg1.lt = amount;
}
function withdraw1(amount) {
    if (pg1.balance >= amount) {
        pg1.balance = pg1.balance - amount;
        pg1.lt = -amount;
    }
}
function statement1() {
    console.log("Balance = " + pg1.balance);
    console.log("Last Transction = " + pg1.lt);
}
function deposit2(amount) {
    pg2.balance = pg2.balance + amount;
    pg2.lt = amount;
}
function withdraw2(amount) {
    if (pg2.balance >= amount) {
        pg2.balance = pg2.balance - amount;
        pg2.lt = -amount;
    }
}
function statement2() {
    console.log("Balance = " + pg2.balance);
    console.log("Last Transction = " + pg2.lt);
}
deposit1(100);
withdraw1(50);
statement1();

deposit2(200);
withdraw2(100);
statement2();
*/
/*
console.log("Multiple Piggy Bank with object- Message Passing");
var pg1 = {
    balance: 0,
    lt: 0,
    deposit: deposit1,
    withdraw: withdraw1,
    statement: statement1
};
var pg2 = {
    balance: 0,
    lt: 0,
    deposit: deposit2,
    withdraw: withdraw2,
    statement: statement2
};
function deposit1(amount) {
    if (amount > 0) {
        pg1.balance = pg1.balance + amount;
        pg1.lt = amount;
    }
}
function withdraw1(amount) {
    if (amount <= pg1.balance) {
        pg1.balance = pg1.balance - amount;
        pg1.lt = -amount;
    }
}
function statement1() {
    console.log("Balance = " + pg1.balance);
    console.log("Last Transction = " + pg1.lt);
}
function deposit2(amount) {
    pg2.balance = pg2.balance + amount;
    pg2.lt = amount;
}
function withdraw2(amount) {
    if (pg2.balance >= amount) {
        pg2.balance = pg2.balance - amount;
        pg2.lt = -amount;
    }
}
function statement2() {
    console.log("Balance = " + pg2.balance);
    console.log("Last Transction = " + pg2.lt);
}
pg1.deposit(100);
pg1.withdraw(50);
pg1.statement();

pg2.deposit(200);
pg2.withdraw(100);
pg2.statement();
*/

/*
console.log("Multiple Piggy Bank with object- Procedural Modelling - Reuse");
var pg1 = {
    balance: 0,
    lt: 0
};
var pg2 = {
    balance: 0,
    lt: 0
};
function deposit(pg, amount) {
    if (amount > 0) {
        pg.balance = pg.balance + amount;
        pg.lt = amount;
    }
}
function withdraw(pg, amount) {
    if (amount <= pg.balance) {
        pg.balance = pg.balance - amount;
        pg.lt = -amount;
    }
}
function statement(pg) {

    console.log("balance is=", pg.balance);
    console.log("last transection is=", pg.lt);
}

deposit(pg1, 10);
deposit(pg2, 20);
withdraw(pg1, 5);
withdraw(pg2, 8);
statement(pg1);
statement(pg2);
*/



/*
console.log("Multiple Piggy Bank with object- This");
var pg1 = {
    balance: 0,
    lt: 0,
    deposit: deposit,
    withdraw: withdraw,
    statement: statement
};
var pg2 = {
    balance: 0,
    lt: 0,
    deposit: deposit,
    withdraw: withdraw,
    statement: statement
};
function deposit(amount) {
    this.balance = this.balance + amount;
    this.lt = amount;
}
function withdraw(amount) {
    this.balance = this.balance - amount;
    this.lt = -amount;
}
function statement() {
    console.log("balance is=", this.balance);
    console.log("last transection is=", this.lt);
}
pg1.deposit(100);
pg1.withdraw(50);
pg1.statement();

pg2.deposit(200);
pg2.withdraw(100);
pg2.statement();
*/

/*
let pg1 = {
    balance: 0,
    transactions: [],
    deposit: deposit,
    withdraw: withdraw,
    statement: statement,
};
function deposit(amount) {
    if (amount > 0) {
        this.balance += amount;
        this.transactions.push(amount);
    }
}
function withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push(-amount);
    }
}
function statement() {
    console.log("Balance: " + this.balance);
    console.log("Transection: " + this.transactions);
   /* value in for loop represent the values in array transactions,so we are copying the 
    value of array and value of this.transactions is syntex for copying array values.*/
/*for (let value of this.transactions) {
    console.log("Transaction: " + value);
}



pg1.deposit(100);
pg1.deposit(30);
pg1.deposit(40);
pg1.statement();

pg1.withdraw(35);
pg1.withdraw(10);
pg1.statement();
* /


/*
function Piggybank() {
    var obj = {
        balance: 0,
        lt: 0,
        deposit: deposit,
        withdraw: withdraw,
        statement: statement
    };
    return obj;
}

function deposit(amount) {
    this.balance = this.balance + amount;
    this.lt = amount;
}
function withdraw(amount) {
    if (this.balance >= amount) {
        this.balance = this.balance - amount;
        this.lt = -amount;
    }
}
function statement() {
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
}

var pg1 = Piggybank();
pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();

var pg2 = Piggybank();
pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();

var pg3 = Piggybank();
pg3.deposit(300);
pg3.statement();
pg3.withdraw(200);
pg3.statement();
pg3.withdraw(100);
pg3.statement();
*/

console.log("Object Modelling - new")

function PiggyBank() {
    this.balance = 0;
    this.lt = 0;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.statement = statement;
}
function deposit(amount) {
    this.balance = this.balance + amount;
    this.lt = amount;
}
function withdraw(amount) {
    if (this.balance >= amount) {
        this.balance = this.balance - amount;
        this.lt = -amount;
    }
}
function statement() {
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
}
var pg1 = new PiggyBank();

pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();

var pg2 = new PiggyBank();

pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();

var pg3 = new PiggyBank();

pg3.deposit(300);
pg3.statement();
pg3.withdraw(200);
pg3.statement();
pg3.withdraw(100);
pg3.statement();



console.log("Object Oriented Modelling - Prototype");
function deposit(v) {
    this.balance = this.balance + v;
    this.lt = v;
}
function withdraw(v) {
    if (this.balance >= v) {
        this.balance = this.balance - v;
        this.lt = -v;
    }
}
function statement() {
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
}
function PiggyBank() {
    this.balance = 0;
    this.lt = 0;
}
PiggyBank.prototype.deposit = deposit;
PiggyBank.prototype.withdraw = withdraw;
PiggyBank.prototype.statement = statement;

var pg1 = new PiggyBank();
pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();

var pg2 = new PiggyBank();
pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();

var pg3 = new PiggyBank();
pg3.deposit(300);
pg3.statement();
pg3.withdraw(200);
pg3.statement();
pg3.withdraw(100);
pg3.statement();