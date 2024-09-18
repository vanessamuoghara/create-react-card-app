/* eslint-disable no-undef */
import React from 'react';
import Card from '../Card/Card';
import './Deck.css';

const Deck = ({ apples }) => {
  return (
    <div className="deck-container">
      {apples.map((card) => (
        <Card
          key={`${card.suit}_${card.rank}`}
          rank={card.rank}
          suit={card.suit}
          data-testid={card.id}
          imageLink={card.imageLink}
        />
      ))}
    </div>
  );
};

export default Deck;
