import { PokemonFavorites } from "@/pokemons/components/PokemonsFavorites";

export const metadata = {
  title: "Favorites",
  description: "This is the page for the favorite pokemons",
};

export default async function FavoritesPage() {

  return (
    <div>

      <h3 className="flex ml-5 mt-5">Pokemos Favoritos</h3>

      <div>

        <PokemonFavorites />

      </div>

    </div>
  );
}