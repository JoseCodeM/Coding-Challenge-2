let userInput = prompt("Type 'Deposit Money' or 'Withdraw Money' ")
let balance = 50;
if (userInput == 'Deposit Money') {
    var deposit = prompt("How much money would would you like to deposit?");
    var newBalance = Number(balance) + Number(deposit);
    alert(`Your new balance is: $${newBalance}!`)
    if(newBalance > 0){
        alert("You got monnneeeyy!!")
    } else {
        alert("Low Funds")
    }

} else if (userInput == 'Withdraw Money') {
    var withdraw = prompt("How much would you like to withdraw?");
    var newBalance = Number(balance) - Number(withdraw);
    alert(`Your new balance is: ${newBalance}`);
    if(newBalance > 0){
        alert("You got monnneeeyy!!")
    } else {
        alert("Low Funds")
    }
}

// var deposit = prompt("How much money would would you like to deposit?");

// var withdraw = prompt("How much would you like to withdraw?");

