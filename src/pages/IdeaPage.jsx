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
          <img src={IdeaImage} style={{ borderRadius: "20px", width: "90%" }} />
        </G.IdeaImage>
      </G.IdeaFlexContainer>

      <G.JustFlexColumnContatiner>
        <G.GoUpButton onClick={() => window.scrollTo(0, 0)}>
          <BsFillArrowUpCircleFill />
        </G.GoUpButton>
        <G.IdeaFooter>
          Developed by Alessandro Achtenberg | Design by
          <br></br>
          <RafoLogo name="rafo" />
        </G.IdeaFooter>

        <G.IdeaFooterMobile>
          Developed by Alessandro Achtenberg
          <br />
          Design by
          <RafoLogo name="rafo" />
        </G.IdeaFooterMobile>
      </G.JustFlexColumnContatiner>
    </>
  );
}

const G = {
  IdeaFlexContainer: styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
    gap 64px;
    justify-content:space-between;

    @media (max-width: 1024px){
      margin-bottom:10px;
      text-align-last: center;
        justify-content: center;
    }
  `,

  JustFlexColumnContatiner: styled.div`
    display: flex;
    flex-direction: column;
  `,

  FlexColumnContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 4rem;
    margin-top: 2rem;

    @media (max-width: 1024px) {
      padding: 0;
    }
  `,

  IdeaLeadingTitles: styled.div`
    font-size: calc(12px + 4.5vw);
    line-height: 82px;
    font-weight: 700;
    font-family: Poppins;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      font-size: calc(40px + 4.5vw);
      line-height: 60px;
      font-weight: 600;
      margin-top: 0;
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

    @media (max-width: 1024px) {
      justify-content: center;
    }
  `,

  IdeaImage: styled.div`
    padding: 0 60px 0 0;
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
    // padding-top: 150px;
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
      // padding-top: 130px;
      padding-bottom: 0;
      margin-bottom: 0;
      justify-content: center;
      flex-direction: column;
    }
  `,

  IdeaPointText: styled.div``,

  GoUpButton: styled.button`
    cursor: pointer;

    margin-top: 20px;
    font-size: 70px;
    background-color: transparent;
    border: none;
    color: white;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      font-size: 70px;
      margin-top: 50px;
    }
    @media (max-width: 768px) {
      font-size: 50px;
    }
  `,
};

const RafoLogo = styled(IconComponent)`
  align-self: center;
`;

export default IdeaPage;
