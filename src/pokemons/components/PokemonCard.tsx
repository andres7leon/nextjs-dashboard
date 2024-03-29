'use client';
import React, { use } from "react";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import Image from "next/image";
import Link from "next/link";
import {
  IoHeart,
  IoHeartCircle,
  IoHeartCircleOutline,
  IoHeartDislike,
  IoHeartDislikeCircle,
} from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemons;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const toggleFavorites = () => {
    dispatch (toggleFavorite(pokemon) );
  };

  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="flex justify-center flex-col p-6 bg-gray-800 border-b items-center text-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              width={100}
              height={100}
              priority={ false }
            />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {name}
            </p>
            <div className="mt-5">
              <Link
                prefetch={true}
                href={`/dashboard/pokemons/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Mas Info
              </Link>
            </div>
          </div>
          <div className="border-b">
            <div onClick={ toggleFavorites }
              className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
            >
              <div className="text-green-600">
                {
                  isFavorite ? (
                    <IoHeart />
                  ) : (
                    <IoHeartDislike />
                  )
                }
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {
                    isFavorite ? 'Remove from favorites' : 'Add to favorites'
                  }
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
