import { useRef, useCallback } from "react";
import { UseInfiniteQueryResult } from "react-query";

type InfiniteQueryResultPart<TData = unknown, TError = unknown> = Pick<
  UseInfiniteQueryResult<TData, TError>,
  "isFetchingNextPage" | "fetchNextPage" | "hasNextPage"
>;

const useInfiniteScroll = ({
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
}: InfiniteQueryResultPart) => {
  const lastRef = useRef<IntersectionObserver | null>(null);

  const lastPostRef = useCallback(
    (lastDiv: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      if (lastRef.current) lastRef.current.disconnect();

      lastRef.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          fetchNextPage(); //
        }
      });

      if (lastDiv) lastRef.current.observe(lastDiv);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return lastPostRef;
};

export default useInfiniteScroll;
