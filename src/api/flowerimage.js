import axios from "axios";
import { FLOWER_API_KEY, FLOWER_ROOT_API } from "../constants/api";

export const getflowerImg = async () => {
  const response = await axios.get(`${FLOWER_ROOT_API}/api/?key=${FLOWER_API_KEY}&q=yellow+flowers&image_type=photo`);
  return response.data;
};
