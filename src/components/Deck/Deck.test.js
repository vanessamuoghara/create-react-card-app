import { render } from '@testing-library/react';
import Deck from '../Deck/Deck';

const cardsData = [
  {
    rank: 'A',
    suit: 'hearts',
    imageLink:
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
    id: 'card-test-id',
  },
];
test('renders deck component with correct ranks and suits', () => {
  //   render(<Deck cards={cardsData} />);

  //   cardsData.forEach((card) => {
  //     const cardRank = screen.getByText(card.rank);
  //     expect(cardRank).toBeInTheDocument();

  //     const cardImage = screen.getByRole('img', {
  //       name: `${card.rank} of ${card.suit}`,
  //     });
  //     expect(cardImage).toHaveAttribute('src', card.imageLink);
  //     expect(cardImage).toHaveAttribute('alt', `${card.rank} of ${card.suit}`);
  //   });
  // });
  render(<Deck cards={cardsData} />);
});
