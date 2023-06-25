import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  max-width: 100em;
  margin-right: auto;
  margin-left: auto;
  padding: 5em 6em;
  min-height: 100vh;
  padding-top: 11em;
  padding-bottom: 11em;
`;

export const ListHeader = styled.div`
  display: flex;
  margin-bottom: 3em;
  padding-bottom: 2em;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  border-bottom: 2px solid hsla(0, 0%, 93.3%, 0.2);
  text-size-adjust: 100%;
  .projects_heading {
    position: relative;
    bottom: 12px;
    font-family: "Rainer", sans-serif;
    font-size: 11em;
    line-height: 0.8;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: -0.9px;
    text-size-adjust: 100%;
    -webkit-box-align: end;
  }
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  a {
    max-width: 100%;
    display: inline-block;
    padding: 0.9em 2.1em;
    border-style: solid;
    border-width: 2px;
    border-color: #eee;
    border-radius: 100vw;
    background-color: #eee;
    color: #070707;
    font-size: 0.9rem;
    font-weight: 700;
    p {
      font-size: 1em;
      line-height: 1;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
  }
`;
export const CatListSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  justify-content: space-between;
`;

export const PageNationComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  .pageLinkNumberCont {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    text-align: center;
  }

  span {
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const PagePrevButton = styled.button`
  border: none;
  color: #fff;
  width: 50px;
  height: 50px;
  background: none;
  font-size: large;
`;
