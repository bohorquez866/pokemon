import { pokemonFirstGenUrl, pokemonUrl } from "../constants";
const axios = require("axios");

export const getPokemonGenSpecies = async () => {
  try {
    const response = await axios.get(pokemonFirstGenUrl);
    return response.data;
  } catch (er) {
    console.error("Error fetching data:", er);
    throw er;
  }
};

export const getAllPokemonSpecies = async (id: number) => {
  try {
    const url = pokemonUrl(id);
    const response = await axios.get(url);
    return response.data;
  } catch (er) {
    console.error("Error fetching data:", er);
    throw er;
  }
};
