import axios from "axios";
import { API_KEY, ROOT_API } from "../constants/api";

export const getmovieImg = async () => {
  const response = await axios.get(`${ROOT_API}?api_key=${API_KEY}&language=ko-KR`);
  return response.data;
};
