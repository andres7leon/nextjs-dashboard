'use client'

import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './';
import { setFavorites } from './pokemons/pokemons';

interface Props {
  children: React.ReactNode
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
    console.log('Providers: useEffect');
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    store.dispatch( setFavorites(favorites) );
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
