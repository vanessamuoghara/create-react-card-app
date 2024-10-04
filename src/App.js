import React, { useState } from 'react';
import './App.css';
import Deck from './components/Deck/Deck';
import spades from './images/spades.png';
import cloves from './images/cloves.png';
import hearts from './images/hearts.png';
import diamonds from './images/diamonds.png';

export const shuffleArray = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array to shuffle');
  }
  return [...array].sort(() => Math.random() - 0.5);
};

const App = () => {
  const suits = [
    { imageLink: spades, suit: 'spades' },
    { imageLink: cloves, suit: 'cloves' },
    { imageLink: hearts, suit: 'hearts' },
    { imageLink: diamonds, suit: 'diamonds' },
  ];

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

  const shuffleDeck = () => {
    const shuffledCards = shuffleArray(cards);
    setCards(shuffledCards);
  };

  const drawCard = () => {
    console.log('drawCard called');
    console.log('Current cards before draw:', cards.length);

    if (cards.length > 0) {
      const newCards = [...cards];
      const drawnCard = newCards.pop();
      setDrawnCardsDeck((prevDeck) => [...prevDeck, drawnCard]);
      setCards(newCards);
      console.log('Drew card:', drawnCard);
      console.log('Remaining cards after draw:', newCards.length);
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
        Shuffle
      </button>
      <button className="button" onClick={drawCard}>
        Draw
      </button>
      <button className="button" onClick={resetDeck}>
        Reset
      </button>
      <Deck cards={cards} />
      {cards.length === 0 && <p>No cards left to draw!</p>}
    </div>
  );
};

export default App;
