import { getPokemonList, getPokemon } from './datadex.js';
import { likesList } from './likesManager.js';

let pokemonList = [];

const displayPokemonList = async () => {
  pokemonList = await getPokemonList();
  let pokemonCards = '';
  let n = 0;
  pokemonList.array.forEach(async (pokemon) => {
    pokemon.data = await getPokemon(pokemon.url);
    const types = pokemon.data.types.map((types) => `<span class="${types.type.name}">${types.type.name.toUpperCase()}</span>`).join('');
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonCards += `
    <div class="card" id="${n}">
      <img src="${pokemon.data.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" class="card-img">
      <div class="space-between">
        <div class="nameType">
          <h2>${name}</h2>
          <div class="types">${types}</div>
        </div>
        <div class="likesT">
          <button class="like-btn" id="lb${pokemon.data.id}"><i class="fa-regular fa-heart"></i></button>
          <h3 id="l${pokemon.data.id}">Likes: 0</h3>
        </div>
      </div>
      <div class="buttons">
        <button class="popupBtn">Comments</button>
        <button class="hidden">Reserve</button>
      </div>
    </div>
    `;
    n += 1;
  });
  likesList();
  localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
  return pokemonCards;
};
export default displayPokemonList;