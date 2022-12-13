import axios from "axios";
import type { Character, Movies, Movie } from "./types";

const apiClient = axios.create({
  baseURL: "https://swapi.py4e.com/api",
});
const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

export const fetchMovies = async () => {
  const res = await apiClient.get<Movies>(`/films`);
  return res.data;
};

export const fetchMovie = async (id: string) => {
  const res = await apiClient.get<Movie>(`/films/` + id);

  return res.data;
};

export const useCharacters = async () => {
  const res = await apiClient.get<Character>(`/people`);
  console.log(res);
  return res.data;
};

export const useCharacter = () => {
  /**
   * TODO: ${endpoint}/people/${id}
   */
};
