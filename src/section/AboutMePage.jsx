import React, { Component } from "react";
import { Link } from "react-scroll";

import styled from "styled-components";
import IconComponent from "../utils/svgIcon.js";
import IconComponentPng from "../utils/pngIcon.js";
import OrangeRightArrow from "../assets/images/OrangeRightArrow.png";

function AboutMePage() {
  function AboutMeText() {
    return (
      <div>
        I'm Heemin Kim, a React developer
        <br /> I know how to handle react, js, css, html
        <br /> Among them, I have developed a lot with react <br />
        and I have also worked <br />
        on a lot of responsive web work.
        <br /> I think I'm a person who can help you
      </div>
    );
  }

  return (
    <W.GridItemAboutMe id="3">
      <W.AboutMeGridContainer>
        <W.AboutMeLeadingTitle>
          About <br /> Me
        </W.AboutMeLeadingTitle>
        <W.AboutMeLeading>
          <W.AboutMeLineFlexContainer>
            <W.AboutMeLine>
              <AboutMeText />
            </W.AboutMeLine>
          </W.AboutMeLineFlexContainer>
          {/* 웹용 아이콘*/}
        </W.AboutMeLeading>
        <W.AboutMeMemoji>
          <WebAboutMeMemoji name="aboutMe_Memoji" />
        </W.AboutMeMemoji>
        {/* 모바일용 아이콘 */}
        <M.AboutMeMemoji>
          <M_AboutMeMemojiIcon name="m_memoji"></M_AboutMeMemojiIcon>
        </M.AboutMeMemoji>

        {/* Skill 섹션 */}
        <W.AboutMeSkills>
          <W.AboutMeSkillsLeadingTitle>Skills</W.AboutMeSkillsLeadingTitle>
          {/* 웹용 아이콘 */}
          <W.AboutMeSkillsIconContainer>
            <ReactIcon name="react" />
            <NodeIcon name="node" />
            <MysqlIcon name="mysql" />
          </W.AboutMeSkillsIconContainer>

          {/* 모바일용 아이콘 */}
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

    ${({ theme }) => theme.device.mobile} {
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
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHeight.title};
    font-weight: ${({ theme }) => theme.fontWeight.title};
    margin-bottom: 10px;

    ${({ theme }) => theme.device.tablet} {
      line-height: 45px;
    }

    ${({ theme }) => theme.device.mobile} {
      font-size: calc(40px + 4.5vw);
      line-height: 50px;
      font-weight: 600;
    }
  `,

  OrangeRightArrow: styled.div`
    position: absolute;
    z-index: -1;
    margin-top: 90px;

    ${({ theme }) => theme.device.tablet} {
      margin-top: 40px;
    }

    ${({ theme }) => theme.device.mobile} {
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

  AboutMeLineFlexContainer: styled.div`
    display: flex;
  `,

  AboutMeLine: styled.span`
    border-left: 4px solid black;
    padding-left: 5px;
    border-radius: 4px;
  `,

  AboutMeMemoji: styled.div`
    grid-area: aboutMeMemoji;
    justify-self: end;

    ${({ theme }) => theme.device.mobile} {
      display: none;
    }
  `,

  AboutMeSkills: styled.div`
    grid-area: skills;
    font-family: poppins;
    font-weight: 700;
    font-size: 52px;
    line-height: 46.8px;
    width: 100%;
  `,

  AboutMeSkillsLeadingTitle: styled.div`
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHeight.title};
    font-weight: ${({ theme }) => theme.fontWeight.title};
    margin-bottom: 20px;

    ${({ theme }) => theme.device.tablet} {
      line-height: 45px;
      margin-top: 30px;
    }

    ${({ theme }) => theme.device.mobile} {
      font-size: calc(40px + 4.5vw);
      line-height: 50px;
      font-weight: 600;
    }
  `,

  AboutMeSkillsIconContainer: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0 20px;
    @media (max-width: 768px) {
      display: none;
    }
  `,
};

const WebAboutMeMemoji = styled(IconComponentPng)`
  width: 100%;
`;
const MysqlIcon = styled(IconComponentPng)`
  width: 80%;
  z-index: -99999;
`;
const NodeIcon = styled(IconComponentPng)`
  width: 80%;
`;
const ReactIcon = styled(IconComponentPng)`
  width: 80%;
`;

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
