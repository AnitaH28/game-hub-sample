import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames, { platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1,2,3,4,5,6];
    return (
        <>
          {error && <text>{error}</text>}
          <SimpleGrid column={{sm:4, md:2, lg:3, xl:5}} padding={10} spacing={3}>
            {isLoading && 
              skeletons.map( (Skeleton) => (
              <GameCardContainer  key={Skeleton}>
                <GameCardSkeleton/>
              </GameCardContainer> ))}
            {data.map((game) =>(
            <GameCardContainer key={game.id}>
              <GameCard  game={game} />
            </GameCardContainer>

            ))}
          </SimpleGrid>
        </>


    )
}

export default GameGrid
