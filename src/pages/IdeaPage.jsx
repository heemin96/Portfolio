import styled from "styled-components";
import React from "react";
import IconComponent from "../utils/icon";

import IdeaImage from "../assets/icons/IdeaImage.png";
import TwitterIcon from "../assets/icons/Twitter_ic.png";
import InIcon from "../assets/icons/In_ic.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function IdeaPage() {
  return (
    <>
      <G.IdeaFlexContainer id="4">
        <G.FlexColumnContainer>
          <G.IdeaLeadingTitles>
            Is there a
            <br />
            idea?
          </G.IdeaLeadingTitles>
          <G.IdeaSubLeadingTitles>
            Let's build it
            <br />
            together!
          </G.IdeaSubLeadingTitles>

          <G.IdeaEmail>khk8300@naver.com</G.IdeaEmail>
          <G.IdeaIcon>
            <img src={TwitterIcon} />
            <img src={InIcon} />
          </G.IdeaIcon>
        </G.FlexColumnContainer>

        <G.IdeaImage>
          <img src={IdeaImage} />
        </G.IdeaImage>
      </G.IdeaFlexContainer>
      <G.GoUpButton onClick={() => window.scrollTo(0, 0)}>
        <BsFillArrowUpCircleFill />
      </G.GoUpButton>
      <G.IdeaFooter>
        Developed by Alessandro Achtenberg | Design by
        <RafoLogo name="rafo" />
      </G.IdeaFooter>

      <G.IdeaFooterMobile>
        Developed by Alessandro Achtenberg
        <br />
        Design by
        <br />
        <br />
        <RafoLogo name="rafo" />
      </G.IdeaFooterMobile>
    </>
  );
}

const G = {
  IdeaFlexContainer: styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
    gap 64px;

    @media (min-width: 1024px){
      margin-bottom:10px;
    }
  `,

  FlexColumnContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 74px 0px 64px;
    margin-top: 30px;
  `,

  IdeaLeadingTitles: styled.div`
    font-family: poppins;
    font-size: 92px;
    line-height: 82px;
    font-weight: 600;
    font-family: Poppins;

    @media (max-width: 768px) {
      font-size: 56px;
      line-height: 50px;
      font-weight: 600;
    }
  `,

  IdeaSubLeadingTitles: styled.div`
    font-family: poppins;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    margin-top: 15px;
  `,

  IdeaEmail: styled.div`
    font-family: poppins;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    margin-top: 30px;
    text-decoration: underline;
    text-underline-position: under;
  `,

  IdeaIcon: styled.div`
    display: flex;
    margin-top: 30px;
    gap: 15px;
  `,

  IdeaImage: styled.div`
    padding: 0 80px 0 0;
    // background: linear-gradient(
    //     180deg,
    //     rgba(255, 255, 255, 0.2) 38.52%,
    //     rgba(0, 0, 0, 0.2) 100%
    //   ),
    //   url(image.png);
    // background-blend-mode: overlay, normal;
    // border-radius: 2000000px;

    @media (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `,

  IdeaFooter: styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    padding-top: 150px;
    padding-bottom: 0;
    margin-bottom: 0;

    @media (max-width: 1024px) {
      display: none;
    }
  `,

  IdeaFooterMobile: styled.div`
    display: none;
    @media (max-width: 1024px) {
      display: flex;
      font-family: Poppins;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
      padding-top: 130px;
      margin-
      padding-bottom: 0;
      margin-bottom: 0;
      justify-content: center;
    }
  `,

  IdeaPointText: styled.div``,

  GoUpButton: styled.button`
    cursor: pointer;
    position: absolute;
    left: 45%;
    font-size: 100px;
    background-color: transparent;
    border: none;
    color: white;

    @media (max-width: 1024px) {
      left: 50;
      margin-top: 50px;
      font-size: 70px;
    }
    @media (max-width: 768px) {
      left: 50;
      margin-top: 50px;
      font-size: 50px;
    }
  `,
};

const RafoLogo = styled(IconComponent)`
  position: absolute;
  margin-left: 10px;
  margin-top: -10px;

  @media (max-width: 1024px) {
margin-top:55px;
margin-Left:3px;
`;

export default IdeaPage;
