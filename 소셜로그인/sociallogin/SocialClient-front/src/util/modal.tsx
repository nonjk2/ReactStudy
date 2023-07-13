import { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const ModalContainer = styled.div<{ width: string; height: string }>`
  position: fixed;
  display: flex;

  //모달중앙
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // 크기
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  padding: 8px;
  background-color: #eee;
  border-radius: 8px;
  z-index: 10000;
  color: black;
  display: flex;
`;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 53;
`;

const Wrapper = styled.div`
  background-color: transparent;
  transition: all 0.5s;
`;

interface ModalProps {
  type?: "default" | "twobutton";
  modal?: any;
  width: string;
  height: string;
  element: JSX.Element;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ width, height, element, setModal, type = "default" }: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, () => {
    if (type !== "twobutton") {
      setModal(false);
    }
  });

  return (
    <>
      <ModalContainer ref={ref} width={width} height={height}>
        <Wrapper>{element}</Wrapper>
      </ModalContainer>
      <ModalBackGround />
    </>
  );
};
