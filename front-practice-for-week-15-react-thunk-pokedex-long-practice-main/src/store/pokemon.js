import { LOAD_ITEMS, REMOVE_ITEM, ADD_ITEM } from './items';

const LOAD = 'pokemon/LOAD';
const LOAD_TYPES = 'pokemon/LOAD_TYPES';
const ADD_ONE = 'pokemon/ADD_ONE';

const load = list => ({
  type: LOAD,
  list
});

const loadTypes = types => ({
  type: LOAD_TYPES,
  types
});

const addOnePokemon = pokemon => ({
  type: ADD_ONE,
  pokemon
});

//building out a thunk action creator
export const getPokemon = () => async dispatch => {
  const response = await fetch(`/api/pokemon`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export const getPokemonTypes = () => async dispatch => {
  const response = await fetch(`/api/pokemon/types`);

  if (response.ok) {
    const types = await response.json();
    dispatch(loadTypes(types));
  }
};

export const getOnePokemon = (pokemonId) => async (dispatch) => {
  const res = await fetch(`/api/pokemon/${pokemonId}`);

  if (res.ok) {
    const pokemon = await res.json();
    dispatch(addOnePokemon(pokemon));
    return pokemon;
  }
}

export const createPokemon = (pokemonData) => async (dispatch) => {
  const res = await fetch(`/api/pokemon`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pokemonData)
  });



  if(res.ok) {
    const pokemon = await res.json();
    dispatch(addOnePokemon(pokemon));
    return pokemon;
  }
}

//phase 4
export const updatePokemon = (pokemonData, pokemonId) => async (dispatch) => {
  //update is a PUT /api/pokemon/:id in the backend readme
  const res = await fetch(`/api/pokemon/${pokemonId}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pokemonData)
  });

  if (res.ok) {
    const updatedPokemon = await res.json();
    dispatch(addOnePokemon(updatedPokemon));
    return updatedPokemon
  }
}

const initialState = {
  list: [],
  types: []
};

const sortList = (list) => {
  return list.sort((pokemonA, pokemonB) => {
    return pokemonA.number - pokemonB.number;
  }).map((pokemon) => pokemon.id);
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allPokemon = {};
      action.list.forEach(pokemon => {
        allPokemon[pokemon.id] = pokemon;
      });
      return {
        ...allPokemon,
        ...state,
        list: sortList(action.list)
      };
    case LOAD_TYPES:
      return {
        ...state,
        types: action.types
      };
    case ADD_ONE:
      if (!state[action.pokemon.id]) {
        const newState = {
          ...state,
          [action.pokemon.id]: action.pokemon
        };
        const pokemonList = newState.list.map(id => newState[id]);
        pokemonList.push(action.pokemon);
        newState.list = sortList(pokemonList);
        return newState;
      }
      return {
        ...state,
        [action.pokemon.id]: {
          ...state[action.pokemon.id],
          ...action.pokemon
        }
      };
    case LOAD_ITEMS:
      return {
        ...state,
        [action.pokemonId]: {
          ...state[action.pokemonId],
          items: action.items.map(item => item.id)
        }
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.pokemonId]: {
          ...state[action.pokemonId],
          items: state[action.pokemonId].items.filter(
            (itemId) => itemId !== action.itemId
          )
        }
      };
    case ADD_ITEM:
      console.log(action.item);
      return {
        ...state,
        [action.item.pokemonId]: {
          ...state[action.item.pokemonId],
          items: [...state[action.item.pokemonId].items, action.item.id]
        }
      };
    default:
      return state;
  }
}

export default pokemonReducer;
