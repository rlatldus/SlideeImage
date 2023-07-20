import { useQuery } from "react-query";
import { getflowerImg } from "../api/flowerimage";

export const useGetFlowerImg = (fetchFlowerImg) => {
  return useQuery(["fetchFlowerImg", { fetchFlowerImg }], () => getflowerImg(fetchFlowerImg));
};