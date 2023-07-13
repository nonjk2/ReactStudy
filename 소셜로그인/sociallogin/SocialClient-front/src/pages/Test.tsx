import styled from "styled-components";
import Button from "../util/button";
import { useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { userLogOut } from "../store/slice/userSlice";

const TestContainer = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 1px solid #000;
  border-radius: 20px;
  button {
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    text-overflow: ellipsis;
    flex: 1;
    white-space: pre-wrap;
    overflow: hidden;
    gap: 30px;
    span {
      /* 추가된 속성 */
    }
    .span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const Test = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const onLogout = async () => {
    if (confirm("로그아웃할꺼임?")) {
      setIsLoading(true);
      await axios
        .post("http://localhost:3001/user/logout")
        .then(() => dispatch(userLogOut()))
        .finally(() => {
          setIsLoading(false);
        });
    } else {
    }
  };
  return (
    <TestContainer>
      <div className="span">
        <p>이메일</p>
        <h1>{user.nickname}</h1>
        <p>{user.token}</p>
      </div>
      <div>
        <Button
          color="red"
          size="large"
          title={<>{isLoading ? "로딩중" : "로그아웃하기"}</>}
          onClick={onLogout}
        />
      </div>
    </TestContainer>
  );
};

export default Test;
