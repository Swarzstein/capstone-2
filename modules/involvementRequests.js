const giveLike = (id) => {
  const request = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cFV33JHlazRsWqnKALlW/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return request.status;
};

const getLikes = async () => {
  const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cFV33JHlazRsWqnKALlW/likes');
  const response = request.json();
  return response;
};

const postComment = (itemId, userName, theComment) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abc234/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: userName,
      comment: theComment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const getComments = async () => {
  const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abc234/comments');
  const response = await request.json();
  return response.result;
};

export {
  giveLike, getLikes, postComment, getComments,
};