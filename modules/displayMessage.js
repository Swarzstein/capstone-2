import commentsCounter from './commentsCounter.js';

const commentsPoke = document.querySelector('.comments');
const value = document.querySelector('.messageCount');
const displayMessage = (array2) => {
  let str = '';
  let count = 0;
  try {
    array2.array.forEach((comment) => {
      let backgroundColor = '';
      if (count % 2 === 0) {
        backgroundColor = 'white';
      } else {
        backgroundColor = 'gray';
      }
      str += `
      <div class = "comentsByPokemon ${backgroundColor}" id=${count}><p>${comment.creation_date} ${comment.username}:  ${comment.comment}</p></div>
      `;
      count += 1;
    });
  } catch (error) {
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