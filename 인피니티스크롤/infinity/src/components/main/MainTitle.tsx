import styled from "styled-components";

const MainTitleContainer = styled.div`
  max-width: 83.333%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  flex: 0 83.3333%;

  .title-text {
    display: flex;
    padding-bottom: 4rem;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    h1 {
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-size: 4.5rem;
      line-height: 1;
      font-weight: 700;
      letter-spacing: -0.022em;
      font-weight: 500;
    }
    .change-view {
      display: flex;
      padding: 0.5rem 1.25rem;
      max-width: 100%;
      justify-content: center;
      align-items: center;
      grid-column-gap: 0.5rem;
      grid-row-gap: 0.5rem;
      border: 1.5px solid #000;
      border-radius: 0.5rem;
      transition: all 400ms ease;
      color: #0c111c;
      font-size: 1.125rem;
      line-height: 1.5;
      font-weight: 500;
      letter-spacing: -0.014em;
    }
  }
`;

const MainTitle = () => {
  return (
    <MainTitleContainer>
      <div className="title-text">
        <h1 className="text">‣ LATEST POSTS</h1>
        <a href="" className="change-view">
          <p>GHANCE VIEW</p>
          <div className="change-view-icon">🥸</div>
        </a>
      </div>
    </MainTitleContainer>
  );
};
export default MainTitle;
