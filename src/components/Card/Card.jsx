import React from 'react';
import './Card.css';

const Card = ({ rank, imageLink, suit }) => {
  // console.log(suit, 'cardSuit');
  return (
    <div className="card" data-testid={`${imageLink}_${rank}`}>
      <p className="rank">{rank}</p>
      <img className="suit" src={imageLink} alt={`${rank} of ${suit}`} />
    </div>
  );
};

export default Card;
