/* eslint-disable no-new */
const cardPoke = document.querySelector('.cardModal');
const $grafica = document.querySelector('#grafica');
const etiquetas = [];
const datas = [];
let nroAbility = 0;
let datosIngresos = {};
const displayPokemon = (array1) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const card of array1) {
    // eslint-disable-next-line no-undef
    cardPoke.innerHTML += `
    <img src="${card.image}" alt="pokemon">
    <h2>${card.name.toUpperCase()}</h2>
    `;
    // eslint-disable-next-line no-restricted-syntax
    for (const abilityOne of card.abilities) {
      cardPoke.innerHTML += `
        <p>Ability Nro ${nroAbility + 1}:  ${abilityOne.ability.name}</p>`;
      // eslint-disable-next-line no-new, no-undef
      nroAbility += 1;
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const pokemonStat of card.stats) {
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
    // eslint-disable-next-line no-const-assign
  }
};

export default displayPokemon;
