import * as pokemonsSelectors from './pokemons/selectors'

export const getAllPokemons = (state) => pokemonsSelectors.getAllPokemons(state.pokemons)
export const getPokemonByName = (state) => pokemonsSelectors.getPokemonByName(state.pokemons)
export const isLoading = (state) => pokemonsSelectors.isLoading(state.pokemons)
export const getTotalPokemons = (state) => pokemonsSelectors.getTotalPokemons(state.pokemons)
export const getNextPage = (state) => pokemonsSelectors.getNextPage(state.pokemons)
export const getPreviousPage = (state) => pokemonsSelectors.getPreviousPage(state.pokemons)
