// Build a Card Counting Assistant
let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card == 10 || typeof(card) === "string") {
    count--;
  } else {
    count = count;
  }

  if (Math.sign(count) === 1) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(count);

console.log(cardCounter(0));
console.log(cardCounter(9));
console.log(cardCounter("J"));
console.log(cardCounter(2));
console.log(cardCounter(5));