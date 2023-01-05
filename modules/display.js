import displayPokemon from '../src/displayPokemon.js';
import { getPokemonList, getPokemon } from './datadex.js';
// import displayPokemon from './displayPokemon';
// import displayMessage from './displayMessage';
let pokemonList = [];

const modalPopup = document.querySelector('.modalBackground');
const displayPokemonList = async () => {
  pokemonList = await getPokemonList();
  let pokemonCards = '';
  let n = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const pokemon of pokemonList) {
    // eslint-disable-next-line no-await-in-loop
    pokemon.data = await getPokemon(pokemon.url);
    const types = pokemon.data.types.map((types) => `<span class="${types.type.name}">${types.type.name.toUpperCase()}</span>`).join('');
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonCards += `
    <div class="card" id="${n}">
      <img src="${pokemon.data.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" class="card-img">
      <div><h3>${name}</h3> </div>
      
      <div class="types">${types}</div>
      <div class="buttons">
        <button class="popupBtn">Comments</button>
        <button class="hidden">Reserve</button>
      </div>      
    </div>
    `;
    n += 1;
  }
  localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
  document.querySelector('#pokemon-list').innerHTML = pokemonCards;

  document.querySelectorAll('.popupBtn').forEach((item) => {
    item.addEventListener('click', (e) => {
      modalPopup.classList.toggle('hidden');
      const arrayPokemon = JSON.parse(localStorage.getItem('pokemonList'));
      const index = parseInt(e.target.parentNode.parentNode.id, 10);
      displayPokemon(arrayPokemon[index].data);
      // displayMessage();
    });
  });
};

export default displayPokemonList;
