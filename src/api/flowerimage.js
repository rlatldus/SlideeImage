import axios from "axios";
import { FLOWER_API_KEY, FLOWER_ROOT_API } from "../constants/api";

export const getflowerImg = async ({ search }) => {
  const response = await axios.get(`${FLOWER_ROOT_API}/api/?key=${FLOWER_API_KEY}&q=${search}&image_type=photo`);
  return response.data;
};
