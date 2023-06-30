import styled from "styled-components";

export const CatListItemContainer = styled.div`
  position: relative;
  display: flex;
  transition: all 1s;
  width: 33%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  translate: none;
  rotate: none;
  scale: none;
  transform: translate3d(0px, 0px, 0px);
  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
  .loading-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
  }
  .img_div {
    translate: none;
    rotate: none;
    scale: none;
    transition: all 1s;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    width: 100%;
    max-width: 38em;

    flex: 0 0 auto;
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
    translate: none;
    rotate: none;
    scale: none;
    justify-content: space-between;
    display: flex;
    transition: all 1s;
    transform: translate3d(0px, 0px, 0px);
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
