import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./util/globalStyle";
import SearchPage from "./pages/search";
import styled from "styled-components";

const LayoutMainContainer = styled.main`
  width: 100%;
  max-width: 40rem;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

function LayOut() {
  return (
    <div>
      <LayoutMainContainer>
        <Outlet />
      </LayoutMainContainer>
    </div>
  );
}

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<SearchPage />}></Route>
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
