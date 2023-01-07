import './index.css';
import displayPokemonList from '../modules/display.js';
import displayPokemon from '../modules/displayPokemon.js';
import { likeToPokemon } from '../modules/likesManager.js';
import { getComments, postComment } from '../modules/involvementRequests';
import displayMessage from '../modules/displayMessage';

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
  console.log(index);
  // eslint-disable-next-line no-empty
  console.log(`añadiendo comentario al ${card[index].data.id}`);
  await postComment(card[index].data.id, nameInput.value, messageInput.value);
  console.log(`comentario del ${card[index].data.id}`, card[index].data.id, nameInput.value, messageInput.value);
  console.log(`obteniendo comentarios del ${card[index].data.id}`);
  const b = await getComments(card[index].data.id);
  console.log(`estos son los comentarios de ${card[index].data.id}:\n${JSON.stringify(b)}`);
  // console.log('its:', b);
  // console.log('its me');
  displayMessage(b);
  // eslint-disable-next-line no-const-assign
  nameInput.value = '';
  // eslint-disable-next-line no-const-assign
  messageInput.value = '';
});

const displayCards = async () => {
  document.querySelector('#pokemon-list').innerHTML = await displayPokemonList();
  document.querySelectorAll('.popupBtn').forEach((item) => {
    console.log('añadiendo event listeners');
    item.addEventListener('click', (e) => {
      console.log('mostrando modal');
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
};

displayCards();
