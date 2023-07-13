import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import DogDetail from "./pages/DogDetail";
import DogPost from "./pages/DogPost";
import Dogs from "./pages/Dogs";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import Layout from "./layout";
import { useAppSelector } from "./hooks/useRedux";
import ProtectedRoutes from "./route/auth/ProtectedRoutes";
import NotAuthRoutes from "./route/auth/AuthRoutes";
import SocialAuth from "./route/auth/SocialAuth";
import { useEffect, useState } from "react";
import Test from "./pages/Test";

function Nav() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const IsToken = useAppSelector((state) => Boolean(state.user.token));
  useEffect(() => {
    setIsAuth(IsToken);
  }, [IsToken]);

  return (
    <Routes>
      <Route element={<NotAuthRoutes user={isAuth} />}>
        <Route path="/login" element={<Welcome />} />
        <Route path="/oauth" element={<SocialAuth />} />
        <Route path="/oauth/naver" element={<SocialAuth />} />
        <Route path="/oauth/google" element={<SocialAuth />} />
        {/* <Route></Route> 회원가입*/}
      </Route>

      <Route element={<ProtectedRoutes user={isAuth} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Test />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/post" element={<DogPost />} />
          <Route path="/main/:dogid" element={<DogDetail />} />
          <Route path="/mydog" element={<Dogs />} />
        </Route>
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
}

export default App;
