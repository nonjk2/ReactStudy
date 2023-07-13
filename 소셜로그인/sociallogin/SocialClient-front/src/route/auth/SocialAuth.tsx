import axios from "axios";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { userSet } from "../../store/slice/userSlice";

const SocialAuth = () => {
  const [searchParams] = useSearchParams();
  // const code = searchParams.get("code");
  const state = searchParams.get("state");
  const code = searchParams.get("code");
  const dispatch = useAppDispatch();
  // console.log(code);
  const dataset = (res: any) => {
    switch (state) {
      case "naver":
        return {
          id: res.data.data.name,
          nickname: res.data.data.email || "",
          token: res.data.token,
        };
      case "kakao":
        return {
          id: res.data.data.kakao_account.profile.nickname,
          nickname: res.data.data.kakao_account.email || "",
          token: res.data.token,
        };

      default:
        return {
          id: res.data.data.name || "",
          nickname: res.data.data.email || "",
          token: res.data.token || null,
        };
    }
  };
  useEffect(() => {
    const socialfecth = async () => {
      await axios
        .post(`http://localhost:3001/${state}`, {
          code: code,
        })
        .then((res) => {
          dispatch(userSet(dataset(res)));
          localStorage.setItem("accessToken", res.data.token);
          console.log(res);
        })
        .catch((err) => console.log("에러발생", err));
    };
    socialfecth();
  }, []);
  return <div> 로딩중</div>;
};
export default SocialAuth;
