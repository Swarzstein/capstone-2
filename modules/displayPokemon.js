import { postComment, getComments } from './involvementRequests.js';
import displayMessage from './displayMessage.js';
/* eslint-disable no-new */
const cardPoke = document.querySelector('.cardModal');
const $grafica = document.querySelector('#grafica');

const nameInput = document.querySelector('.name-form');
const messageInput = document.querySelector('.insights-form');

const displayPokemon = async (card, index) => {
  console.log(`imprimiendo poke ${+card[index].data.id}`);
  let nroAbility = 0;
  let datosIngresos = {};
  const etiquetas = [];
  const datas = [];
  // eslint-disable-next-line no-undef
  cardPoke.innerHTML = '';
  cardPoke.innerHTML += `
    
    <img src="${card[index].data.sprites.other['official-artwork'].front_default}" alt="pokemon">
    <h2>${card[index].data.name.toUpperCase()}</h2>
    `;
  // eslint-disable-next-line no-restricted-syntax
  for (const abilityOne of card[index].data.abilities) {
    cardPoke.innerHTML += `
        <p>Ability Nro ${nroAbility + 1}:  ${abilityOne.ability.name}</p>`;
    // eslint-disable-next-line no-new, no-undef
    nroAbility += 1;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const pokemonStat of card[index].data.stats) {
    etiquetas.push(pokemonStat.stat.name);
    datas.push(pokemonStat.base_stat);
  }
  datosIngresos = {
    label: 'Stats',
    data: datas,
    order: 1,
    backgroundColor: [
      'rgba(163,221,203,0.2)',
      'rgba(232,233,161,0.2)',
      'rgba(230,181,102,0.2)',
      'rgba(229,112,126,0.2)',
    ], // Color de fondo
    borderColor: [
      'rgba(163,221,203,1)',
      'rgba(232,233,161,1)',
      'rgba(230,181,102,1)',
      'rgba(229,112,126,1)',
    ], // Color del borde
    borderWidth: 3, // Ancho del borde
  };
  const options = {
    responsive: false,
    devicePixelRatio: 1,
    maintainAspectRatio: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 200,
      },
    },
  };
  // eslint-disable-next-line no-new, no-undef
  new Chart($grafica, {
    type: 'radar', // Tipo de gráfica. Puede ser dougnhut o pie
    data: {
      labels: etiquetas,
      datasets: [
        datosIngresos,
      ],
    },
    options,
  });
  const a = await getComments(card[index].data.id);
  displayMessage(a);
  // eslint-disable-next-line no-const-assign
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-empty
    if (nameInput.value === '' || messageInput === '') {} else {
      await postComment(card[index].data.id, nameInput.value, messageInput.value);
      // console.log(await postComment(1, 'sadsfdd', 'asfsf'));
      const b = await getComments(card[index].data.id);
      // console.log('its:', b);
      // console.log('its me');
      displayMessage(b);
      // eslint-disable-next-line no-const-assign
      nameInput.value = '';
      // eslint-disable-next-line no-const-assign
      messageInput.value = '';
    }
  });
};

export default displayPokemon;
