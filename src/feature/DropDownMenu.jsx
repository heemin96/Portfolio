import useDetectClose from "../hooks/useDetectClose";
import IconComponentPng from "../utils/pngIcon.js";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";

const DropDownMenu = () => {
  const [IsOpen, Ref, removeHandler] = useDetectClose(false);

  const menuList = [
    {
      key: "1",
      fontColor: "black",
      name: "Introduce",
    },
    {
      key: "2",
      fontColor: "blue",
      name: "Project",
    },
    {
      key: "3",
      fontColor: "red",
      name: "AboutMe",
    },
    {
      key: "4",
      fontColor: "green",
      name: "Idea",
    },
  ];

  //키값 안주면
  //키값 생성기 + index 방법 있음

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={removeHandler} ref={Ref}>
          <MenuBar name="menubar" />
          <Menu isDropped={IsOpen}>
            <Ul>
              {menuList.map(({ key, fontColor, name }) => (
                <Link key={key} to={key} spy={true} smooth={true}>
                  <Li key={key} style={{ color: fontColor }}>
                    {name}
                  </Li>
                </Link>
              ))}
            </Ul>
          </Menu>
        </DropdownButton>
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

  ${({ theme }) => theme.device.tablet} {
    width: 130px;
  }

  //조건부 스타일 생성
  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(0, 10%);
    `};
`;

const Ul = styled.ul`
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
