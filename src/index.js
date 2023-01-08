import './index.css';
import displayPokemonList from '../modules/display.js';
import displayPokemon from '../modules/displayPokemon.js';
import { likeToPokemon } from '../modules/likesManager.js';
import { getComments, postComment } from '../modules/involvementRequests.js';
import displayMessage from '../modules/displayMessage.js';
import counter from '../modules/cardsCounter.js';

const nameInput = document.querySelector('.name-form');
const messageInput = document.querySelector('.insights-form');
const modalPopup = document.querySelector('.modalBackground');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  modalPopup.classList.toggle('hidden');
});

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const card = JSON.parse(localStorage.getItem('pokemonList'));
  const index = parseInt(e.target.parentNode.id, 10);
  // eslint-disable-next-line no-empty
  await postComment(card[index].data.id, nameInput.value, messageInput.value);
  const b = await getComments(card[index].data.id);
  displayMessage(b);
  nameInput.value = '';
  messageInput.value = '';
});

const displayCards = async () => {
  document.querySelector('#pokemon-list').innerHTML = await displayPokemonList();
  document.querySelectorAll('.popupBtn').forEach((item) => {
    item.addEventListener('click', (e) => {
      modalPopup.classList.toggle('hidden');
      const arrayPokemon = JSON.parse(localStorage.getItem('pokemonList'));
      const index = parseInt(e.target.parentNode.parentNode.id, 10);
      displayPokemon(arrayPokemon, index);
      document.querySelector('.form').setAttribute('id', index);
    });
  });
  document.querySelectorAll('.like-btn').forEach((likeButton) => {
    likeButton.addEventListener('click', (e) => {
      const id = parseInt(e.target.parentNode.id.slice(2), 10);
      likeToPokemon(id);
    });
  });
  document.getElementById('links-p').innerHTML = `<a href="#PokeCard">Pokémons (${counter()})</a>`;
};

displayCards();
