import { getPokemonGenSpecies } from "./utils/getPokemonGen";

require("dotenv").config();
const express = require("express");
const app = express();
const pokemonRouter = require("./router/pokemon");

const port = process.env.PORT;

app.use("/api/v1", pokemonRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
