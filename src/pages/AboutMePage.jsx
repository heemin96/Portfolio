import styled from "styled-components";
import IconComponent from "../utils/svgIcon.js";
import IconComponentPng from "../utils/pngIcon.js";
import React, { Component } from "react";
import OrangeRightArrow from "../assets/icons/OrangeRightArrow.png";

function AboutMePage() {
  return (
    <W.GridItemAboutMe id="3">
      <W.AboutMeGridContainer>
        <W.AboutMeLeadingTitle>
          <W.OrangeRightArrow>
            {/* <OrangeRightArrow name="orangeRightArrow" /> */}
            <img src={OrangeRightArrow} alt="none" />
          </W.OrangeRightArrow>
          About <br /> Me
        </W.AboutMeLeadingTitle>
        <W.AboutMeLeading>
          <W.AboutMeLineFlexContainer>
            <W.AboutMeLine>
              I'm a 27 year old react developer in ourtube
              <br /> vindo da área administrativa onde desenvolvi
              <br /> experiência com gestão de <br />
              pessoas, gestão de empresas
              <br /> e negociação com cliente.
              <br /> Hoje construo aplicações fullstack!
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

        {/* Skil 섹션 */}
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

    ${({ theme }) => theme.device.tablet} {
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
      line-height: 50px;
      font-weight: 600;
    }
  `,

  OrangeRightArrow: styled.div`
    position: absolute;
    z-index: -1;
    margin-top: 100px;

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
  `,

  AboutMeSkillsLeadingTitle: styled.div`
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-size: ${({ theme }) => theme.fontSize.title};
    line-height: ${({ theme }) => theme.lineHeight.title};
    font-weight: ${({ theme }) => theme.fontWeight.title};
    margin-bottom: 50px;

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
    gap: 25px;
    margin-top: 35px;
    object-fit: cover;
    justify-content: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,
};

const WebAboutMeMemoji = styled(IconComponentPng)``;
const MysqlIcon = styled(IconComponentPng)``;
const NodeIcon = styled(IconComponentPng)``;
const ReactIcon = styled(IconComponentPng)``;

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

// const OrangeRightArrow = styled(IconComponentPng)`
//   display: none;

//   @media (max-width: 768px) {
//     display: none;
//   }

//   @media (max-width: 768px) {
//     display: flex;
//   }
// `;

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
