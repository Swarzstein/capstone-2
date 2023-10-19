import { getComments } from './involvementRequests.js';
import displayMessage from './displayMessage.js';

const cardPoke = document.querySelector('.cardModal');
const $grafica = document.querySelector('#grafica');

const displayPokemon = async (card, index) => {
  let nroAbility = 0;
  let datosIngresos = {};
  const etiquetas = ['HP', 'Attack', 'Defense', 'Speed', 'Special Defence', 'Special Attack'];
  let pokeinfo = '';
  pokeinfo += `
    <div class="pokeImg">
      <img src="${card[index].data.sprites.other['official-artwork'].front_default}" alt="pokemon">
    </div>
    <div id="info">
    <h2>${card[index].data.name.toUpperCase()}</h2>
    `;
  const datAbility = card[index].data.abilities;
  datAbility.forEach((abilityOne) => {
    pokeinfo += `
        <p>Ability ${nroAbility + 1}:  ${abilityOne.ability.name}</p>`;
    nroAbility += 1;
  });
  cardPoke.innerHTML = `${pokeinfo}</div>`;
  const cardStat = card[index].data.stats;
  let pokemon = {};
  cardStat.forEach((pokemonStat) => {
    // etiquetas.push(pokemonStat.stat.name);
    // datas.push(pokemonStat.base_stat);
    const { name } = pokemonStat.stat;
    const stat = pokemonStat.base_stat;
    pokemon = {
      ...pokemon,
      [name]: stat,
    };
  });
  datosIngresos = {
    label: 'Stats',
    data: [pokemon.hp, pokemon.attack, pokemon.defense, pokemon.speed, pokemon['special-defense'], pokemon['special-attack']],
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
    responsive: true,
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
  new Chart($grafica, { // this only work with this
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
};

export default displayPokemon;
