/* eslint-disable react/prop-types */
import styled from "styled-components";

const CafeItemContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f1f3f4;
  overflow: hidden;
  margin-right: 10px;
  width: 100%;
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
  .contents {
    font-size: 13px;
    line-height: 1.4375;
    max-height: 5.75em;
    -cafekit-line-clamp: 4;
  }
  .flexdiv {
    padding: 10px;
  }
`;

const CafeItems = (props) => {
  const { item } = props;
  return (
    <CafeItemContainer>
      <div className="flex">
        {item.thumbnail && (
          <img src={item.thumbnail} alt="" className="thumnail" />
        )}
      </div>
      <div className="flexdiv">
        <a
          href={item.url}
          className="title"
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
        <p
          className="contents"
          dangerouslySetInnerHTML={{ __html: item.contents }}
        />
      </div>
    </CafeItemContainer>
  );
};
export default CafeItems;
