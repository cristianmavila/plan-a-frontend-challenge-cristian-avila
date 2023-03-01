import { latestMoviesService } from "@/services/movies";
import { createContext, useCallback, useState } from "react";
import { Movies, MoviesContextProps, MoviesProviderProps } from "./types";

export const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [pagination, setPagination] = useState({ page: 1, total: 0 });
  const [isLoading, setIsloading] = useState(true);

  const fetchLatest = useCallback(async (page: number) => {
    const response = await latestMoviesService(page);
    if (!!response.results) {
      const { results, page, total_pages } = response;
      setMovies(results);
      setPagination({ page: page, total: total_pages });
      setIsloading(false);
    }
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, fetchLatest, pagination, isLoading }}>
      {children}
    </MoviesContext.Provider>
  );
};
