import React, { Component } from "react";
import styled from "styled-components";
import AppButton from "../components/AppButton.jsx";

//Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 아이콘
import IconComponentPng from "../utils/pngIcon.js";
import IconComponent from "../utils/svgIcon.js";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";

import testImg from "../assets/icons/testImg.png";
import { ReactComponent as Ecommerce2 } from "../assets/images/E_commerce.svg";

const SlickSlider = (props) => {
  const settings = {
    arrows: true,
    vertical: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 1500,
    rows: 1,
    centerMode: false,

    // slidesPerRow: 3,

    nextArrow: (
      <NextTo>
        <BsFillArrowRightCircleFill />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <BsFillArrowLeftCircleFill />
      </Pre>
    ),

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          rows: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const SlideList = [
    {
      name: "E-commerce",
      stack: ["react", "restApi"],
      backgroundColor: "blue",
      img: { testImg },
    },
    {
      name: "Youtube-clone",
      stack: ["react", "restApi", "Redux"],
      backgroundColor: "red",
      img: { testImg },
    },
    {
      name: "Ourtube",
      stack: ["react", "restApi", "css"],
      backgroundColor: "green",
      img: { testImg },
    },
    {
      name: "E-commerce",
      stack: ["react", "restApi"],
      backgroundColor: "pink",
      img: { testImg },
    },
    {
      name: "E-commerce",
      stack: ["react", "restApi"],
      backgroundColor: "yellow",
      img: { testImg },
    },
    {
      name: "E-commerce",
      stack: ["react", "restApi", "html"],
      backgroundColor: "gray",
      img: { testImg },
    },
  ];

  return (
    <StyledSlider>
      <Slider {...settings}>
        {SlideList.map(({ name, stack, backgroundColor, img, index }) => (
          <S.SliderContatiner>
            <S.SliderLeadingTitle>{name}</S.SliderLeadingTitle>
            <S.SliderSkillStack>
              {stack.map((stack) => (
                <AppButton variant={stack}>{stack}</AppButton>
              ))}
            </S.SliderSkillStack>
            <S.SliderImage color={backgroundColor}>
              {/* <MdAccessibilityNew className="icon" /> */}
              {/* <Ecommerce name="ecommerce" /> */}
              {/* <Ecommerce2 />  모듈 x 직접 임포트*/}
              <img src={testImg} />
            </S.SliderImage>
            <HubContainer />
            <S.SliderBlock>-</S.SliderBlock>
          </S.SliderContatiner>
        ))}
      </Slider>
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  display: grid;
  height: 100%;
`;

const Pre = styled.div`
  color: black;
  font-size: 30px;
  margin-top: 150px;
  left: 91%;
  z-index: 3;
  &:hover {
    color: gray;
  }

  ${({ theme }) => theme.device.tablet} {
    left: 89%;
  }

  ${({ theme }) => theme.device.mobile} {
    left: 82%;
    margin-top: 22rem;
  }
`;

const NextTo = styled.div`
  color: black;
  font-size: 30px;
  right: 3%;
  margin-top: 150px;
  z-index: 3;
  &:hover {
    color: gray;
  }

  ${({ theme }) => theme.device.mobile} {
    margin-top: 22rem;
  }
`;

//slick style components
const S = {
  SliderContatiner: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  SliderLeadingTitle: styled.div`
    font-size: 38px;
    line-height: 57px;
    font-weight: 600;
    font-family: poppins;
    text-align: start;
  `,

  SliderSkillStack: styled.div`
    text-align: start;
  `,

  SliderImage: styled.div`
    max-width: 100%;
    border-radius: 18px;
    margin-right: 10px;
    text-align: center;
    background-color: ${(props) => props.color};

    .icon {
      font-size: 200px;
    }
  `,

  SliderHub: styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 5px;
  `,

  SliderBlock: styled.div`
    margin: 10px 0;
    color: white;
  `,
};

const Ecommerce = styled(IconComponent)`
  display: block;
  width: 90%;
  margin: 0 auto;
`;
const TrybeCourse = styled(IconComponent)`
  display: block;
  width: 90%;
  margin: 0 auto;
`;
const TrybeTunes = styled(IconComponent)`
  display: block;
  width: 90%;
  margin: 0 auto;
`;
const Github = styled(IconComponentPng)``;
const Global = styled(IconComponentPng)``;

const HubContainer = () => {
  return (
    <>
      <S.SliderHub>
        <span>Github</span>
        <Github name="github" />

        <span>Global</span>
        <Global name="global" />
      </S.SliderHub>
    </>
  );
};

export default SlickSlider;
