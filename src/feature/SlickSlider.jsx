import React, { Component } from "react";
import styled from "styled-components";
import AppButton from "../components/AppButton.jsx";

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

  return (
    <StyledSlider>
      <Slider {...settings}>
        <S.SliderContatiner>
          <S.SliderLeadingTitle>E-commerce</S.SliderLeadingTitle>
          <S.SliderSkillStack>
            <AppButton variant="react">React</AppButton>
            <AppButton variant="restApi">RestApi</AppButton>
          </S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "blue" }}>
            <MdAccessibilityNew style={{ fontSize: "200px" }} />
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
          <S.SliderSkillStack>
            <AppButton variant="react">React native</AppButton>
            <AppButton variant="redux">Redux</AppButton>
          </S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "red" }}>
            <MdAccessibilityNew style={{ fontSize: "200px" }} />
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
          <S.SliderSkillStack>
            <AppButton variant="react">HTML</AppButton>
            <AppButton variant="css">CSS</AppButton>
            <AppButton variant="js">JS</AppButton>
            <AppButton variant="redux">Redux</AppButton>
          </S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "yellow" }}>
            <MdAccessibilityNew style={{ fontSize: "200px" }} />
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
          <S.SliderLeadingTitle>Ourtube</S.SliderLeadingTitle>
          <S.SliderSkillStack>
            <AppButton variant="css">CSS</AppButton>
            <AppButton variant="js">JS</AppButton>
            <AppButton variant="redux">Redux</AppButton>
          </S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "gray" }}>
            <MdAccessibilityNew style={{ fontSize: "200px" }} />
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
          <S.SliderLeadingTitle>YoutubeClone</S.SliderLeadingTitle>
          <S.SliderSkillStack>
            <AppButton variant="react">React</AppButton>
            <AppButton variant="restApi">RestApi</AppButton>
          </S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "yellow" }}>
            <MdAccessibilityNew style={{ fontSize: "200px" }} />
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
          <S.SliderLeadingTitle>TripUs</S.SliderLeadingTitle>
          <S.SliderSkillStack>
            <AppButton variant="react">React</AppButton>
            <AppButton variant="redux">redux</AppButton>
          </S.SliderSkillStack>
          <S.SliderImage style={{ backgroundColor: "yellow" }}>
            <MdAccessibilityNew style={{ fontSize: "200px" }} />
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

  @media (max-width: 1024px) {
    left: 89%;
  }

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
  `,

  SliderHub: styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 5px;
  `,

  SliderBlock: styled.div`
    margin: 40px 0;
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

export default SlickSlider;
