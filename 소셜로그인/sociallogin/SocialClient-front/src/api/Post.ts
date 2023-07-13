import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Like, Post } from "../types/post";
const posts: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
});

export const getMyDogs = async (user: string): Promise<Post[]> => {
  const response = await posts.get("post", {
    params: { author: user },
  });
  return response.data;
};

export const getPosts = async (): Promise<AxiosResponse<Post[]>> => {
  const response = await posts.get("post");
  return response;
};
export const getLikes = async (user: string): Promise<AxiosResponse<Like[]>> => {
  const response = await posts.get("like", {
    params: {
      userId: user,
    },
  });
  return response;
};

export const PostLikes = async (postLike: Like) => {
  posts.post("like", { ...postLike });
};
export const DelLikes = async (likeid: string) => {
  posts.delete(`like/${likeid}`);
};

export default posts;
