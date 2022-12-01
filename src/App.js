// import logo from "./logo.svg";
import styled from "styled-components";
import React from "react";
// import "./styles/global.css";

//Page Import
import Navbar from "./pages/Navbar";
import IntroducePage from "./pages/IntroducePage";
import ProjectPage from "./pages/ProjectPage";
import AboutMePage from "./pages/AboutMePage";
import IdeaPage from "./pages/IdeaPage";

function App() {
  return (
    <>
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
      {/* <G.GoUpButton onClick={() => window.scrollTo(0, 0)}>TOP</G.GoUpButton> */}
    </>
  );
}

//G는 Grid
const G = {
  PageContainer: styled.div`
    margin: 0 6rem;

    @media (max-width: 1024px) {
      margin: 0;
    }

    @media (max-width: 768px) {
      margin: 0;
      touch-action: pan-y;
    }
  `,

  GridContainer: styled.div`
    width: 100%;
    height: 100vh;
    justify-content: center;
    display: grid;
    grid-gap: 2.5em;
    grid-template-rows: auto;
    // grid-template-columns: 1fr;

    grid-template-areas:
      " header "
      " introduce "
      " project "
      " aboutMe "
      " idea ";
  `,

  /////////////////////////////////////

  GridItemNav: styled.div`
    grid-area: header;
    border-radius: 3rem;
    padding: 2rem 0 0 0px;
    display: grid;
    background-color: white;
  `,

  GridItemIntroduce: styled.div`
    grid-area: introduce;
    background: linear-gradient(99.03deg, #fbed96 -1%, #abe 92.31%);
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

    @media (max-width: 1024px) {    
      padding: 60px 0px 28px 0px;
  `,

  // GoUpButton: styled.button`
  //   position: fixed;
  //   bottom: 400px;
  //   left: 5px;
  //   width: 70px;
  //   height: 70px;
  //   background: transparent;
  //   cursor: pointer;
  //   border-radius: 100%;
  // `,
};

export default App;
