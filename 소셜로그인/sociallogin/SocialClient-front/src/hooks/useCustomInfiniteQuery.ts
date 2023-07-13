import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useQueryClient,
} from "react-query";
import { getInfinityDogs } from "../api/Dogs";
import { ImageData } from "../types/post";
import { QueryKey } from "react-query/types/core/types";
import { useEffect } from "react";

export type CustomInfiniteQueryOptions<TData = unknown, TError = unknown> = Omit<
  UseInfiniteQueryOptions<TData, TError, TData, TData, QueryKey>,
  "queryFn" | "queryKey"
>;

export function useCustomInfiniteQuery(
  queryKey: QueryKey,
  options?: CustomInfiniteQueryOptions<ImageData[], Error>
): UseInfiniteQueryResult<ImageData[], Error> {
  const queryClient = useQueryClient();

  const queryOptions: UseInfiniteQueryOptions<ImageData[], Error> = {
    ...options,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    staleTime: 300000,
    cacheTime: 300000,
    keepPreviousData: true,
    refetchOnMount: false,
  };
  const queryResult = useInfiniteQuery<ImageData[], Error>(
    queryKey,
    ({ pageParam = 1 }) => getInfinityDogs(pageParam),
    queryOptions
  );

  /// 다음페이지 프리패치 2일간 헛짓거리 감격의 눈물 ㅜ ㅠ ㅜ ㅠ ㅜ
  // 커스텀 훅으로서 getInfinityDogs 함수 따로 빼야됨 useHook 사용할때 넣어줄것
  // 빠르게 내릴때에를 대비해서 클린업함수도 작성해야될듯 요청이 여러번 될수 있음
  // 또한 아무리 인피니티스크롤이라도 브라우저가 무거워질수 있으니 그거에 대비해야될듯 여기서 좀 잘 풀어가야 되는게 숙제
  useEffect(() => {
    if (queryResult.isFetchingNextPage) {
      console.log("들어옴 ");
      const nextPage = (queryResult.data?.pageParams.reverse()[0] as number) ?? null;
      if (nextPage) {
        queryClient.prefetchQuery(["dogsPost", nextPage + 2], () => getInfinityDogs(nextPage + 2));
      }
    }
  }, [queryResult.isFetchingNextPage, queryResult.data?.pageParams]);

  return queryResult;
}
