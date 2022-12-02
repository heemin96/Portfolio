import styled from "styled-components";
import React, { Component } from "react";
import SlickSlider from "../feature/SlickSlider";

function ProjectPage() {
  return (
    <G.ProjectGridContainer id="2">
      <G.ProjectLeading>
        Recent <br /> Project
      </G.ProjectLeading>

      <SlickSlider />
    </G.ProjectGridContainer>
  );
}

const G = {
  ProjectGridContainer: styled.div``,

  ProjectLeading: styled.div`
    // font-size: 92px;
    font-size: calc(12px + 4.5vw);
    line-height: 82px;
    font-weight: 700;
    font-family: Poppins;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
      line-height: 45px;
    }

    @media (max-width: 768px) {
      font-size: calc(40px + 4.5vw);
      line-height: 50px;
      font-weight: 600;
    }
  `,

  SliderContainer: styled.div``,
};

export default ProjectPage;
