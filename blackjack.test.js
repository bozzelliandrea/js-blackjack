const blackjack = require('./blackjack');


describe('Deck Of Cards', () => {
    const cards = blackjack.getCardsDeck();
    const deck = blackjack.deckShuffle([...cards]);
    
    it('check if the deck is ready', () => {
      expect(deck.length).toEqual(52);
    });

    it('check if the deck is shuffled and ready for play', () => {
        expect(deck).not.toEqual(cards);
        expect(deck.length).toEqual(cards.length)
    });

    const expectedHand = [deck[0], deck[1]];

    it('get a blackjack hand and check if the card was removed from the top of the deck', () => {
        expect(expectedHand).toEqual(blackjack.dealCards(deck, 2));
    });

    it('evaluate the hand points', () => {
        expect(blackjack.getHandPoints(['AC', '2S'])).toEqual(13);
        expect(blackjack.getHandPoints(['5D', 'TH'])).toEqual(15);
        expect(blackjack.getHandPoints(['AH', 'AS'])).toEqual(12);
    });
});