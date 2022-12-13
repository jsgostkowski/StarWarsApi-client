import type { NextPage } from "next";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";

const Characters: NextPage = () => {
  const { data } = useFetchCharacters();

  return (
    <>
      {data?.results.map((character) => {
        return (
          <div key={character.name}>
            <h1>{character.name}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Characters;
