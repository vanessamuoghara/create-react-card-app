import { render, screen } from '@testing-library/react';
import Card from '../Card/Card';

const cardData = {
  rank: 'A',
  suit: 'hearts',
  imageLink:
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
  id: 'hearts_A',
};

test.only('renders card component with correct rank, suit and image link', () => {
  render(
    <Card
      rank={cardData.rank}
      suit={cardData.suit}
      imageLink={cardData.imageLink}
    />,
  );

  // const cardRank = screen.getByText(cardData.rank);
  // expect(cardRank).toBeInTheDocument();

  const cardAltText = screen.getByDisplayValue(
    `${cardData.rank} of ${cardData.suit}`,
  );

  expect(cardAltText).toBe('A of hearts');
});
