const blackjack = require('./blackjack');

console.log("Welcome to the table, let's make some money");

const deck = blackjack.deckShuffle(blackjack.getCardsDeck());

const p1Hand = blackjack.dealCards(deck,2);
const p2Hand = blackjack.dealCards(deck,2);

console.log(`Player 1 hand: ${p1Hand}`);
console.log(`Player 2 hand: ${p2Hand}`);

const p1Points = blackjack.getHandPoints(p1Hand);
const p2Points = blackjack.getHandPoints(p2Hand);


if(p1Points > p2Points) {
    console.log('Player 1 win, nice money for tonight');
}
else if(p1Points < p2Points) {
    console.log('Player 2 win, say hi to your wife huh');
}
else {
    console.log('table stays light tonight');
}