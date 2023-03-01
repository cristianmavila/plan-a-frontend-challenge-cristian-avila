export type Movies = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<any>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface MoviesContextProps {
  fetchLatest: (page: number) => Promise<void>;
  movies: Movies[];
  isLoading: boolean;
  pagination: { page: number; total: number };
}

export interface MoviesProviderProps {
  children: React.ReactNode;
}
