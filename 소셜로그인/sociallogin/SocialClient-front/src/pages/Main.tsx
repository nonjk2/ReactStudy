import styled from "styled-components";

import { useQuery, useQueryClient } from "react-query";
import { getLikes, getPosts } from "../api/Post";
import DogListItem from "../components/main/DogListItem";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useEffect } from "react";
import { fetchMyDog } from "../store/slice/dogsSlice";
import { getInfinityDogs } from "../api/Dogs";

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  min-width: 800px;
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 79px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .PostContainer {
    max-width: 1200px;
    width: 100vw;
    padding-right: 3%;
    padding-left: 3%;
    flex-wrap: wrap;
    column-count: 3;
    column-gap: 10px;
  }
`;

const Main = () => {
  const user = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();
  const {
    data: postsData,
    isLoading: postsLoading,
    isError: postsError,
  } = useQuery("dogs", getPosts);

  const {
    data: likesData,
    isLoading: likesLoading,
    isError: likesError,
  } = useQuery("likes", () => getLikes(user));
  const queryClient = useQueryClient();
  useEffect(() => {
    dispatch(fetchMyDog(user));
    queryClient.prefetchInfiniteQuery(["dogsPost"], ({ pageParam }) =>
      getInfinityDogs(pageParam + 1)
    );
  }, []);

  if (postsLoading || likesLoading) return <div>...loading</div>;
  if (postsError || likesError) return <div>에러레요</div>;

  const postsWithLikes = postsData?.data.map((post) => ({
    ...post,
    isLiked: likesData?.data.some((like) => like.postId === post.id && like.userId === "최은석"),
  }));

  return (
    <>
      <MainContainer>
        <div className="PostContainer">
          {postsWithLikes &&
            postsWithLikes.map((data) => <DogListItem key={data.id} data={data} />)}
        </div>
      </MainContainer>
    </>
  );
};
export default Main;
