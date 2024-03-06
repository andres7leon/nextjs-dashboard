import { SimplePokemons } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


// {
//   '1': {id: 1, name: 'bulbasaur', type: 'grass'},
// }

interface iPokemon {
  favorites: {[key: string]: SimplePokemons},
}

// const getInitialState = () => {
//   return JSON.parse(localStorage.getItem('favorites') || '{}');
// }

const initialState: iPokemon = {
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavorites: (state, action: PayloadAction<any>) => {
      state.favorites = action.payload;
    },

    toggleFavorite: (state, action: PayloadAction<SimplePokemons>) => {
      const pokemon = action.payload;
      const {id} = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      } 
      
      state.favorites[id] = pokemon;

    }
  }
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer