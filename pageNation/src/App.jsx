import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import CatList from "./pages/catlist";
import GlobalStyle from "./utils/globalStyled";

const MainStyle = styled.main`
  display: block;
`;
const Wrapper = styled.section`
  margin: 0 auto;
  min-height: 100vh;
`;

function Layout() {
  return (
    <div>
      <MainStyle>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </MainStyle>
    </div>
  );
}
function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path=":page" element={<CatList />} />
        <Route index element={<CatList />} />
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
