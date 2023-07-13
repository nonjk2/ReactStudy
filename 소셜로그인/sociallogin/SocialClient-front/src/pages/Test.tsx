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
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .imgdiv {
      position: relative;
      height: 50px;
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
// resolve: {
// alias: [
// { find: "@common", replacement: path.resolve(__dirname, "src/common") },
// {
// find: "@components",
// replacement: path.resolve(__dirname, "src/commponents"),
// },
// { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
// { find: "@redux", replacement: path.resolve(__dirname, "src/redux") },
// { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
// { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
// ],
// },
// };
// });
