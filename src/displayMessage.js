// eslint-disable-next-line no-undef
const commentsPoke = document.querySelector('.comments');
const displayMessage = (array2) => {
  let str = '';
  // eslint-disable-next-line no-restricted-syntax, no-undef
  for (const comment of array2) {
    str += `
    <p>${comment.creation_date} ${comment.username}:  ${comment.comment}</p>
    `;
  }
  commentsPoke.innerHTML = str;
};

export default displayMessage;