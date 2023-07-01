/* eslint-disable react/prop-types */
import styled from "styled-components";

const VClipItemContainer = styled.div`
  width: 50%;
  padding: 10px;
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
    width: 100%;
    height: 250px;
    border-radius: 10px;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
    background-color: #ebe6f0;
    color: #3f3d41;
    position: relative;
    font-size: 0.7rem;
    cursor: pointer;
  }
  .thumbnail-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
  }
  .thumnail {
    position: absolute;
    top: 0;
    border-radius: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .contents {
    font-size: 15px;
    color: blue;
  }
  b {
    font-weight: 700;
  }
`;

const VClipItems = (props) => {
  const { item } = props;
  return (
    <VClipItemContainer>
      <a href={item.url} className="dataUrl">
        <img src={item.thumbnail} alt="" className="thumnail" />
      </a>
      <a
        className="contents"
        dangerouslySetInnerHTML={{ __html: item.title }}
      />
      <br />
      <span
        className="title"
        dangerouslySetInnerHTML={{ __html: item.author }}
      />
    </VClipItemContainer>
  );
};
export default VClipItems;
