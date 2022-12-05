import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

//Page Import
import Navbar from "./pages/Navbar";
import IntroducePage from "./pages/IntroducePage";
import ProjectPage from "./pages/ProjectPage";
import AboutMePage from "./pages/AboutMePage";
import IdeaPage from "./pages/IdeaPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <G.PageContainer>
        <G.GridContainer>
          <G.GridItemNav>
            <Navbar />
          </G.GridItemNav>

          <G.GridItemIntroduce>
            <IntroducePage />
          </G.GridItemIntroduce>

          <G.GridItemProject>
            <ProjectPage />
          </G.GridItemProject>

          <G.GridItemAboutMe>
            <AboutMePage />
          </G.GridItemAboutMe>

          <G.GridItemIdea>
            <IdeaPage />
          </G.GridItemIdea>
        </G.GridContainer>
      </G.PageContainer>
    </ThemeProvider>
  );
}

//G는 Grid
const G = {
  PageContainer: styled.div`
    margin: 0 10%;
    justify-content: center;
  `,

  GridContainer: styled.div`
    max-width: 100%;
    justify-content: center;
    display: grid;
    grid-gap: 2.5em;
    grid-template-rows: auto;
    grid-template-columns: auto;

    grid-template-areas:
      "header"
      "introduce"
      "project"
      "aboutMe"
      "idea";
  `,

  GridItemNav: styled.div`
    grid-area: header;
    border-radius: 3rem;
    padding: 2rem 0 0 0px;
    display: grid;
    background-color: white;
  `,

  GridItemIntroduce: styled.div`
    grid-area: introduce;
    background-color: #dcd9d4;
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
      radial-gradient(
        50% 100%,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(0, 0, 0, 0.3) 100%
      );
    background-blend-mode: normal, lighten, soft-light;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1),
      0px 23px 30px rgba(171, 236, 214, 0.2);
    border-radius: 44px;
  `,

  GridItemProject: styled.div`
    grid-area: project;
  `,

  GridItemAboutMe: styled.div`
    grid-area: aboutMe;
  `,

  GridItemIdea: styled.div`
    grid-area: idea;
    width: 100%;
    background: #111827;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 48px 48px 0px 0px;
    padding: 104px 0px 28px 0px;

      @media (max-width: 768px) {
        padding: 30px 0px 28px 0px;
    
  `,
};

export default App;
