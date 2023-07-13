import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  nickname: string;
  token: string | null; // 우리 서버
  picture?: string | null;
  tokens?: {
    kakao?: string | null; // 카카오
    google?: string | null; //구글
    naver?: string | null; // 네이버
  };
}

const initialState: UserState = {
  id: "최은석",
  nickname: "최은석",
  token: null,
  picture: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userSet: (state, action: PayloadAction<UserState>) => {
      const { id, nickname, token, tokens, picture } = action.payload;
      state.id = id;
      state.nickname = nickname;
      state.token = token;
      state.picture = picture || null;
      state.tokens = tokens;
    },
    userLogOut: (state) => {
      state.id = "";
      state.nickname = "";
      state.token = null;
      state.picture = null;
      state.tokens = {
        google: null,
        kakao: null,
        naver: null,
      };
    },
  },
  extraReducers: () => {},
});
export const { userSet, userLogOut } = userSlice.actions;
export default userSlice.reducer;
