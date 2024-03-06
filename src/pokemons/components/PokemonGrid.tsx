import React from "react";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemons[];
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index}/>
      ))}
    </div>
  );
};
