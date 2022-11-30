import styled from "styled-components";
import React, { Component } from "react";

function ProjectPage() {
  return (
    <G.ProjectGridContainer id="2">
      <G.ProjectLeading>
        Recent <br /> Project
      </G.ProjectLeading>
    </G.ProjectGridContainer>
  );
}

const G = {
  GridItemProject: styled.div`
    grid-area: project;
  `,

  ProjectGridContainer: styled.div`
    // width: 100%;
    // height: 100vh;
    // margin: 0 auto;

    // display: grid;
    // grid-gap: 2.5em;
    // grid-template-column: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

    // grid-template-areas:
    //   "leading"
    //   "introduce"
    //   "project"
    //   "aboutMe"
    //   "idea";
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
};

export default ProjectPage;
