import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
// import Card from './components/Card/Card';

// const cardData = [
//   {
//     rank: 'A',
//     suit: 'hearts',
//     imageLink:
//       'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
//     id: 'hearts_A',
//   },
//   {
//     rank: 'K',
//     suit: 'hearts',
//     imageLink:
//       'https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png',
//     id: 'hearts_K',
//   },
// ];

// describe('drawCard function', () => {
//   it('removes the last card in the deck when drawn', async () => {
//     render(<App />);
//     render(
//       <Card rank={Card.rank} suit={Card.suit} imageLink={Card.imageLink} />,
//     );

//     const initialCards = screen.getAllByTestId(
//       `${Card.suit}_${Card.rank}`,
//     ).length;
//     console.log('Initial cards:', initialCards);

//     fireEvent.click(screen.getByText('DRAW'));

//     await waitFor(() => {
//       const cardsAfterDraw = screen.getAllByTestId(/.+/);
//       console.log('Cards after draw:', cardsAfterDraw.length);

//       expect(cardsAfterDraw.length).toBe(initialCards - 1);
//     });
//   });
// });

describe('shuffleCard function', () => {
  it('shuffles the deck of cards', async () => {
    render(<App />);
    const shuffleButton = screen.getByText(/shuffle/i);
    const initialCards = await screen.findAllByTestId(/.+/);

    fireEvent.click(shuffleButton);

    const shuffledCards = await screen.findAllByTestId(/.+/);
    expect(shuffledCards).not.toEqual(initialCards);
  });
});
