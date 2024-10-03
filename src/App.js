import React, { useState } from 'react';
import './App.css';
import Deck from './components/Deck/Deck';
import suits from './images';

const App = () => {
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  console.log(suits, 'suits');

  const createDeck = () => {
    return suits.flatMap((suit) =>
      ranks.map((rank) => ({
        id: `${suit.suit}_${rank}`,
        imageLink: suit.imageLink,
        suit: suit.suit,
        rank: rank,
      })),
    );
  };

  const [cards, setCards] = useState(createDeck());
  const [drawnCardsDeck, setDrawnCardsDeck] = useState([]);
  // const [cardsData, setCardsData] = useState([]);

  const shuffleDeck = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    console.log('Deck shuffled');
  };

  const drawCard = () => {
    if (cards.length > 0) {
      const newCards = [...cards];
      const drawnCard = newCards.pop();
      console.log(drawnCardsDeck, 'drawncards');
      drawnCardsDeck.push(drawnCard);

      setCards(newCards);
      console.log(`Drew card: ${drawnCard.rank} of ${drawnCard.suit}`);
    } else {
      console.error('No cards left to draw');
    }
  };

  const resetDeck = () => {
    setCards(createDeck());
    setDrawnCardsDeck([]);
  };

  return (
    <div className="app">
      <h1>The House Of Cards</h1>
      <h2>Drawn Cards</h2>
      <Deck cards={drawnCardsDeck} />

      <button className="button" onClick={shuffleDeck}>
        SHUFFLE
      </button>
      <button className="button" onClick={drawCard}>
        DRAW
      </button>
      <button className="button" onClick={resetDeck}>
        RESET
      </button>
      {/* <button className="button" onClick={drawnDeck}>
        DRAWN CARDS
      </button> */}
      <Deck cards={cards} />
    </div>
  );
};
export default App;
