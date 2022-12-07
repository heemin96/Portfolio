// import logo from "./logo.svg";
import styled from "styled-components";
import IconComponentPng from "../utils/pngIcon.js";
import DropDownMenu from "../feature/DropDownMenu.jsx";

function Navbar() {
  return (
    <W.FlexContainer id="5">
      <W.NavLeft>
        <W.LeftBox>
          <MainLogo name="logo" />
        </W.LeftBox>
      </W.NavLeft>
      <W.NavRight>
        <W.RightBox>
          <DropDownMenu />
        </W.RightBox>
      </W.NavRight>
    </W.FlexContainer>
  );
}

const W = {
  FlexContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: -250px;
  `,

  NavLeft: styled.div``,

  LeftBox: styled.div`
    margin-left: -25px;
  `,

  NavRight: styled.div`
    justify-self: end;
    cursor: pointer;
  `,

  RightBox: styled.div`
    margin-top: 15px;
    margin-right: 5px;
  `,
};

const MainLogo = styled(IconComponentPng)``;

export default Navbar;
