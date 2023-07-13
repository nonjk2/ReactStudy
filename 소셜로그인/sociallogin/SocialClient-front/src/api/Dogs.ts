import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ImageData, Post, PostItem } from "../types/post";
import posts from "./Post";

const dogs: AxiosInstance = axios.create({
  baseURL: "https://api.thedogapi.com/v1/images/search",
  params: { has_breeds: true, limit: 15, size: "small", order: "ASC" },
  headers: {
    "x-api-key": "live_vELseXWcBB1pNUqIsa7ooU8BlUmiikurELSUoMkmgmb9pveWml7jOLsW48nZSETf",
  },
});

export const getInfinityDogs = async (pageParam = 1): Promise<ImageData[]> => {
  const response = await dogs.get("", {
    params: {
      page: pageParam,
    },
  });
  console.log("요청");
  return response.data;
};

export const getDogs = async (): Promise<AxiosResponse<ImageData[]>> => {
  const response = await dogs.get("");
  return response;
};

export const getDogsMine = async (dogid: string): Promise<Post[]> => {
  const response = await posts.get("post", {
    params: {
      id: dogid,
    },
  });
  return response.data;
};

export const PostDos = async (postdogs: PostItem) => {
  posts.post("post", { ...postdogs });
};

export default dogs;
