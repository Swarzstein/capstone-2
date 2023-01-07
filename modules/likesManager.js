import { getLikes, giveLike } from './involvementRequests.js';

const likesList = async () => {
  const likesList = await getLikes();
  // eslint-disable-next-line no-restricted-syntax
  for (const like of likesList) {
    const likesElement = document.getElementById(`l${like.item_id}`);
    if (likesElement !== null) {
      document.getElementById(`l${like.item_id}`).innerHTML = `Likes: ${like.likes}`;
    }
  }
};

const likeToPokemon = async (id) => {
  await giveLike(id);
  await likesList();
};

export { likesList, likeToPokemon };