// import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import IconComponent from "./utils/icon.js";
import React, { Component } from "react";
import Logo from "./assets/icons/Logo.png";
import Menubar from "./assets/icons/Menubar.png";
import Memoji from "./assets/icons/Memoji.png";
import RightVector from "./assets/icons/RightVector.png";
import AboutMeMemoji from "./assets/icons/AboutMe_Memoji.png";
import ReactIcon from "./assets/icons/React_ic.png";
import NodeIcon from "./assets/icons/Node_ic.png";
import MysqlIcon from "./assets/icons/Mysql_ic.png";
import OrangeRightArrow from "./assets/icons/OrangeRightArrow.png";
import StraightLine from "./assets/icons/StraightLine.png";

function App() {
  return (
    <G.PageContainer>
      <G.GridContainer>
        <G.GridItemNav>
          <G.NavLeft>
            <div style={{ marginLeft: "-25px" }}>
              <img src={Logo} />
            </div>
          </G.NavLeft>
          <G.NavRight>
            <div style={{ marginTop: "10px", marginRight: "5px" }}>
              <img src={Menubar} />
            </div>
          </G.NavRight>
        </G.GridItemNav>

        <G.GridItemIntroduce>
          <G.IntroduceFlexContainer>
            <G.IntroduceProfileImage>
              <img src={Memoji} />
            </G.IntroduceProfileImage>
            <G.IntroduceContent1>Hi i'm Daniel 🤙</G.IntroduceContent1>

            {/* <G.StraightLine>
                  <img src={StraightLine} />
                </G.StraightLine> */}

            <G.IntroduceContent2>
              I <span />
              <G.BlueText>develop</G.BlueText>
              <br /> ideas and help
              <br /> build a better world <br /> through <br /> software.
            </G.IntroduceContent2>

            <G.IntroduceContent3>
              <G.BlackButton>Contato</G.BlackButton>
              <G.TransParentButton>
                Download CV <img src={RightVector} />
              </G.TransParentButton>
            </G.IntroduceContent3>
          </G.IntroduceFlexContainer>
        </G.GridItemIntroduce>

        <G.GridItemProject>
          <G.ProjectGridContainer>
            <G.ProjectLeading>
              Recent <br /> Project
            </G.ProjectLeading>
          </G.ProjectGridContainer>
        </G.GridItemProject>

        <G.GridItemAboutMe>
          <G.AboutMeGridContainer>
            <G.AboutMeLeadingTitle>
              <G.OrangeRightArrow>
                <img src={OrangeRightArrow} />
              </G.OrangeRightArrow>
              About <br /> Me
            </G.AboutMeLeadingTitle>
            <G.AboutMeLeading>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    height: "120px",
                    width: "1px",
                    marginRight: "15px",
                    marginTop: "3px",
                    borderRight: "1px solid black",
                    borderRadius: "999px",
                    background: "#111827",
                    paddingLeft: "3px",
                  }}
                ></div>
                Tenho 20 anos, estou em transição de carreira,
                <br /> vindo da área administrativa onde desenvolvi
                <br /> experiência com gestão de <br />
                pessoas, gestão de empresas e negociação com cliente.
                <br />
                <br /> Hoje construo aplicações fullstack!
              </div>
            </G.AboutMeLeading>
            <G.AboutMeMemoji>
              <img src={AboutMeMemoji} />
            </G.AboutMeMemoji>
            <G.AboutMeSkills>
              <G.AboutMeSkillsLeadingTitle>Skills</G.AboutMeSkillsLeadingTitle>
              <G.AboutMeSkillsIconContainer>
                <img src={ReactIcon} />
                <img src={NodeIcon} />
                <img src={MysqlIcon} />
              </G.AboutMeSkillsIconContainer>
            </G.AboutMeSkills>
          </G.AboutMeGridContainer>
        </G.GridItemAboutMe>

        <G.GridItemIdea>
          <G.IdeaFlexContainer>
            <G.FlexColumnContainer>
              <G.AboutMeLeadingTitle>
                Tem alguma
                <br />
                ideia?
              </G.AboutMeLeadingTitle>
              <G.IdeaSubLeadingTitles>
                Vamos construi-la
                <br />
                iuntos!
              </G.IdeaSubLeadingTitles>

              <G.IdeaEmail>IdeaEmaila</G.IdeaEmail>
            </G.FlexColumnContainer>
          </G.IdeaFlexContainer>
        </G.GridItemIdea>
      </G.GridContainer>
    </G.PageContainer>
  );
}

const G = {
  PageContainer: styled.div`
    margin: 0 90px;


    @media (max-width: 768px) {
      margin 0 30px;
      touch-action: pan-y;
    }



  `,

  GridContainer: styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    display: grid;
    grid-gap: 2.5em;
    grid-template-rows: auto;

    grid-template-areas:
      "header"
      "introduce"
      "project"
      "aboutMe"
      "idea";
  `,

  /////////////////////////////////////

  GridItemNav: styled.div`
    grid-area: header;
    border-radius: 5px;
    padding: 30px 0 0 0px;
    grid-template-columns: 1fr 1fr;
    display: grid;
    background-color: white;
  `,

  NavLeft: styled.div`
    display: grid;
  `,

  NavRight: styled.div`
    display: grid;
    justify-self: end;
    cursor: pointer;
  `,

  ///////Introduce Section/////////

  GridItemIntroduce: styled.div`
    grid-area: introduce;
    background: linear-gradient(99.03deg, #fbed96 -1%, #abecd6 92.31%);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1),
      0px 23px 30px rgba(171, 236, 214, 0.2);
    border-radius: 44px;
  `,

  IntroduceFlexContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  `,

  IntroduceProfileImage: styled.div`
    height: 120px;
  `,

  IntroduceContent1: styled.div`
    font-family: Nunito;
    font-weight: 600;
    font-size: 44px;
    line-height: 60px;
    letter: -6%;
    margin: 20px 0;

    @media (max-width: 1224px) {
      font-size: 34px;
      line-height: 30px;
      letter: -6%;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 30px;
      letter: -6%;
      font-weight: 600;
      margin: 0;
    }
  `,

  IntroduceContent2: styled.div`
    font-family: Poppins;
    font-weight: 700;
    font-size: 60px;
    line-height: 71px;
    text-align: center;

    @media (max-width: 1224px) {
      font-size: 40px;
      font-weight: 600;
      line-height: 60px;
    }

    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 38px;
      font-weight: 600;
      line-height: 50px;
    }
  `,

  BlueText: styled.span`
    background: linear-gradient(105.28deg, #40c4ff 36.75%, #189fff 82.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  `,

  StraightLine: styled.span`
    position: absolute;
    z-index: 0;
    margin-top: 11px;
  `,

  IntroduceContent3: styled.div`
    display: flex;
    margin: 30px;
    gap: 1em;
  `,

  BlackButton: styled.button`
    font-family: Poppins;
    width: 130px;
    height: 37px;
    border-radius: 32px;
    padding: 8px 36px;
    background: black;
    color: white;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    cursor: pointer;
  `,

  TransParentButton: styled.button`
    font-family: Poppins;
    width: 130px;
    height: 37px;
    padding: 8px 0px;
    background: transparent;
    color: black;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    border: none;
    cursor: pointer;
  `,

  ///////Project Section/////////

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

    @media (max-width: 768px) {
      font-size: 56px;
      line-height: 50px;
      font-weight: 600;
    }
  `,

  /////////////////////////////////////////
  GridItemAboutMe: styled.div`
    grid-area: aboutMe;
  `,

  AboutMeGridContainer: styled.div`
    display: grid;
    gap: 3em;
    grid-template-rows: auto;
    grid-template-columns: auto;

    grid-template-areas:
      "aboutMeLeadingTitle aboutMeLeadingTitle"
      "aboutMeLeading aboutMeMemoji"
      "skills aboutMeMemoji";

    @media (max-width: 1224px) {
      gap: 0;
      grid-template-areas:
        "aboutMeLeadingTitle"
        "aboutMeMemoji"
        "aboutMeLeading "
        "skills";
    }

    @media (max-width: 768px) {
      gap: 0;
      grid-template-areas:
        "aboutMeLeadingTitle"
        "aboutMeMemoji"
        "aboutMeLeading "
        "skills";
    }
  `,

  AboutMeLeadingTitle: styled.div`
    grid-area: aboutMeLeadingTitle;
    font-size: 92px;
    line-height: 82px;
    font-weight: 700;
    font-family: Poppins;

    @media (max-width: 768px) {
      font-size: 56px;
      line-height: 50px;
      font-weight: 600;
    }
  `,

  OrangeRightArrow: styled.div`
    position: absolute;
    z-index: -1;
    margin-top: 100px;

    @media (max-width: 768px) {
      margin-top: 50px;
    }
  `,

  AboutMeLeading: styled.div`
    grid-area: aboutMeLeading;
    font-family: Nunito;
    font-weight: 500;
    font-size:24px
    line-height:32.74px;
  `,

  AboutMeMemoji: styled.div`
    grid-area: aboutMeMemoji;
    justify-self: end;

    @media (max-width: 1224) {
      justify-self: start;
    }

    @media (max-width: 768) {
      width: 100px;
      height: 100px;
      justify-self: start;
    }
  `,

  AboutMeSkills: styled.div`
    grid-area: skills;
    font-family: poppins;
    font-weight: 700;
    font-size: 52px;
    line-height: 46.8px;
  `,

  AboutMeSkillsLeadingTitle: styled.div`
    @media (max-width: 1224px) {
      margin-top: 50px;
    }
  `,

  AboutMeSkillsIconContainer: styled.div`
    display: flex;
    gap: 25px;
    margin-top: 35px;
    object-fit: cover;
  `,

  /////////////////////////////////////////
  GridItemIdea: styled.div`
    grid-area: idea;
    width: 100%;
    height: 100%;
    background: #111827;
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 48px 48px 0px 0px;
    padding: 104px 0px 28px 0px;
  `,

  IdeaFlexContainer: styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
   
    gap 64px;
  `,

  FlexColumnContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 74px 0px 64px;
  `,

  IdeaLeadingTitles: styled.div`
    font-family: poppins;
    font-weight: 500;
    font-size: 92px;
    line-height: 82px;
  `,

  IdeaSubLeadingTitles: styled.div`
    font-family: poppins;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
  `,

  IdeaEmail: styled.div`
    font-family: poppins;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
  `,
};

export default App;
