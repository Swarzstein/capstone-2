// eslint-disable-next-line no-undef
const commentsPoke = document.querySelector('.comments');
const displayMessage = (array2) => {
  let str = '';
  // eslint-disable-next-line no-restricted-syntax, no-undef
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const comment of array2) {
      str += `
      <p>${comment.creation_date} ${comment.username}:  ${comment.comment}</p>
      `;
    }
  // eslint-disable-next-line no-empty
  } catch (error) {
    str = '';
  }

  commentsPoke.innerHTML = str;
};

export default displayMessage;