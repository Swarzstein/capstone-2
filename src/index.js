import './index.css';
import displayPokemonList from '../modules/display.js';
import displayPokemon from './displayPokemon.js';
import { likeToPokemon } from '../modules/likesManager';

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
      displayPokemon(arrayPokemon, index);
    });
  });
  document.querySelectorAll('.like-btn').forEach((likeButton) => {
    likeButton.addEventListener('click', (e) => {
      const id = parseInt(e.target.parentNode.id.slice(2), 10);
      likeToPokemon(id);
      console.log(id);
    });
  });
};

displayCards();
