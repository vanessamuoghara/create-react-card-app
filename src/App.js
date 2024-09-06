import React from 'react';

import './App.css';
import Deck from './components/Deck/Deck';

//shuffle cards
const shuffleDeck = () => {
  for (let i = 0; i < Deck.length; i++) {
    let shuffle = Math.floor(Math.random() * Deck.length);
    let temp = Deck[i];
    Deck[i] = Deck[shuffle];
    Deck[shuffle] = temp;
  }
};
// const shuffledDeck = [...cards, ...cards]
//   .sort(() => Math.random() - 0.5)
//   .map((cards) => ({ ...cards, id: Math.random() }));

// setCards(shuffledDeck);
console.log('shuffleCards');

const drawCard = () => {
  console.log();
};
function App() {
  return (
    <div className="app">
      <h1>my deck of cards application</h1>
      <button className="button" onClick={shuffleDeck}>
        SHUFFLE
      </button>
      <button className="button" onClick={drawCard}>
        DRAW
      </button>
      <Deck />
    </div>
  );
}

export default App;
