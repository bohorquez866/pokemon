import { getPokemonGenSpecies } from "./utils/getPokemonGen";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const apiRoutes = require("./router/");

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/v1", apiRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
