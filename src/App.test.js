import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

// describe('drawCard function', () => {
//   it('removes the last card in the deck when drawn', async () => {
//     render(<App />);

//     const initialCards = screen.getAllByTestId(/.+/).length;
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
