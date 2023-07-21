import { useQuery } from "react-query";
import { getflowerImg } from "../api/flowerimage";

export const useGetFlowerImg = (search) => {
  return useQuery(["fetchFlowerImg", { search }], () => getflowerImg(search));
};