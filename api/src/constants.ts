const base_url = process.env.BASE_URL;
const pokemonFirstGenUrl = `${base_url}/generation/1`;
const pokemonUrl = (id: number) => `${base_url}/pokemon-species/${id}`;

export { base_url, pokemonFirstGenUrl, pokemonUrl };
