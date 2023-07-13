import styled from "styled-components";
import useInfiniteScroll from "../hooks/useInfinityScroll";
import DogPostListItem from "../components/dogspost/DogPostItems";
import DogPostListMockItem from "../components/dogspost/DogPostItemsMoks";
import { useCustomInfiniteQuery } from "../hooks/useCustomInfiniteQuery";

const DogPostContainer = styled.div`
  display: flex;
  width: 100vw;
  min-width: 800px;
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 79px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .listPostContainer {
    width: 100%;
    max-width: 1200px;
    padding-right: 3%;
    padding-left: 3%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const DogPost = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status, isFetching } =
    useCustomInfiniteQuery("dogsPost");

  const lastPostRef = useInfiniteScroll({
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  });

  const content =
    status === "success" &&
    data?.pages.map((page) => {
      return page.map((pagedata, i) => {
        if (page.length === i + 1) {
          return (
            <DogPostListItem
              key={pagedata.id}
              pagedata={pagedata}
              data={data}
              ref={lastPostRef}
              isFetching={isFetching}
            />
          );
        }
        return (
          <DogPostListItem
            key={pagedata.id}
            data={data}
            pagedata={pagedata}
            isFetching={isFetching}
          />
        );
      });
    });

  return (
    <>
      <DogPostContainer>
        <div className="listPostContainer">
          {content}

          {isFetchingNextPage && <DogPostListMockItem />}
        </div>
      </DogPostContainer>
      {isFetchingNextPage && <div>로딩중이에요</div>}
    </>
  );
};
export default DogPost;
