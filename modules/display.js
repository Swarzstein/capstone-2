import { getPokemonList, getPokemon } from './datadex.js';
// import displayPokemon from './displayPokemon';
// import displayMessage from './displayMessage';
let pokemonList = [];
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
  return pokemonCards;
};
export default displayPokemonList;