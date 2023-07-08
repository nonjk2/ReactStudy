import axios, { AxiosInstance } from "axios";
import { DogResponeData } from "../types/types";

const dogs: AxiosInstance = axios.create({
  baseURL: "https://api.thedogapi.com/v1/images/search",
  params: { has_breeds: true, limit: 10, size: "small", order: "ASC" },
  headers: {
    "x-api-key": import.meta.env.VITE_DOG_API,
  },
});

export const getDogs = async (pageParam = 1): Promise<DogResponeData[]> => {
  const response = await dogs.get("", {
    params: {
      page: pageParam,
    },
  });
  console.log("요청");
  return response.data;
};
