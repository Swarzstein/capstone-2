const giveLike = (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abc234/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const getLikes = async () => {
  const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abc234/likes');
  const response = await request.json();
  return response.result;
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