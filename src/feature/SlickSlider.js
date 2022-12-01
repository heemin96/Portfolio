import React, { Component } from "react";
import styled from "styled-components";
// import "../styles/global.css";

//Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 아이콘
import IconComponentPng from "../utils/pngIcon.js";
import IconComponent from "../utils/icon.js";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";

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
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        <S.SliderContatiner>
          <S.SliderLeadingTitle>E-commerce</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "blue" }}>
            <MdAccessibilityNew style={{ fontSize: "100px" }} />
            {/* <Ecommerce name="ecommerce" /> */}
          </S.SliderImage>
          <S.SliderHub>
            <span>Github</span>
            <Github name="github" />

            <span>Global</span>
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>Trybe Course</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "red" }}>
            <MdAccessibilityNew style={{ fontSize: "100px" }} />
            {/* <TrybeCourse name="trybecourse" /> */}
          </S.SliderImage>
          <S.SliderHub>
            <span>Github</span>
            <Github name="github" />

            <span>Global</span>
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>Trybetunes</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "yellow" }}>
            <MdAccessibilityNew style={{ fontSize: "100px" }} />
            {/* <TrybeTunes name="trybetunes" /> */}
          </S.SliderImage>
          <S.SliderHub>
            <span>Github</span>
            <Github name="github" />

            <span>Global</span>
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>Trybetunes</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "yellow" }}>
            <MdAccessibilityNew style={{ fontSize: "100px" }} />
            {/* <TrybeTunes name="trybetunes" /> */}
          </S.SliderImage>
          <S.SliderHub>
            <span>Github</span>
            <Github name="github" />

            <span>Global</span>
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>
        <S.SliderContatiner>
          <S.SliderLeadingTitle>Trybetunes</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "yellow" }}>
            <MdAccessibilityNew style={{ fontSize: "100px" }} />
            {/* <TrybeTunes name="trybetunes" /> */}
          </S.SliderImage>
          <S.SliderHub>
            <span>Github</span>
            <Github name="github" />

            <span>Global</span>
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>Trybetunes</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "yellow" }}>
            <MdAccessibilityNew style={{ fontSize: "100px" }} />
            {/* <TrybeTunes name="trybetunes" /> */}
          </S.SliderImage>
          <S.SliderHub>
            <span>Github</span>
            <Github name="github" />

            <span>Global</span>
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>
      </Slider>
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
`;

const Pre = styled.div`
  color: black;
  font-size: 30px;
  margin-top: 200px;
  left: 91%;
  z-index: 3;
  &:hover {
    color: gray;
  }
`;

const NextTo = styled.div`
  color: black;
  font-size: 30px;
  right: 3%;
  margin-top: 200px;
  z-index: 3;
  &:hover {
    color: gray;
  }
`;
const S = {
  SliderContatiner: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
    // display: flex;
    // padding: 30px 0 20px 0;
    border-radius: 18px;
    margin: 0 10px;
  `,

  SliderHub: styled.div`
    display: flex;
    flex-direction: row;
  `,

  SliderBlock: styled.div`
    margin: 40px 0;
    color: white;
  `,
};

const Ecommerce = styled(IconComponent)``;
const TrybeCourse = styled(IconComponent)``;
const TrybeTunes = styled(IconComponent)``;
const Github = styled(IconComponentPng)``;
const Global = styled(IconComponentPng)``;

export default SlickSlider;
