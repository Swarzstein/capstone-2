import { getLikes, giveLike } from './involvementRequests.js';

const likesList = async () => {
  const likesList = await getLikes();
  // eslint-disable-next-line no-restricted-syntax
  for (const like of likesList) {
    document.getElementById(`l${like.item_id}`).innerHTML = `Likes: ${like.likes}`;
  }
};

const likeToPokemon = () => {
  giveLike();
};

export { likesList, likeToPokemon };