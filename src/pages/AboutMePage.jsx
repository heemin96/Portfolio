import styled from "styled-components";
import IconComponent from "../utils/icon.js";
import IconComponentPng from "../utils/pngIcon.js";
import React, { Component } from "react";
import AboutMeMemoji from "../assets/icons/AboutMe_Memoji.png";
import ReactIcon from "../assets/icons/React_ic.png";
import NodeIcon from "../assets/icons/Node_ic.png";
import MysqlIcon from "../assets/icons/Mysql_ic.png";
import OrangeRightArrow from "../assets/icons/OrangeRightArrow.png";

function AboutMePage() {
  return (
    <G.GridItemAboutMe id="3">
      <G.AboutMeGridContainer>
        <G.AboutMeLeadingTitle>
          <G.OrangeRightArrow>
            <img src={OrangeRightArrow} />
          </G.OrangeRightArrow>
          About <br /> Me
        </G.AboutMeLeadingTitle>
        <G.AboutMeLeading>
          <div style={{ display: "flex" }}>
            <G.AboutMeLine>
              Tenho 20 anos, estou em transição de carreira,
              <br /> vindo da área administrativa onde desenvolvi
              <br /> experiência com gestão de <br />
              pessoas, gestão de empresas
              <br /> e negociação com cliente.
              <br /> Hoje construo aplicações fullstack!
            </G.AboutMeLine>
          </div>
        </G.AboutMeLeading>
        <G.AboutMeMemoji>
          <img src={AboutMeMemoji} />
        </G.AboutMeMemoji>

        <G.MAboutMeMemoji>
          <MAboutMeMemojiIcon name="m_memoji"></MAboutMeMemojiIcon>
        </G.MAboutMeMemoji>

        <G.AboutMeSkills>
          <G.AboutMeSkillsLeadingTitle>Skills</G.AboutMeSkillsLeadingTitle>
          <G.AboutMeSkillsIconContainer>
            <img src={ReactIcon} />
            <img src={NodeIcon} />
            <img src={MysqlIcon} />
          </G.AboutMeSkillsIconContainer>

          <G.MAboutMeSkillsIconContainer>
            <M_ReactIcon name="m_react" />
            <M_NodeIcon name="m_node" />
            <M_MysqlIcon name="m_mysql" />
          </G.MAboutMeSkillsIconContainer>
        </G.AboutMeSkills>
      </G.AboutMeGridContainer>
    </G.GridItemAboutMe>
  );
}

const G = {
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

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
      font-size: 66px;
    }

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

  AboutMeLine: styled.span`
    border-left: 4px solid black;
    padding-left: 5px;
    border-radius: 4px;
  `,

  AboutMeMemoji: styled.div`
    grid-area: aboutMeMemoji;
    justify-self: end;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  MAboutMeMemoji: styled.div`
    grid-area: aboutMeMemoji;
    justify-self: end;
    display: none;

    @media (max-width: 768px) {
      display: flex;
      justify-self: center;
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
    @media (max-width: 1024px) {
      margin-top: 50px;
    }
  `,

  AboutMeSkillsIconContainer: styled.div`
    display: flex;
    gap: 25px;
    margin-top: 35px;
    object-fit: cover;
    justify-content: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  MAboutMeSkillsIconContainer: styled.div`
    display: none;
    gap: 25px;
    margin-top: 35px;
    justify-content: center;

    @media (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  `,
};

const MAboutMeMemojiIcon = styled(IconComponentPng)`
  display: none;

  @media (amx-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const M_ReactIcon = styled(IconComponentPng)`
  display: none;

  @media (amx-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const M_NodeIcon = styled(IconComponentPng)`
  display: none;

  @media (amx-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const M_MysqlIcon = styled(IconComponentPng)`
  display: none;

  @media (amx-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
export default AboutMePage;
