import { useContext } from "react";
import { MoviesContext } from ".";

export const useMovies = () => useContext(MoviesContext);
