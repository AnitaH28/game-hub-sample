import useData from "./useData";
import { Genre } from "./useGenres";

export interface platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: platform} [];
    metacritic: number;
}



const useGames = (selectedGenre: Genre | null, selectedPlatform: platform | null) => useData<Game>('/games', {params: {
    genres: selectedGenre?.id, 
    platforms: selectedPlatform?.id}}, 
    [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;