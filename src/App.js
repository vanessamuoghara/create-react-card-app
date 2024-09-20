import React, { useState } from 'react';
import './App.css';
import Deck from './components/Deck/Deck';

const App = () => {
  const suits = [
    {
      imageLink:
        'data:image/png;base64,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',
      suit: 'spades',
    },
    {
      imageLink:
        'data:image/png;base64,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',
      suit: 'clove',
    },

    {
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
      suit: 'heart',
    },
    {
      imageLink:
        'data:image/png;base64,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',
      suit: 'diamond',
    },
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
      console.log('No cards left to draw');
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
