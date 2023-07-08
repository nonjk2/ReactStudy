import styled from "styled-components";

const HeaderContainer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  .headerWrraper {
    max-width: 90rem;
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
    .headerText {
      display: flex;

      justify-content: flex-start;
      max-width: 83.333%;
      padding-right: 0.75rem;
      padding-left: 0.75rem;

      flex: 0 83.3333%;
    }
  }
  h1 {
    height: 32px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="headerWrraper">
        <div className="headerText">
          <h1>nude flow</h1>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
