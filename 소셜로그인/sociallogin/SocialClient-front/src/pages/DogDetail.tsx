import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDogsMine } from "../api/Dogs";
import styled from "styled-components";
import { Post } from "../types/post";
import Input from "../util/input";
import useInput from "../hooks/useInput";

const DogDetailContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  border-radius: 15px;
  .dogCard {
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    height: 90vh;
    transition: transform 0.5s;
  }

  .dogCard > span {
    margin-top: 1rem;
    font-family: "Dongle", sans-serif;
    font-weight: normal;
    color: #4a4a7d;
    font-size: 2rem;
    text-align: center;
  }
`;
interface DogCardWrraper {
  DogCardwrraper: Post;
}
const DogCardWrraper = styled.div<DogCardWrraper>`
  background-image: url(${(props) => props.DogCardwrraper.image.url});
  background-size: cover;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  color: #fff;
  &::before {
    content: "";
    border-radius: 15px;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  }
`;
const DogDetail = () => {
  const { dogid } = useParams();
  const [nameValue, setNameValue] = useInput();
  if (!dogid) {
    return <div>Invalid dog id</div>;
  }
  const { data, isLoading, error } = useQuery("getdog", () => getDogsMine(dogid));

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>에러입니다</div>;
  }

  return (
    <DogDetailContainer>
      {data && (
        <DogCardWrraper className="dogCard" DogCardwrraper={data[0]}>
          <div className="input-context">
            <Input
              onChange={setNameValue}
              value={nameValue}
              InputSize="small"
              placeholder="이름을 입력해주세요"
              color="white"
            />
          </div>
        </DogCardWrraper>
      )}
    </DogDetailContainer>
  );
};
export default DogDetail;
