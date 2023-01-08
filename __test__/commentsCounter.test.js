/*
 * @jest-environment jsdom
 */
import countMessages from '../modules/commentsCounter.js';

describe('Count Comments', () => {
  test('Count four Comments', () => {
    let comments = '';
    for (let i = 0; i < 4; i + 1) {
      comments += '<div class= "comentsByPokemon"></div>';
    }
    document.body.innerHTML = comments;
    const result = countMessages();
    expect(result).toEqual(4);
  });
  test('Count six Comments', () => {
    let comments = '';
    for (let i = 0; i < 6; i + 1) {
      comments += '<div class= "comentsByPokemon"></div>';
    }
    document.body.innerHTML = comments;
    const result = countMessages();
    expect(result).toEqual(6);
  });
  test('Count one Comments', () => {
    let comments = '';
    for (let i = 0; i < 1; i + 1) {
      comments += '<div class= "comentsByPokemon"></div>';
    }
    document.body.innerHTML = comments;
    const result = countMessages();
    expect(result).toEqual(1);
  });
  test('Count zero Comments', () => {
    const comments = '';
    document.body.innerHTML = comments;
    const result = countMessages();
    expect(result).toEqual(0);
  });
});
