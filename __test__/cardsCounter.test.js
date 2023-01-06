/*
 * @jest-environment jsdom
 */

import counter from '../modules/cardsCounter.js';

describe('Count items', () => {
  test('Counting 4 cards', () => {
    let cards = '';
    for (let i = 0; i < 4; i += 1) {
      cards += '<div class="card"></div>';
    }
    document.body.innerHTML = cards;
    const cardsList = counter();
    expect(cardsList).toEqual(4);
  });
  test('Counting 10 cards', () => {
    let cards = '';
    for (let i = 0; i < 10; i += 1) {
      cards += '<div class="card"></div>';
    }
    document.body.innerHTML = cards;
    const cardsList = counter();
    expect(cardsList).toEqual(10);
  });
  test('Counting 20 cards', () => {
    let cards = '';
    for (let i = 0; i < 20; i += 1) {
      cards += '<div class="card"></div>';
    }
    document.body.innerHTML = cards;
    const cardsList = counter();
    expect(cardsList).toEqual(20);
  });
  test('Counting 0 cards', () => {
    const cards = '';
    document.body.innerHTML = cards;
    const cardsList = counter();
    expect(cardsList).toEqual(20);
  });
});