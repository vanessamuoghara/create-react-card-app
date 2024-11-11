import React from 'react';
import './Card.css';

const Card = ({ rank, imageLink, suit }) => {
  return (
    <div className="card" data-testid={`${suit}_${rank}`}>
      <p className="rank">{rank}</p>
      <img className="suit" src={imageLink} alt={`${rank} of ${suit}`} />
    </div>
  );
};

export default Card;
