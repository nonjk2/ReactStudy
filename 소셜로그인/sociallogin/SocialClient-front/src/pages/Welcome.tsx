import styled from "styled-components";
import useInput from "../hooks/useInput";
import Input from "../util/input";
import { useNavigate } from "react-router-dom";
import DogsWelcome from "../components/DogsWelcome";
import { useAppDispatch } from "../hooks/useRedux";
import { userSet } from "../store/slice/userSlice";
import kakao from "../assets/logo/kakaotalk_sharing_btn_medium.png";
import naver from "../assets/logo/btnW_아이콘사각.png";
import google from "../assets/logo/btn_google_signin_light_normal_web@2x.png";

const SOCIAL_CONFIG = {
  kakao_client_id: import.meta.env.VITE_KAKAO_CLIENT_KEY,
  kakao_redirect_uri: import.meta.env.VITE_KAKAO_REDIRENT_URI,
  kakao_url: import.meta.env.VITE_KAKAO_URL,
  naver_client_id: import.meta.env.VITE_NAVER_CLIENT_KEY,
  naver_redirect_uri: import.meta.env.VITE_NAVER_REDIRENT_URI,
  naver_url: import.meta.env.VITE_NAVER_URL,
  google_client_id: import.meta.env.VITE_GOOGLE_CLIENT_KEY,
  google_redirect_uri: import.meta.env.VITE_GOOGLE_REDIRENT_URI,
  google_url: import.meta.env.VITE_GOOGLE_URL,
};

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  form {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .btns {
    display: flex;
    gap: 5px;

    .login-btn-kakao,
    .login-btn-naver {
      min-width: 50px;
      height: 50px;
    }
    .login-btn-google {
      width: 100%;
      min-height: 50px;
      height: 50px;
    }
    .login-btn-kakao,
    .login-btn-naver,
    .login-btn-google {
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      /* object-fit: contain; */
    }
  }
`;
export const naverReAuthOptions = {
  pathname: `${SOCIAL_CONFIG.naver_url}`,
  search: `?client_id=${SOCIAL_CONFIG.naver_client_id}&redirect_uri=${SOCIAL_CONFIG.naver_redirect_uri}&response_type=code&state=naver&auth_type=reprompt`,
};
const kakaoLinkOptions = {
  pathname: `${SOCIAL_CONFIG.kakao_url}`,
  search: `?client_id=${SOCIAL_CONFIG.kakao_client_id}&redirect_uri=${SOCIAL_CONFIG.kakao_redirect_uri}&response_type=code&state=kakao`,
};
const naverLinkOptions = {
  pathname: `${SOCIAL_CONFIG.naver_url}`,
  search: `?client_id=${SOCIAL_CONFIG.naver_client_id}&redirect_uri=${SOCIAL_CONFIG.naver_redirect_uri}&response_type=code&state=naver`,
};

const googleLinkOptions = {
  pathname: `${SOCIAL_CONFIG.google_url}`,
  search: `?client_id=${SOCIAL_CONFIG.google_client_id}&redirect_uri=${SOCIAL_CONFIG.google_redirect_uri}&response_type=code&state=google&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`,
};
export const socialhandler = (option: socialoption) => {
  window.location.href = `${option.pathname + option.search}`;
};
interface socialoption {
  pathname: string;
  search: string;
}
const Welcome = () => {
  const [nickNameValue, onChangeNickName] = useInput();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmitHandler = () => {
    navigation("/main");
    dispatch(userSet({ id: nickNameValue, nickname: nickNameValue, token: "" }));
    // localstorage
  };
  return (
    <WelcomeContainer>
      <DogsWelcome />
      <form action="" className="nicknameInput" onSubmit={onSubmitHandler}>
        <label className="nickname">닉네임</label>
        <Input
          onChange={onChangeNickName}
          value={nickNameValue}
          placeholder="닉네임을써주세요"
          color="black"
        />
      </form>
      <div className="btns">
        <div className="login-btn-kakao" onClick={() => socialhandler(kakaoLinkOptions)}>
          <img src={kakao} alt="" />
        </div>

        <div className="login-btn-naver" onClick={() => socialhandler(naverLinkOptions)}>
          <img src={naver} alt="" />
        </div>
        <div className="login-btn-google" onClick={() => socialhandler(googleLinkOptions)}>
          <img src={google} alt="" />
        </div>
      </div>
    </WelcomeContainer>
  );
};
export default Welcome;
