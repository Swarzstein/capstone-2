import './index.css';
// eslint-disable-next-line no-undef, import/extensions
import displayPokemon from './displayPokemon';
// eslint-disable-next-line import/extensions
// import getMessage from './getMessage';
// // eslint-disable-next-line import/extensions
// import newLead from './newLead';
// eslint-disable-next-line import/extensions
import displayMessage from './displayMessage';
// const submitBtn = document.querySelector('.btn');
// const nameInput = document.querySelector('.name-form');
// const messageInput = document.querySelector('.insights-form');

const cardArray = [
  {
    id: '1',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png ',
    name: 'pika',
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/'
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/'
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    stats: [
      {
        base_stat: 150,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/'
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/'
        },
      },
      {
        base_stat: 120,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 100,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/'
        },
      },
      {
        base_stat: 120,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/'
        },
      },
      {
        base_stat: 90,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
  },
];
const commentsArray = [
  {
    item_id: 'item1',
    username: 'Jane',
    comment: 'Hello',
  },
];

displayPokemon(cardArray);
displayMessage(commentsArray);

// submitBtn.addEventListener('click', async (e) => {
//   e.preventDefault();
//   // eslint-disable-next-line no-undef
//   await newLead(nameInput.value, messageInput.value);
//   getMessage();
// });