export interface Pokemon {
  order: number;
  name: string;
  color: Color;
}

interface PokemonSpecies {
  name: string;
  url: string;
}

interface Color {
  name: string | string[];
}

export interface PokemonGen {
  pokemon_species: PokemonSpecies;
}
