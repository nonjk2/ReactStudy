import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  nickname: string;
  token: string | null;
}

const initialState: UserState = {
  id: "최은석",
  nickname: "최은석",
  token: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userSet: (state, action: PayloadAction<UserState>) => {
      const { id, nickname, token } = action.payload;
      state.id = id;
      state.nickname = nickname;
      state.token = token;
    },
    userLogOut: (state) => {
      state.id = "";
      state.nickname = "";
      state.token = null;
    },
  },
  extraReducers: () => {},
});
export const { userSet, userLogOut } = userSlice.actions;
export default userSlice.reducer;
