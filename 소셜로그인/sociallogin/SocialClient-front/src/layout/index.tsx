import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideHeader from "./sideheader";

const LayoutContainer = styled.div`
  min-width: 800px;
  max-height: 100vh;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <SideHeader />
      <Outlet />
    </LayoutContainer>
  );
};
export default Layout;
