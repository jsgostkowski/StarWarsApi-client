import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../actions";

export const useFetchCharacter = () => {
  const query = useQuery(["character"]);

  return query;
};
