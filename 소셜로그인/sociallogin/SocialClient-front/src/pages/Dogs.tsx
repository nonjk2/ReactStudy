import { useQuery } from "react-query";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useRedux";
import { getMyDogs } from "../api/Post";
import { FaRegCommentDots } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const MyDogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

const NoNameDogsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 4rem 30px;
  .cardPaddingDiv {
    display: flex;

    width: 20%;
    padding: 10px;
  }
  .card {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    background: #f8f3e8;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    height: 40vh;
    transition: transform 0.5s;
    &:hover {
      transform: rotate(-3.9449440400860136deg);
    }
  }

  .card > img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }

  .card > span {
    margin-top: 1rem;
    font-family: "Dongle", sans-serif;
    font-weight: normal;
    color: #4a4a7d;
    font-size: 2rem;
    text-align: center;
  }
  .icons-warraper {
    padding: 10px;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  .icon-comment {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .icon-detail {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const WaitingDogsContainer = styled.div``;
const Dogs = () => {
  const user = useAppSelector((state) => state.user.id);
  const { isLoading, isError, data } = useQuery("getMyDog", () => getMyDogs(user));
  const yesNameDogs = data?.filter((e) => e.title !== "");
  const noNameDogs = data?.filter((e) => e.title === "");
  const navigate = useNavigate();

  const detailMydogNavigate = (dogsid: string) => {
    navigate(`/main/${dogsid}`);
  };

  if (isError) return <div>에러입니다</div>;
  return (
    <MyDogContainer>
      {/* 이름없는애들 */}
      <NoNameDogsContainer>
        {noNameDogs?.map((dogs) => (
          <div className="cardPaddingDiv" key={dogs.id}>
            <div className="card">
              <img src={dogs.image.url} />
              <span>이름을 지어주세요</span>
              <div className="icons-warraper">
                <FaRegCommentDots
                  onClick={() => {
                    detailMydogNavigate(dogs.id);
                  }}
                  className="icon-comment"
                />
                <GoPencil className="icon-detail" />
              </div>
            </div>
          </div>
        ))}
      </NoNameDogsContainer>
      {/* 이름있지만 산책 대기중인상태 */}
      <WaitingDogsContainer></WaitingDogsContainer>
    </MyDogContainer>
  );
};
export default Dogs;

// 이름있는애들 리스트
// 이름없는애들 리스트
// 각자 상세페이지 갈수 있음
