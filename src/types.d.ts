// /**
//  * TODO: uzupełnij brakujące typy
//  */

// export type Breadcrumb = {
//   // TODO
// };

// export interface SingleMovie {
//   results: any;
//   title: string;
//   episode_id: number;
//   opening_crawl: string;
//   characters: string[];
//   url: string;
// }

// export type Character = {
//   name: string;
//   height: number;
//   mass: string;
//   birth_year: string;
//   films: string[];
//   url: string;
// };
export interface Movies {
  count: number;
  next: any;
  previous: any;
  results: Result[];
}

export interface Result {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Character {
  count: number;
  next: string;
  previous: any;
  results: CharacterResult[];
}

export interface CharacterResult {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
