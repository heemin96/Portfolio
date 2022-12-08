import React, { Component } from "react";
import styled from "styled-components";
import AppButton from "../components/AppButton.jsx";
import slideList from "../utils/List/sliderList.js";

//Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slickSlider.css";

// 아이콘 
import IconComponent from "../utils/svgIcon.js";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import testImg from "../assets/images/testImg.png";

import IconComponentPng from "../utils/pngIcon.js";

const SlickSlider = () => {
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
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          rows: 1,
          slidesPerRow: 1,
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

  return (
    <StyledSlider>
      <Slider {...settings}>
        {slideList.map(({ name, stack, backgroundColor, img, key }) => (
          <S.SliderContatiner key={key}>
            <S.SliderLeadingTitle>{name}</S.SliderLeadingTitle>
            <S.SliderSkillStack>
              {stack.map((stack) => (
                <AppButton width="400px" size='400' variant={stack}>{stack}</AppButton>
              ))}
            </S.SliderSkillStack>
            <S.SliderImage color={backgroundColor}>
              <S.ImageFlexContainer>
                <img src={img} style={{ width: "80%", height: "150px" }} />
              </S.ImageFlexContainer>
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

  // 수정하기. 
  ${({ theme }) => theme.device.tablet} {
    left: 89%;
  }

  ${({ theme }) => theme.device.mobile} {
    left: 82%;
    margin-top: 23.5rem;
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
    margin-top: 23.5rem;
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
    font-size: 32px;
    line-height: 57px;
    font-weight: 600;
    font-family: poppins;
    text-align: start;
  `,

  SliderSkillStack: styled.div`
    text-align: start;
    white-space: nowrap;
  `,

  SliderImage: styled.div`
    max-width: 320px;
    height: 220px;
    border-radius: 18px;
    text-align: center;
    background-color: ${(props) => props.color};

    ${({ theme }) => theme.device.tablet} {
      max-width: 100%;
    }

    ${({ theme }) => theme.device.mobile} {
      max-width: 100%;
    }
  `,

  ImageFlexContainer: styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
  `,

  SliderHub: styled.div`
    margin-top: 20px;
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
  width: 100%;
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

export default SlickSlider;
