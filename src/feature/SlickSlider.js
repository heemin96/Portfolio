import React, { Component } from "react";
import styled from "styled-components";

//Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 아이콘
import IconComponentPng from "../utils/pngIcon.js";
import IconComponent from "../utils/icon.js";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SlickSlider = (props) => {
  const settings = {
    arrows: true,
    vertical: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 1500,
    rows: 1,
    slidesPerRow: 3,

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
          <S.SliderImage>
            <Ecommerce name="ecommerce" />
          </S.SliderImage>
          <S.SliderHub>
            <Github name="github" />
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>Trybe Course</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage>
            <TrybeCourse name="trybecourse" />
          </S.SliderImage>
          <S.SliderHub>
            <Github name="github" />
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>Trybetunes</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage>
            <TrybeTunes name="trybetunes" />
          </S.SliderImage>
          <S.SliderHub>
            <Github name="github" />
            <Global name="global" />
          </S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>Ourtube</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage>
            <TrybeCourse name="trybecourse" />
          </S.SliderImage>
          <S.SliderHub></S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>TripUs</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage>
            <TrybeCourse name="trybecourse" />
          </S.SliderImage>
          <S.SliderHub></S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>

        <S.SliderContatiner>
          <S.SliderLeadingTitle>YoutubeClone</S.SliderLeadingTitle>
          <S.SliderSkillStack>ddd</S.SliderSkillStack>
          <S.SliderImage>
            <TrybeCourse name="trybecourse" />
          </S.SliderImage>
          <S.SliderHub></S.SliderHub>
          <S.SliderBlock>-</S.SliderBlock>
        </S.SliderContatiner>
      </Slider>
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 95vw;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition-delay: 10ms;
  // margin: 5%;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
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
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
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
    // margin: 0 10px;
  `,

  SliderHub: styled.div`
    display: flex;
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

// dots: true,     // 슬라이드 밑에 점 보이게
// infinite: true, // 무한으로 반복
// speed: 500,     // 넘기는 속도
// autoplay: false, // 자동으로 넘김
// autoplaySpeed: 2000, //자동으로 넘어가는 속도
// slidesToShow: 1,    // 스크린에 보여지는 슬라이드 개수
// slidesToScroll: 1,  // n장씩 뒤로 넘어가게 함
// centerMode: true,   // 중앙정렬
// centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
// nextArrow: <>  // 슬라이드 좌우 넘기기 커스텀 버튼
// prevArrow: <>  //슬라이드 좌우 넘기기 커스텀 버튼
