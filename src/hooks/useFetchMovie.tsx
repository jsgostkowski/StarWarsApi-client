import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "../actions";

export const useFetchMovie = (id: string) => {
  const query = useQuery(["movie", id], () => fetchMovie(id));

  return query;
};
