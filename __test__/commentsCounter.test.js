/*
 * @jest-environment jsdom
 */
import countMessages from '../modules/commentsCounter.js';

describe('Count Comments', () => {
  test('Count four Comments', () => {
    let comments = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      comments += '<div class= "comentsByPokemon"></div>';
    }
    document.body.innerHTML = comments;
    const result = countMessages();
    expect(result).toEqual(4);
  });
  test('Count six Comments', () => {
    let comments = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
      comments += '<div class= "comentsByPokemon"></div>';
    }
    document.body.innerHTML = comments;
    const result = countMessages();
    console.log(result);
    expect(result).toEqual(6);
  });
  test('Count one Comments', () => {
    let comments = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1; i++) {
      comments += '<div class= "comentsByPokemon"></div>';
    }
    document.body.innerHTML = comments;
    const result = countMessages();
    expect(result).toEqual(1);
  });
  test('Count zero Comments', () => {
    const comments = '';
    // eslint-disable-next-line no-plusplus
    document.body.innerHTML = comments;
    const result = countMessages();
    expect(result).toEqual(0);
  });
});
