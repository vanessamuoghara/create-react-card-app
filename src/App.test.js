import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App, { shuffleArray } from './App';

describe('Card Game Functions', () => {
  it('removes the last card in the deck when drawn', async () => {
    render(<App />);

    const initialCards = await screen.findAllByTestId(/.+/);
    const initialCardCount = initialCards.length;

    fireEvent.click(screen.getByText('DRAW'));

    await waitFor(() => {
      const cardsAfterDraw = screen.getAllByTestId(/.+/);
      expect(cardsAfterDraw.length).toEqual(initialCardCount - 1); // Expect one less card
    });
  });

  describe('shuffleDeck function', () => {
    it('shuffles the deck of cards', async () => {
      render(<App />);

      const shuffleButton = screen.getByText(/shuffle/i);
      const initialCards = await screen.findAllByTestId(/.+/);

      fireEvent.click(shuffleButton);

      const shuffledCards = await screen.findAllByTestId(/.+/);
      expect(shuffledCards).not.toEqual(initialCards);
    });

    it('maintains the same number of cards after shuffling', async () => {
      render(<App />); // Render the App component here

      const shuffleButton = screen.getByText(/shuffle/i);
      const initialCards = await screen.findAllByTestId(/.+/);

      fireEvent.click(shuffleButton);

      const shuffledCards = await screen.findAllByTestId(/.+/);
      expect(shuffledCards.length).toBe(initialCards.length);
    });
  });

  describe('shuffleArray function', () => {
    it('shuffles the cards correctly', () => {
      const cards = [
        { id: '1', rank: 'A', suit: 'hearts' },
        { id: '2', rank: 'K', suit: 'hearts' },
        { id: '3', rank: 'Q', suit: 'hearts' },
      ];

      const shuffledCards = shuffleArray(cards);
      expect(shuffledCards).not.toEqual(cards);
      expect(shuffledCards.length).toBe(cards.length);
    });
  });
});
