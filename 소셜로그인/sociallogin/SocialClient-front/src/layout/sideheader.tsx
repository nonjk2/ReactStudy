import styled from "styled-components";
import { FaDog } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbDog, TbHomeHeart } from "react-icons/tb";
const SideBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  transform: translateY(-20%);
  width: 70px;
  min-width: 70px;
  z-index: 100;
  height: 60%;
  .headerContent {
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    background-color: #fff;
    box-shadow: 0 3px 14px 0 rgba(74, 58, 255, 0.03), 0 -2px 4px 0 rgba(20, 20, 43, 0.05),
      0 12px 24px 0 rgba(20, 20, 43, 0.01);
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }
  .icon {
    color: black;
    transition: color 0.3s;
    &:hover {
      color: aqua;
    }
  }
`;

const SideHeader = () => {
  return (
    <SideBarContainer>
      <div className="headerContent">
        <Link to={"/"}>
          <FaDog size={25} className="icon" />
        </Link>
        <Link to={"/main/post"}>
          <TbDog size={25} className="icon" />
        </Link>
        <Link to={"/mydog"}>
          <TbHomeHeart className="icon" size={25} />
        </Link>
      </div>
    </SideBarContainer>
  );
};
export default SideHeader;
