const PokemonGen = require("../models/pokemon").PokemonGen;

const addPokemonsToDb = async (data) => {
  try {
    await PokemonGen.bulkCreate(data);
  } catch (er) {
    console.error("Error adding data to database:", er);
    throw er;
  }
};

module.exports = { addPokemonsToDb };
