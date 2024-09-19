import React from 'react';
import Card from '../Card/Card';
import './Deck.css';

const Deck = ({ cards }) => {
  console.log(cards, 'cardsData');
  if (!cards || !Array.isArray(cards)) {
    return <div>No cards available</div>;
  }
  return (
    <div className="deck-container">
      {cards.map((card) => (
        <Card
          key={`${card.suit}_${card.rank}`}
          rank={card.rank}
          suit={card.suit}
          imageLink={card.imageLink}
        />
      ))}
    </div>
  );
};

export default Deck;
