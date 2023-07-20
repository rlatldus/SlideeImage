import { useQuery } from "react-query";
import { getmovieImg } from "../api/movieimage";

export const useGetMovieImg = (fetchMovieImg) => {
  return useQuery(["fetchMovieImg", { fetchMovieImg }], () => getmovieImg(fetchMovieImg));
};