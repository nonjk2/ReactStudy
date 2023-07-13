import styled from "styled-components";
import { FaDog } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { TbDog, TbHomeHeart } from "react-icons/tb";
import { GiSittingDog } from "react-icons/gi";
const SideBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  transform: translateY(-20%);
  width: 70px;
  min-width: 70px;
  z-index: 100;
  height: 60%;
  .iconbox {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left-color: #000;
    border-left-width: 0px;
    border-left-style: solid;
    transition: all 0.2s;
  }
  .headerContent {
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    background-color: #fff;
    box-shadow: 0 3px 14px 0 rgba(83, 171, 230, 0.109), 0 -2px 4px 0 rgba(83, 171, 230, 0.05),
      0 12px 24px 0 rgba(83, 171, 230, 0.155);
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }
  .icon {
    color: rgb(0, 0, 0);
    transition: color 0.3s;
    &:hover {
      color: aqua;
    }
  }
`;

const SideHeader = () => {
  const location = useLocation();

  const linkColor = (path: string) => {
    const pathStyle =
      location.pathname === path
        ? {
            backgroundColor: "rgba(83, 171, 230,0.6)",
            borderLeftColor: "rgb(83, 171, 230)",
            borderLeftWidth: "5px",
            color: "rgb(83, 171, 230)",
          }
        : {};
    return pathStyle;
  };

  return (
    <SideBarContainer>
      <div className="headerContent">
        <div className="iconbox" style={linkColor("/")}>
          <Link to={"/"}>
            <GiSittingDog size={25} className="icon" />
          </Link>
        </div>
        <div className="iconbox" style={linkColor("/main")}>
          <Link to={"/main"}>
            <FaDog size={25} className="icon" />
          </Link>
        </div>
        <div className="iconbox" style={linkColor("/main/post")}>
          <Link to={"/main/post"}>
            <TbDog size={25} className="icon" />
          </Link>
        </div>
        <div className="iconbox" style={linkColor("/mydog")}>
          <Link to={"/mydog"}>
            <TbHomeHeart className="icon" size={25} />
          </Link>
        </div>
      </div>
    </SideBarContainer>
  );
};
export default SideHeader;
