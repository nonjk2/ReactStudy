import axios, { AxiosResponse } from "axios";
const SOCIAL_CONFIG = {
  kakao_client_id: import.meta.env.VITE_KAKAO_CLIENT_KEY,
  kakao_redirect_uri: import.meta.env.VITE_KAKAO_REDIRENT_URI,
  kakao_url: import.meta.env.VITE_KAKAO_URL,
  naver_client_id: import.meta.env.VITE_NAVER_CLIENT_KEY,
  naver_redirect_uri: import.meta.env.VITE_NAVER_REDIRENT_URI,
  naver_secret_id: import.meta.env.VITE_NAVER_SECRET_CLIENT_KEY,
  naver_url: import.meta.env.VITE_NAVER_URL,
  google_client_id: import.meta.env.VITE_GOOGLE_CLIENT_KEY,
  google_redirect_uri: import.meta.env.VITE_GOOGLE_REDIRENT_URI,
  google_url: import.meta.env.VITE_GOOGLE_URL,
};
export const KakaoUnlink = async (token: string | null | undefined): Promise<AxiosResponse> => {
  const response = await axios.get("https://kapi.kakao.com/v1/user/unlink", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const naverAuthRequest = async (): Promise<AxiosResponse> => {
  const response = await axios.get("https://nid.naver.com/oauth2.0/authorize", {
    params: {
      client_id: SOCIAL_CONFIG.naver_client_id,
      client_secret: SOCIAL_CONFIG.naver_secret_id,
      redirect_uri: SOCIAL_CONFIG.naver_redirect_uri,
      state: "naver",
      auth_type: "reprompt",
    },
  });
  return response;
};
export const LogOut = async (): Promise<AxiosResponse> => {
  const response = await axios.post("http://localhost:3001/user/logout");
  return response;
};
/**  네이버 언링크 */
export const NaverLogOut = async (token: string | null | undefined): Promise<AxiosResponse[]> => {
  const nomalLogout = axios.post("http://localhost:3001/user/logout");
  const naverUnlinks = axios.post("http://localhost:3001/user/logout/naver", {
    token: token,
  });

  const responses = await Promise.all([nomalLogout, naverUnlinks]);

  return responses;
};
