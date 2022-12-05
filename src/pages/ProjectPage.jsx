import styled from "styled-components";
import React, { Component } from "react";
import SlickSlider from "../feature/SlickSlider";

function ProjectPage() {
  return (
    <W.ProjectGridContainer id="2">
      <W.ProjectLeadingTitle>
        Recent <br /> Project
      </W.ProjectLeadingTitle>
      <SlickSlider />
    </W.ProjectGridContainer>
  );
}

const W = {
  ProjectGridContainer: styled.div``,

  ProjectLeadingTitle: styled.div`
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHeight.title};
    font-weight: ${({ theme }) => theme.fontWeight.title};
    margin-bottom: 50px;

    ${({ theme }) => theme.device.tablet} {
      line-height: 45px;
    }

    ${({ theme }) => theme.device.mobile} {
      font-size: calc(40px + 4.5vw);
      line-height: calc(40px + 4.5vw);
      font-weight: 600;
    }
  `,

  SliderContainer: styled.div``,
};

export default ProjectPage;
