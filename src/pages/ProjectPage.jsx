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
        <SlickSlider />
      </G.SliderContainer>
    </G.ProjectGridContainer>
  );
}

const G = {
  ProjectGridContainer: styled.div`
    // width: 100%;
    // height: 100vh;
    // margin: 0 auto;

    // display: grid;
    // grid-gap: 2.5em;
    // grid-template-column: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  `,

  ProjectLeading: styled.div`
    font-size: 92px;
    line-height: 82px;
    font-weight: 700;
    font-family: Poppins;

    @media (max-width: 1024px) {
      font-size: 66px;
    }

    @media (max-width: 768px) {
      font-size: 56px;
      line-height: 50px;
      font-weight: 600;
    }
  `,

  SliderContainer: styled.div``,
};

export default ProjectPage;
