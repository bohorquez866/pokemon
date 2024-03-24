import {
  getPokemonGenSpecies,
  getAllPokemonSpecies,
} from "../utils/getPokemonGen";
const addPokemonInBulk = require("../controllers/pokemon");
const PokemonGen = require("../models/pokemon").PokemonGen;
const Pokemons = require("../models/pokemon").Pokemon;
const express = require("express");
const app = express();

app.get("/getPokemons", async (_, res) => {
  const data = await Pokemons.findAll();
  const limitedData = data.slice(0, 30);
  res.status(200).send({ data: limitedData });
});

app.get("/addPokemons", async (_, res) => {
  try {
    const pokemonsFromApi = await getPokemonGenSpecies();
    const pokemonSpecies = pokemonsFromApi.pokemon_species.map((pokemon) => {
      const pokemonId = pokemon.url.split("/pokemon-species/");

      return {
        id: Number(pokemonId[1].slice(0, -1)),
        name: pokemon.name,
        url: pokemon.url,
      };
    });

    await addPokemonInBulk.addPokemonsToDb(pokemonSpecies);
  } catch (err) {
    console.error("Error adding data to database:", err);
    res.status(500).send({
      error: err.name,
      message: "Error while trying to populate PokeGen",
    });
  }

  try {
    const data = await PokemonGen.findAll();
    const pokemonData = data.map(({ id, url }) => ({ id, url }));
    pokemonData.map(async (pokemon) => {
      const pokemonDetails = await getAllPokemonSpecies(pokemon.id);

      const pokemonSpecies = {
        id: pokemon.id,
        name: pokemonDetails.name,
        color: pokemonDetails.color.name,
        url: pokemonDetails.varieties[0].pokemon.url,
        order: pokemonDetails.id,
      };

      await Pokemons.create(pokemonSpecies);
    });

    await res.status(200).send({ message: "All pokemons added to DB", data });
  } catch (er) {
    console.error("Error adding data to database:", er);
    res.status(500).send({ er });
  }
});

app.delete("/clearPokemons", async (_, res) => {
  try {
    await PokemonGen.destroy({ where: {} });
    await Pokemons.destroy({ where: [] });
    res.status(200).send("Pokemons and Pokemons Gen cleared");
  } catch (er) {
    console.error("Error clearing data from database:", er);
    res.status(500).send(er);
  }
});

module.exports = app;
