const tokenURL = 'http://localhost:3000/api/v1/auth/generateToken'
const pokemonsURL = 'http://localhost:3000/api/v1/getPokemons'
const clearPokemonsURL = 'http://localhost:3000/api/v1/clearPokemons'
const addPokemonsURL = 'http://localhost:3000/api/v1/addPokemons'

export const getPokemons = async () => {
  let token = localStorage.getItem('token') as string

  const response = await fetch(tokenURL)
  const parsedToken = await response.json()
  token = parsedToken.token
  localStorage.setItem('token', token)

  const options = {
    headers: {
      Authorization: token
    }
  }

  const pokemonListResponse = await fetch(pokemonsURL, options)

  const pokemonList = await pokemonListResponse.json()
  return pokemonList.data
}

export const clearAndReloadPokemonList = async () => {
  const token = localStorage.getItem('token') as string
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: token
    }
  }
  const addOptions = {
    method: 'GET',
    headers: {
      Authorization: token
    }
  }

  await fetch(clearPokemonsURL, options)
  await fetch(addPokemonsURL, addOptions)
}
