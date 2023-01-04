const getPokemonList = async () => {
  const request = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const response = await request.json();
  return response.results;
};
const getPokemon = async (url) => {
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export { getPokemonList, getPokemon };
