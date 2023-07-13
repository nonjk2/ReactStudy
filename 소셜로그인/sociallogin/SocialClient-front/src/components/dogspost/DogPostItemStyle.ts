import styled from "styled-components";

export const Paper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.13);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  border-radius: 15px;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
`;

export const PaperContainer = styled.div`
  position: sticky;
  perspective: 1000px;
  width: 100%;
  height: 40vh;
  &:hover,
  &:focus {
    & .paper {
      z-index: 100;
      .PostButtonBox {
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
      }
    }
  }
`;
interface FrontAboutMeOneProps {
  isHasDogs: boolean;
}
export const FrontAboutMeOne = styled.div<FrontAboutMeOneProps>`
  display: flex;

  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #000;
  border-radius: 10px;
  img {
    border-radius: 10px;
    object-fit: contain;
    object-position: center;
  }
  .isHasdogs {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    border-radius: 15px;
  }
`;

export const PostButtonBox = styled.div`
  position: absolute;
  top: 0;
  width: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  white-space: nowrap;
  transition: all 0.3s;
  color: #fff;
  .detailDogs {
    padding: 10px;
  }
  .postform {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .Button-warrper {
    padding: 0 10px;
  }
`;
