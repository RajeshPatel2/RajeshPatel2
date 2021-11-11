/*
console.log("FUNCTION AS A CLASS");

function PiggyBank() {
    this.balance = 0;
    this.lt = 0;
}
PiggyBank.prototype.deposit = function (v) {
    if (v > 0) {
        this.balance += v;
        this.lt = v;
    }
};
PiggyBank.prototype.withdraw = function (v) {
    if (v > 0 && v <= this.balance) {
        this.balance -= v;
        this.lt = -v;
    }
};
PiggyBank.prototype.statement = function () {
    console.log("Balance = " + this.balance);
    console.log("Last Transaction = " + this.lt);
};

var pg1 = new PiggyBank();
pg1.statement();
pg1.deposit(100);
pg1.deposit(75);
pg1.deposit(200);
pg1.statement();
pg1.withdraw(200);
pg1.statement();
*/

/*
console.log("Class");
class PiggyBank {
    constructor() {
        this.balance = 0;
        this.lt = 0;
    }
}
var pg1 = new PiggyBank();
console.log(pg1);
*/

/*
class PiggyBank {
    constructor(balance) {
        this.balance = balance;
        this.lt = balance;
    }
}

var pg1 = new PiggyBank(1000);
console.log(pg1);
*/

/*
console.log("METHODS");
class PiggyBank {
    constructor() {
        this.balance = 0;
        this.lt = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.lt = amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.lt = -amount;
        }
    }

    statement() {
        console.log("Balance = " + this.balance);
        console.log("Last Transaction = " + this.lt);
    }
}

var pg1 = new PiggyBank();
pg1.deposit(100);
pg1.deposit(50);
pg1.statement();
pg1.withdraw(25);
pg1.statement();
*/

console.log("PROPERTIES");
class PiggyBank {
  constructor() {
    this._balance = 0;
    this._lt = 0;
  }
  get balance() {
    return this._balance;
  }
  set_balance(val) {
    if (val >= 0) {
      this._balance = val;
      this._lt = val;
    }
  }
  deposit(v) {
    if (v > 0) {
      this._balance += v;
      this._lt = v;
    }
  }
  withdraw(v) {
    if (v > 0 && v <= this._balance) {
      this._balance -= v;
      this._lt = -v;
    }
  }
  statement() {
    console.log("Balance = " + this._balance);
    console.log("Last Transaction = " + this._lt);
  }
}
var pg1 = new PiggyBank();
pg1.set_balance(500);
console.log("Property Balance = " + pg1.balance);
pg1.statement();
pg1.withdraw(25);
pg1.statement();

/*
console.log("Static");
class PiggyBank {
    constructor() {
        if (PiggyBank.count === undefined) PiggyBank.count = 0;
        PiggyBank.count++;
        this.balance = 0;
        this.lt = 0;
    }
    deposit(v) {
        if (v > 0) {
            this.balance += v;
            this.lt = v;
        }
    }
    withdraw(v) {
        if (v > 0 && v <= this.balance) {
            this.balance -= v;
            this.lt = -v;
        }
    }
    statement() {
        console.log("Balance = " + this.balance);
        console.log("Last Transaction = " + this.lt);
    }
    static printObjectCount() {
        console.log("This is a Static Method");
        console.log("Object Count = " + PiggyBank.count);
    }
}
var pg1 = new PiggyBank();
var pg2 = new PiggyBank();
var pg3 = new PiggyBank();

PiggyBank.printObjectCount();
*/

/*
console.log("Method Chaining - Fluent Interface");
function deposit(v) {
  this.balance = this.balance + v;

  this.lt = v;

  return this;
}

function withdraw(v) {
  if (this.balance >= v) {
    this.balance = this.balance - v;

    this.lt = -v;
  }

  return this;
}

function statement() {
  console.log("Balance = " + this.balance);

  console.log("Last Transction = " + this.lt);

  return this;
}

function PiggyBank() {
  this.balance = 0;

  this.lt = 0;
}

PiggyBank.prototype.deposit = deposit;

PiggyBank.prototype.withdraw = withdraw;

PiggyBank.prototype.statement = statement;

console.log("Behold the chaining");

var pg1 = new PiggyBank();

pg1.deposit(100).statement().withdraw(50).statement().withdraw(10).statement();

var pg2 = new PiggyBank();
pg2.deposit(200).statement().withdraw(100).statement().withdraw(50).statement();

var pg3 = new PiggyBank();

pg3
  .deposit(300)
  .statement()
  .withdraw(200)
  .statement()
  .withdraw(100)
  .statement();
  */
