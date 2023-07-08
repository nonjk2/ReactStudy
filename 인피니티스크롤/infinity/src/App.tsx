import { Outlet, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";

import Header from "./layout/Header";
import MainPage from "./pages/MainPage";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
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
