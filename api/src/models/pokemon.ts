const sequelize = require("sequelize");
const Sequelize = require("./sequelize");

const Pokemon = Sequelize.define(
  "pokemons",
  {
    id: { primaryKey: true, type: sequelize.DataTypes.INTEGER },
    name: sequelize.DataTypes.STRING,
    color: sequelize.DataTypes.STRING,
    url: sequelize.DataTypes.STRING,
    order: sequelize.DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

const PokemonGen = Sequelize.define(
  "pokemonGen",
  {
    id: { primaryKey: true, type: sequelize.DataTypes.INTEGER },
    name: sequelize.DataTypes.STRING,
    url: sequelize.DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = { Pokemon, PokemonGen };
