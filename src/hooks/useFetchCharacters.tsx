import { useQuery } from "@tanstack/react-query";
import { actions, fetchCharacters } from "../actions";

export const useFetchCharacters = () => {
  const query = useQuery(["characters"], () => actions.fetchCharacters());

  return query;
};
