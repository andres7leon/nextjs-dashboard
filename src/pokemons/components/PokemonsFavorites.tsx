'use client'
import React, { useEffect, useState } from "react";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";

export const PokemonFavorites = () => {
  const pokemonInFavorites = useAppSelector((state) =>  Object.values(state.pokemons.favorites));
  const [pokemons, setPokemons] = useState(pokemonInFavorites)

  // useEffect(() => {
  //   setPokemons(pokemonInFavorites);
  // }, [pokemonInFavorites]);

  return (
    <div>
      {/* {
        pokemons.length === 0 ? 
        <h4 className="ml-5 mt">No pokemons in favorites</h4> :
      } */}
      <PokemonGrid  pokemons={pokemonInFavorites} />
    </div>
  )
};