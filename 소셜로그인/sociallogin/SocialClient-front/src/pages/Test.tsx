import styled from "styled-components";
import Button from "../util/button";
import { useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { userLogOut } from "../store/slice/userSlice";
import { KakaoUnlink, LogOut, NaverLogOut } from "../api/Auth";

const TestContainer = styled.div`
  display: flex;
  max-width: 800px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .Test-Wrraper {
    border-radius: 20px;
    height: 60vh;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 3px 14px 0 rgba(74, 58, 255, 0.3), 0 -2px 4px 0 rgba(20, 20, 43, 0.05),
      0 12px 24px 0 rgba(20, 20, 43, 0.01);
  }
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

    white-space: pre-wrap;
    overflow: hidden;
    gap: 20px;
    span {
      /* 추가된 속성 */
    }
    .span {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .imgdiv {
      position: relative;
      height: 50px;
      min-width: 50px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      border-radius: 50%;
    }
  }
`;

const Test = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  interface socialLogout {
    [key: string]: any[];
    kakao: any[];
    naver: any[];
    google: any[];
  }
  const foundTokenEntry =
    user.tokens && Object.entries(user.tokens).find(([key, value]) => value !== null);

  const logout: socialLogout = {
    kakao: [() => KakaoUnlink(user.tokens?.kakao), () => LogOut()],
    naver: [() => NaverLogOut(user.tokens?.naver)],
    google: [() => LogOut()],
  };

  const onLogout = async () => {
    if (confirm("로그아웃할꺼임?")) {
      const actions = logout[foundTokenEntry![0]];
      await Promise.all(actions.map((logout) => logout()))
        .then((res) => {
          setIsLoading(true);
          dispatch(userLogOut());
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
    }
  };
  return (
    <TestContainer>
      <div className="Test-Wrraper">
        <div className="span">
          <p>이메일</p>
          <h1>{user.nickname}</h1>
          <h1>{user.id}</h1>
          <div className="imgdiv">{user.picture && <img src={user.picture} />}</div>
        </div>
        <div>
          <Button
            color="red"
            size="large"
            title={<>{isLoading ? "로딩중" : "로그아웃하기"}</>}
            onClick={onLogout}
          />
        </div>
      </div>
    </TestContainer>
  );
};

export default Test;

// mport { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import { ViteEjsPlugin } from "vite-plugin-ejs";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
// return {
// plugins: [react()],
