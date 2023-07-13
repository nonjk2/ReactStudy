import styled, { keyframes } from "styled-components";

interface PostItemContainerProps {}

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const PostItemContainer = styled.div<PostItemContainerProps>`
  width: 100%;
  .portalTag {
    width: 100%;
    height: 100%;
    padding: 5px 0px;
  }
  .paddingDiv {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    &:hover {
      .paddingDiv {
        box-shadow: 0 3px 14px 0 rgba(74, 58, 255, 0.3), 0 -2px 4px 0 rgba(20, 20, 43, 0.05),
          0 12px 24px 0 rgba(20, 20, 43, 0.01);
      }
      .myDogImage {
        transform: scale(1.05);
      }
    }
    .lottie {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
    }
    .heartIcon {
      color: #f35252;
      cursor: pointer;
    }
    .absoluteIcon {
      position: absolute;
      right: 0;
      margin: 10px;
      z-index: 10;
    }
  }

  .myDogImage {
    width: 100%;
    user-select: none;
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
    transition: transform 0.3s ease;
    transform: scale(1);
  }

  .scaleAnim {
    animation: ${scaleAnimation} 0.6s;
  }
  span {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;
export const ItemWrraper = styled.div`
  width: 33.3%;
`;
export const PostDogsItemContainer = styled.div<PostItemContainerProps>`
  width: 100%;
  padding: 5px 5px;
  .portalTag {
    width: 100%;
    height: 100%;
    padding: 5px 0px;
  }
  .paddingDiv {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    &:hover {
      .paddingDiv {
        box-shadow: 0 3px 14px 0 rgba(74, 58, 255, 0.3), 0 -2px 4px 0 rgba(20, 20, 43, 0.05),
          0 12px 24px 0 rgba(20, 20, 43, 0.01);
      }
      .myDogImage {
        transform: scale(1.05);
      }
    }
    .lottie {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
    }
    .heartIcon {
      color: #f35252;
      cursor: pointer;
    }
    .absoluteIcon {
      position: absolute;
      right: 0;
      margin: 10px;
      z-index: 10;
    }
  }

  .myDogImage {
    width: 100%;
    user-select: none;
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
    transition: transform 0.3s ease;
    transform: scale(1);
  }

  .scaleAnim {
    animation: ${scaleAnimation} 0.6s;
  }
  span {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

export const ModalContainer = styled.div`
  .myDogImage {
    width: 100%;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
    transition: transform 0.3s ease;
    transform: scale(1);
  }
`;
