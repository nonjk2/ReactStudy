import styled from "styled-components";
import MainListItem from "./MainListItem";
import { useInfiniteQuery } from "react-query";
import { getDogs } from "../../api/dogs";
import { DogResponeData } from "../../types/types";
import useInfiniteScroll from "../../hooks/useInfinityScroll";

const MainListContainer = styled.div`
  max-width: 83.333%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  flex: 0 83.3333%;
  .list-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const MainList = () => {
  // const queryClient = useQueryClient();

  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error } = useInfiniteQuery<
    DogResponeData[],
    Error
  >("dogs", ({ pageParam = 1 }) => getDogs(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    staleTime: 30000,
    cacheTime: 30000,
  });

  ///프리패칭실패

  // useEffect(() => {
  //   const preFetch = async () => {
  //     if (hasNextPage && !isFetchingNextPage) {
  //       console.log("asdfasdfasf");
  //       await queryClient.prefetchQuery({
  //         queryKey: "dogs",
  //         queryFn: ({ pageParam }) => {
  //           getDogs(pageParam + 1);
  //         },
  //         staleTime: 30000,
  //       });
  //     }
  //     console.log("Asdfsf");
  //   };
  //   preFetch();
  // }, [queryClient, hasNextPage, isFetchingNextPage]);

  // 내 콘텐츠들
  const lastPostRef = useInfiniteScroll({ isFetchingNextPage, fetchNextPage, hasNextPage });

  const content =
    status === "success" &&
    data?.pages.map((page, idx) => {
      return page.map((pagedata, i) => {
        if (page.length === i + 1) {
          return (
            <MainListItem
              num={idx * 10 + (i + 1)}
              key={pagedata.id}
              item={pagedata}
              ref={lastPostRef}
            />
          );
        }
        return <MainListItem num={idx * 10 + (i + 1)} key={pagedata.id} item={pagedata} />;
      });
    });

  // 에러 처리
  if (status === "error") return <div>...에러 {error.message}</div>;
  return (
    <MainListContainer>
      <h1>현재 페이지 : {data?.pages.length}</h1>
      <div className="list-container">{content}</div>
      {isFetchingNextPage && <div>로딩중이에요</div>}
    </MainListContainer>
  );
};
export default MainList;
