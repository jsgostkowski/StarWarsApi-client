import { useQuery } from "@tanstack/react-query";
import { useCharacters } from "../actions";

export const useFetchCharacters = () => {
  const query = useQuery(["characters"], () => useCharacters());

  return query;
};
