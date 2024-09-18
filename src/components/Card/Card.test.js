import { render, screen } from '@testing-library/react';
import Card from '../Card/Card';

const cardData = {
  rank: 'A',
  suit: 'hearts',
  imageLink:
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
  id: 'card-test-id',
};

test('renders card component with correct rank, suit and image link', () => {
  render(
    <Card
      rank={cardData.rank}
      suit={cardData.suit}
      data-testid={cardData.id}
      imageLink={cardData.imageLink}
    />,
  );

  const cardRank = screen.getByText(cardData.rank);
  expect(cardRank).toBeInTheDocument();

  const cardImage = screen.getByRole('img', {
    name: `${cardData.rank} of ${cardData.suit}`,
  });
  expect(cardImage).toHaveAttribute('src', cardData.imageLink);
  expect(cardImage).toHaveAttribute(
    'alt',
    `${cardData.rank} of ${cardData.suit}`,
  );
});
