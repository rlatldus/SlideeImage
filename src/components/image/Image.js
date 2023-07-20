import { useEffect } from "react";
import { useGetMovieImg } from "../../hooks/useMovieImage";

const Image = () => {
  const movieData = useGetMovieImg();
  const { isLoading: Loading, data: postUserData } = movieData || {};

  // // console.log(useGetMovieImg);
  useEffect(() => {
    // console.log(useGetMovieImg);
    console.log(postUserData);
  }, []);
  if (!Loading && movieData) {
    return console.log(movieData);
  }

  return;
};

export default Image;
