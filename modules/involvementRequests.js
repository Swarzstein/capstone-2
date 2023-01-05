const giveLike = (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dxesV5XBQw7wdwm2FAfB/likes', {
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
  const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dxesV5XBQw7wdwm2FAfB/likes');
  const response = await request.json();
  return response.result;
};

// eslint-disable-next-line camelcase
const postComment = async (id, userName, comment) => {
  const apiN = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dxesV5XBQw7wdwm2FAfB/comments/';
  const lead = {
    item_id: id,
    username: userName,
    comment,
  };
  await fetch(await apiN, {
    method: 'POST',
    body: JSON.stringify(lead),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((data) => console.log(data + id));
};

const getComments = async (id) => {
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dxesV5XBQw7wdwm2FAfB/comments/${id}`);
  const response = await request.json();
  return response;
};

export {
  giveLike, getLikes, postComment, getComments,
};