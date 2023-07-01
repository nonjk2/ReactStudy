/* eslint-disable react/prop-types */
import styled from "styled-components";

const WebItemContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f1f3f4;
  overflow: hidden;
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
`;

const WebItems = (props) => {
  const { item } = props;
  return (
    <WebItemContainer>
      <h2 className="title" dangerouslySetInnerHTML={{ __html: item.title }} />
      <p
        className="contents"
        dangerouslySetInnerHTML={{ __html: item.contents }}
      />

      <a to={item.url} className="dataUrl">
        {item.url}
      </a>
    </WebItemContainer>
  );
};
export default WebItems;
