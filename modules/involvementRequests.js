const keyApi = 'zHktWsaRXYV3xlOoINt8';
const giveLike = (id) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${keyApi}/likes`, {
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
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${keyApi}/likes`);
  const response = await request.json();
  return response.result;
};

const getComments = async (id) => {
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${keyApi}/comments?item_id=${id}`);
  const response = await request.json();
  if (response.status !== 400) {
    return response;
  } return [];
};

// eslint-disable-next-line camelcase
const postComment = async (id, userName, yourComment) => {
  const apiN = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${keyApi}/comments/`;
  const lead = {
    item_id: id,
    username: userName,
    comment: yourComment,
  };
  const request = await fetch(await apiN, {
    method: 'POST',
    body: JSON.stringify(lead),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = request.status;
  return response;
};

export {
  giveLike, getLikes, postComment, getComments,
};
