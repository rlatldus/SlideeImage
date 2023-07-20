import { useQuery } from "react-query";
import { getmovieImg } from "../api/movieimage";

export const useGetMovieImg = (fetchMovieImg) => {
  useQuery(["fetchMovieImg", { fetchMovieImg }], () => getmovieImg(fetchMovieImg), {
    keepPreviousData: true,
  });
};
