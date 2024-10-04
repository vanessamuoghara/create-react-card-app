import { render, screen } from '@testing-library/react';
import Deck from './Deck';

const cardsData = [
  {
    rank: 'A',
    suit: 'hearts',
    imageLink:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
    id: 'hearts_A',
  },
  {
    rank: 'K',
    suit: 'hearts',
    imageLink:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
    id: 'hearts_K',
  },
];
test('renders deck component with correct ranks and suits', () => {
  render(<Deck cards={cardsData} />);

  const cardRank = screen.getByTestId('hearts_A');
  expect(cardRank).toBeInTheDocument();
});
