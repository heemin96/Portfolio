import styled from "styled-components";
import React, { Component } from "react";
import SlickSlider from "../feature/SlickSlider";

function ProjectPage() {
  return (
    <G.ProjectGridContainer id="2">
      <G.ProjectLeading>
        Recent <br /> Project
      </G.ProjectLeading>
      <G.SliderContainer>
        <SlickSlider />{" "}
      </G.SliderContainer>
    </G.ProjectGridContainer>
  );
}

const G = {
  ProjectGridContainer: styled.div`
    height: auto;
    width: 100%; ;
  `,

  ProjectLeading: styled.div`
    font-size: 92px;
    line-height: 82px;
    font-weight: 700;
    font-family: Poppins;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
      font-size: 66px;
    }

    @media (max-width: 768px) {
      font-size: 56px;
      line-height: 50px;
      font-weight: 600;
    }
  `,

  SliderContainer: styled.div`
    width: 100%;
  `,
};

export default ProjectPage;
