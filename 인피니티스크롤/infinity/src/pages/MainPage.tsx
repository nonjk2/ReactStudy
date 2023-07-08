import styled from "styled-components";
import MainTitle from "../components/main/MainTitle";
import MainList from "../components/main/MainList";

const MainPageContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 7.5rem;

  .main-wrapper {
    display: flex;
    width: 100%;
    max-width: 90rem;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    grid-row-gap: 1.5rem;
  }
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="main-wrapper">
        <MainTitle />
        <MainList />
      </div>
    </MainPageContainer>
  );
};
export default MainPage;
