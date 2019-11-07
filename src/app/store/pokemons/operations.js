import * as actionTypes from './types'
import { pokemonsFetch, pokemonFetch } from '../../apis/services'
import apiCall from '../apiCall'

export const fetchPokemons = (url) => {
  const URI = url ? pokemonsFetch(url) : pokemonsFetch()

  return async (dispatch) => {
    return dispatch(apiCall(
      actionTypes.FETCH_POKEMONS,
      () => URI,
      (data) => {
        const next = data.data.next
        const previous = data.data.previous
        const total = data.data.count
        const response = data.data.results

        return {
          response,
          total,
          next,
          previous
        }
      }
    ))
  }
}

export const fetchPokemon = (pokemonName) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      actionTypes.FETCH_POKEMON_INFO,
      () => pokemonFetch(pokemonName),
      (response) => {
        const id = response.data.id
        const name = response.data.name
        const height = response.data.height
        const habilities = response.data.abilities
        const types = response.data.types

        return {
          id,
          name,
          height,
          habilities,
          types
        }
      }
    ))
  }
}
