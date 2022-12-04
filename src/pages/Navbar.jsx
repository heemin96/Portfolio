// import logo from "./logo.svg";
import styled from "styled-components";
import IconComponentPng from "../utils/pngIcon.js";
import Menubar from "../assets/icons/Menubar.png";
import DropDownMenu from "../feature/DropDownMenu.jsx";

function Navbar() {
  return (
    <W.FlexContainer>
      <W.NavLeft>
        <div style={{ marginLeft: "-25px" }}>
          <MainLogo name="logo" />
        </div>
      </W.NavLeft>
      <W.NavRight>
        <div style={{ marginTop: "15px", marginRight: "5px" }}>
          <DropDownMenu />
        </div>
      </W.NavRight>
    </W.FlexContainer>
  );
}

const W = {
  FlexContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: -250px;
  `,

  NavLeft: styled.div``,

  NavRight: styled.div`
    justify-self: end;
    cursor: pointer;
  `,
};

const MainLogo = styled(IconComponentPng)``;

export default Navbar;
