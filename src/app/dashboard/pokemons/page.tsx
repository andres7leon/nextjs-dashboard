import { PokemonGrid, PokemonsResponse, SimplePokemons } from "@/pokemons";
import Image from "next/image";

const getPokemons = async ( limit = 150 , offset = 0):Promise<SimplePokemons[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}0&offset=${offset}`);
  const data: PokemonsResponse = await response.json();
  
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(150, 0);
  return (
    <div>
        <span>Listado de pokemons staticos</span>
        
        <PokemonGrid  pokemons={pokemons} />

    </div>
  );
}