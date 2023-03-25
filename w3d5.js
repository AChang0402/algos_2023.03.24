/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
  quarter: 25c
  dime: 10c
  nickel: 5c
  penny: 1c
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 51;
const expected2 = { quarter: 2, penny: 1 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents){
    if (cents<0){
        return "Sorry! You now owe ME"
    }
    var coins = {};
    var fullValue = Math.floor(cents/25);
    if (fullValue != 0){
        coins['quarter'] = fullValue;
        cents = cents%25;
    }
    fullValue = Math.floor(cents/10)
    if (fullValue != 0){
        coins['dime'] = fullValue;
        cents = cents%10;
    }
    fullValue = Math.floor(cents/5)
    if (fullValue != 0){
        coins['nickel'] = fullValue;
        cents = cents%5;
    }
    fullValue = Math.floor(cents/1)
    if (fullValue != 0){
        coins['penny'] = fullValue;
        cents = cents%1;
    }
    return coins;
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))


// RIOT

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return