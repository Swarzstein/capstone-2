// eslint-disable-next-line no-undef
const commentsPoke = document.querySelector('.comments');
const displayMessage = (array2) => {
  // eslint-disable-next-line no-restricted-syntax, no-undef
  for (const comment of array2) {
    commentsPoke.innerHTML += `
    <h3>COMMENTS</h3>
    <p>Likes: ${comment.username}</p>
    <p>Comment: ${comment.comment}</p>
    `;
  }
};

export default displayMessage;