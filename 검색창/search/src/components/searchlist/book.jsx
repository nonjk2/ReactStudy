/* eslint-disable react/prop-types */
import styled from "styled-components";

const BookItemContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f1f3f4;
  overflow: hidden;
  b {
    font-weight: 700;
  }
  h2 {
    margin-top: 0px;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 700;
  }
  .dataUrl {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
    background-color: #ebe6f0;
    color: #3f3d41;
    font-size: 0.7rem;
    cursor: pointer;
  }
  img {
    width: 108px;
    height: auto;
    vertical-align: top;
  }
  .img {
    position: relative;
    overflow: hidden;
    float: left;
    width: 108px;
    margin-right: 20px;
    border-radius: 2px;
    flex: 1;
  }
  a {
    color: #0c43b7;
    text-decoration: none;
  }
  .content {
    flex: 3;
  }
`;

const BookItems = (props) => {
  const { item } = props;
  return (
    <BookItemContainer>
      <a href={item.url} className="img">
        <img src="" alt="" className="book" />
      </a>
      <div className="content">
        <h2
          className="title"
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
        <p
          className="contents"
          dangerouslySetInnerHTML={{ __html: item.contents }}
        />
      </div>
    </BookItemContainer>
  );
};
export default BookItems;
