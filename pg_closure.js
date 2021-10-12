function PiggyBank() {
    var balance = 0;
    var lt = 0;
    function Deposit(amount) {
        balance = balance + amount;
        lt = amount;
    }

    function Withdraw(amount) {
        balance = balance - amount;
        lt = -amount;
    }
    function Statement() {
        console.log("balance is=" + balance);
        console.log("last transection is=" + lt);
    }
    var obj = {
        deposit: Deposit,
        withdraw: Withdraw,
        statement: Statement
    };
    return obj;
}

var pg1 = PiggyBank();
pg1.deposit(100);
pg1.withdraw(50);
pg1.statement();