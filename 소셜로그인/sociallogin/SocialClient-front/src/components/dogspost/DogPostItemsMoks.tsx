import { ItemWrraper, PostDogsItemContainer } from "../main/DogListItemStyle";
import styled, { keyframes } from "styled-components";

const Skeleton = keyframes`
    0% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.6);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.3);
    }
`;
const Paper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  border-radius: 15px;
`;

const PaperContainer = styled.div`
  position: sticky;
  perspective: 1000px;
  width: 100%;
  border-radius: 15px;
  height: 40vh;
  animation: ${Skeleton} 1.5s infinite ease-in-out;
`;

const DogPostListMockItem = () => {
  const Mockcontent = (
    <PostDogsItemContainer>
      <PaperContainer>
        <Paper className="paper"></Paper>
      </PaperContainer>
    </PostDogsItemContainer>
  );

  const lastItem = <ItemWrraper>{Mockcontent}</ItemWrraper>;

  return <>{[...Array(15)].map(() => lastItem)}</>;
};

export default DogPostListMockItem;
