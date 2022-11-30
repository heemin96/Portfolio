import useDetectClose from "../hooks/useDetectClose";
import IconComponentPng from "../utils/pngIcon.js";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";

const DropDownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
          <MenuBar name="menubar" />
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <Ul>
            <Link to="1" spy={true} smooth={true}>
              <Li style={{ color: "black" }}>Introdice</Li>
            </Link>

            <Link to="2" spy={true} smooth={true}>
              <Li style={{ color: "blue" }}>Project</Li>
            </Link>

            <Link to="3" spy={true} smooth={true}>
              <Li style={{ color: "red" }}>AboutMe</Li>
            </Link>

            <Link to="4" spy={true} smooth={true}>
              <Li style={{ color: "green" }}>Idea</Li>
            </Link>
          </Ul>
        </Menu>
      </DropdownContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const DropdownContainer = styled.div`
  position: relative;
  text-align: right;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: #ffffff;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.02),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  position: relative;

  right: 0;
  width: 150px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 130px;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(0, 10%);
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  padding: 15px;
`;

const MenuBar = styled(IconComponentPng)``;

export default DropDownMenu;

//   &:after {
//     content: "";
//     height: 0;
//     width: 0;
//     position: absolute;
//     top: -5px;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     border: 12px solid transparent;
//     border-top-width: 0;
//     border-bottom-color: white;
//   }
