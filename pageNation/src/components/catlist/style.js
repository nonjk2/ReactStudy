import styled from "styled-components";

export const CatListItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 33%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
  .img_div {
    position: relative;
    width: 100%;
    padding-top: 50%;
    img {
      position: absolute;
      left: 0%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      object-position: center;
      max-width: 100%;
      vertical-align: middle;
      display: inline-block;
      border: 0;
    }
  }
  .img_description {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .img_title {
      width: 100%;
      margin-top: 15px;
      font-family: "Rainer", sans-serif;
      color: #eee;
      font-size: 3em;
      line-height: 0.95;
      font-weight: 500;
    }
    .img_category {
      margin-top: 0.9em;
      padding: 0.6em 1.5em;
      border-style: solid;
      border-width: 2px;
      border-color: hsla(0, 0%, 93.3%, 0.2);
      border-radius: 100vw;
      /* background-color: transparent; */
      color: #eee;
      font-size: 0.75rem;
      line-height: 1.2;
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
`;
