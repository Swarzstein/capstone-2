import commentsCounter from './commentsCounter.js';
// eslint-disable-next-line no-undef
const commentsPoke = document.querySelector('.comments');
const value = document.querySelector('.messageCount');
const displayMessage = (array2) => {
  let str = '';
  // eslint-disable-next-line no-restricted-syntax, no-undef
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const comment of array2) {
      str += `
      <div class = "comentsByPokemon"><p>${comment.creation_date} ${comment.username}:  ${comment.comment}</p></div>
      `;
    }
  // eslint-disable-next-line no-empty
  } catch (error) {
    // eslint-disable-next-line no-template-curly-in-string
    str = '';
  }
  commentsPoke.innerHTML = str;
  if (typeof array2.length !== 'number') {
    value.innerHTML = '<h2>(0)</h2>';
  } else {
    value.innerHTML = `<p>(${commentsCounter()})</p>`;
  }
};

export default displayMessage;