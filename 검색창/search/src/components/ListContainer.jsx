/* eslint-disable react/prop-types */
import styled from "styled-components";
import WebItems from "./searchlist/web";
import CafeItems from "./searchlist/cafe";
import BookItems from "./searchlist/book";
import BlogItems from "./searchlist/blog";
import ImageItems from "./searchlist/image";
import VClipItems from "./searchlist/vclip";

const SearchResponseContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (!props.flex ? "row" : "colunm")};
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const ListContainer = (props, category) => {
  const { data } = props;
  const flex = category === "image" || category === "vclip";
  return (
    <SearchResponseContainer flex={flex}>
      {data &&
        data.map((item) => {
          switch (item.type) {
            case "web":
              return <WebItems key={item.title} item={item} />;
            case "cafe":
              return <CafeItems key={item.title} item={item} />;
            case "book":
              return <BookItems key={item.title} item={item} />;
            case "image":
              return <ImageItems key={item.image_url} item={item} />;
            case "vclip":
              return <VClipItems key={item.thumbnail} item={item} />;
            case "blog":
              return <BlogItems key={item.title} item={item} />;

            default:
              return null;
          }
        })}
    </SearchResponseContainer>
  );
};
export default ListContainer;
