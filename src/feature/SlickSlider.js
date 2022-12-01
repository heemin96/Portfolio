import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
};

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
