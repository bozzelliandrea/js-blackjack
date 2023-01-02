const cardSuits = ["H","D","C","S"];
const cardFaces = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]

function getCardsDeck() {
    const deck = []
    for(let suit of cardSuits) {
        for(let face of cardFaces){
            deck.push(`${face}${suit}`)
        }
    }
    return deck;
}


function deckShuffle(deck){
    for (let i = 0; i < deck.length; i++) {
        // picks the random number between 0 and length of the deck
        let shuffle = Math.floor(Math.random() * (deck.length));
        
        //uses 3 buckets method to swap cards
        let temp = deck[i]; //holds one card in temp variable
        deck[i] = deck[shuffle]; 
        deck[shuffle] = temp; 
    }
    return deck;
}

function dealCards(deck, numberOfCards){
    const hand = [];

    for(let i=0; i<numberOfCards; i++){
        hand.push(deck.shift());
    }

    return hand;
}


function getHandPoints(hand){

    let points = 0;
    let haveAce = false;


    for(const card of hand){
        if(card[0] === 'A' && !haveAce) {
            haveAce = true;
            continue;
        } else if(haveAce && card[0] === 'A'){
            points+=1;
            continue;
        }

        if(card[0] === 'T' || card[0] === 'J' || card[0] === 'Q' || card[0] === 'K') {
            points+=10;
            continue;
        }

        points = points + parseInt(card[0]);
    }

    if(haveAce && points < 10)
        points = points + 11;

    return points;
}

module.exports = {
    getCardsDeck,
    deckShuffle,
    dealCards,
    getHandPoints
}