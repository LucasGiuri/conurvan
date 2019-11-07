import * as actionType from './types'
import { combineReducers } from 'redux'

const items = (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_POKEMONS_SUCCESS: {
      return action.response
    }

    default:
      return state
  }
}

const itemSelected = (state = {}, action) => {
  switch (action.type) {
    case actionType.FETCH_POKEMON_INFO_SUCCESS: {
      return {
        id: action.id,
        name: action.name,
        types: action.types,
        habilities: action.habilities,
        height: action.height
      }
    }
    default:
      return state
  }
}

const totalItems = (state = 0, action) => {
  switch (action.type) {
    case actionType.FETCH_POKEMONS_SUCCESS: {
      return action.total
    }

    default:
      return state
  }
}

const previous = (state = '', action) => {
  switch (action.type) {
    case actionType.FETCH_POKEMONS_SUCCESS: {
      return action.previous
    }

    default:
      return state
  }
}

const next = (state = '', action) => {
  switch (action.type) {
    case actionType.FETCH_POKEMONS_SUCCESS: {
      return action.next
    }

    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case actionType.FETCH_POKEMONS_START:
    case actionType.FETCH_POKEMON_INFO_START:
      return true

    case actionType.FETCH_POKEMONS_SUCCESS:
    case actionType.FETCH_POKEMON_INFO_SUCCESS:
    case actionType.FETCH_POKEMON_INFO_FAIL:
    case actionType.FETCH_POKEMONS_FAIL:
      return false

    default:
      return state
  }
}

const reducer = combineReducers({
  items,
  itemSelected,
  totalItems,
  next,
  previous,
  isLoading
})

export default reducer
