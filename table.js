const blackjack = require('./blackjack');

function createTable() {
    return {
        players: [],
        cards: blackjack.getSortedCards()
    }
}

function addPlayer(table, name){
    table.players.push(name);
    return table;
}

module.exports = {
    createTable,
    addPlayer
}