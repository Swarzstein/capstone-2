import './index.css';
import displayPokemonList from '../modules/display.js';
import displayPokemon from './displayPokemon.js';

const modalPopup = document.querySelector('.modalBackground');
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
  modalPopup.classList.toggle('hidden');
});

const displayCards = async () => {
  document.querySelector('#pokemon-list').innerHTML = await displayPokemonList();
  document.querySelectorAll('.popupBtn').forEach((item) => {
    item.addEventListener('click', (e) => {
      modalPopup.classList.toggle('hidden');
      const arrayPokemon = JSON.parse(localStorage.getItem('pokemonList'));
      const index = parseInt(e.target.parentNode.parentNode.id, 10);
      displayPokemon(arrayPokemon[index].data);
    });
  });
};

displayCards();
