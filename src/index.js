import './index.css';
import displayPokemonList from '../modules/display.js';

const modalPopup = document.querySelector('.modalBackground');
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
  modalPopup.classList.toggle('hidden');
});
displayPokemonList();
