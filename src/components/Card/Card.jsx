import React from 'react';
import './Card.css';

function Card({ suit, rank, displayText }) {
  console.log(suit, 'cardSuit');
  return (
    <div className="card">
      <p className="rank">{rank}</p>
      {displayText}
      <img className="suit" src={suit} alt="suit" />
    </div>
  );
}

export default Card;
