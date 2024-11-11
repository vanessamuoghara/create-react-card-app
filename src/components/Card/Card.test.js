import { render, screen } from '@testing-library/react';
import Card from '../Card/Card';

const cardData = {
  rank: 'A',
  suit: 'hearts',
  imageLink:
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
  id: 'hearts_A',
};

describe('Card Component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Card
        rank={cardData.rank}
        suit={cardData.suit}
        imageLink={cardData.imageLink}
      />,
    );
  });

  test('displays the correct alt text for the card image', () => {
    const cardImage = screen.getByRole('img', {
      name: `${cardData.rank} of ${cardData.suit}`,
    });
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute(
      'alt',
      `${cardData.rank} of ${cardData.suit}`,
    );
  });

  test('displays the correct image for the card', () => {
    const cardImg = screen.getByRole('img'); // Get the image element
    expect(cardImg).toHaveAttribute('src', cardData.imageLink); // Check the image source
    expect(cardImg).toHaveAttribute(
      'alt',
      `${cardData.rank} of ${cardData.suit}`,
    ); // Check alt text
  });

  test('displays the correct rank text', () => {
    const cardRank = screen.getByText(cardData.rank);
    expect(cardRank).toBeInTheDocument();
  });
});
