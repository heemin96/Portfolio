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
    <W.GridItemAboutMe id="3">
      <W.AboutMeGridContainer>
        <W.AboutMeLeadingTitle>
          <W.OrangeRightArrow>
            <img src={OrangeRightArrow} />
          </W.OrangeRightArrow>
          About <br /> Me
        </W.AboutMeLeadingTitle>
        <W.AboutMeLeading>
          <div style={{ display: "flex" }}>
            <W.AboutMeLine>
              Tenho 20 anos, estou em transição de carreira,
              <br /> vindo da área administrativa onde desenvolvi
              <br /> experiência com gestão de <br />
              pessoas, gestão de empresas
              <br /> e negociação com cliente.
              <br /> Hoje construo aplicações fullstack!
            </W.AboutMeLine>
          </div>
        </W.AboutMeLeading>
        <W.AboutMeMemoji>
          <img src={AboutMeMemoji} />
        </W.AboutMeMemoji>

        <M.AboutMeMemoji>
          <M_AboutMeMemojiIcon name="m_memoji"></M_AboutMeMemojiIcon>
        </M.AboutMeMemoji>

        <W.AboutMeSkills>
          <W.AboutMeSkillsLeadingTitle>Skills</W.AboutMeSkillsLeadingTitle>
          <W.AboutMeSkillsIconContainer>
            <img src={ReactIcon} />
            <img src={NodeIcon} />
            <img src={MysqlIcon} />
          </W.AboutMeSkillsIconContainer>

          <M.AboutMeSkillsIconContainer>
            <M_ReactIcon name="m_react" />
            <M_NodeIcon name="m_node" />
            <M_MysqlIcon name="m_mysql" />
          </M.AboutMeSkillsIconContainer>
        </W.AboutMeSkills>
      </W.AboutMeGridContainer>
    </W.GridItemAboutMe>
  );
}

//W는 Web
//M는 Mobile

const W = {
  GridItemAboutMe: styled.div`
    grid-area: aboutMe;
  `,

  AboutMeGridContainer: styled.div`
    display: grid;
    gap: 1em;
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
      line-height: 60px;
      font-weight: 600;
    }
  `,

  OrangeRightArrow: styled.div`
    position: absolute;
    z-index: -1;
    margin-top: 100px;

    @media (max-width: 1024px) {
      margin-top: 40px;
    }

    @media (max-width: 768px) {
      margin-top: 70px;
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

  AboutMeSkills: styled.div`
    grid-area: skills;
    font-family: poppins;
    font-weight: 700;
    font-size: 52px;
    line-height: 46.8px;
  `,

  AboutMeSkillsLeadingTitle: styled.div`
    font-size: calc(12px + 4.5vw);
    line-height: 82px;
    font-weight: 700;
    font-family: Poppins;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      font-size: calc(40px + 4.5vw);
      line-height: 60px;
      font-weight: 600;
    }
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
};

///////////아래부터 모바일///////////////

const M = {
  AboutMeMemoji: styled.div`
    grid-area: aboutMeMemoji;
    justify-self: end;
    display: none;

    @media (max-width: 768px) {
      display: flex;
      justify-self: center;
    }
  `,

  AboutMeSkillsIconContainer: styled.div`
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

const M_AboutMeMemojiIcon = styled(IconComponentPng)`
  display: none;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const M_ReactIcon = styled(IconComponentPng)`
  display: none;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const M_NodeIcon = styled(IconComponentPng)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const M_MysqlIcon = styled(IconComponentPng)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
export default AboutMePage;
