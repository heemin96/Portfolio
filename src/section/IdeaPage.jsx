import styled from "styled-components";
import React from "react";
import IconComponent from "../utils/svgIcon";
import { Link } from "react-scroll";

import IdeaImage from "../assets/images/IdeaImage.png";
import TwitterIcon from "../assets/images/Twitter_ic.png";
import InIcon from "../assets/images/In_ic.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function IdeaPage() {
  return (
    <>
      <W.IdeaFlexContainer id="4">
        <W.FlexColumnContainer>
          <W.IdeaLeadingTitles>
            Is there a
            <br />
            idea?
          </W.IdeaLeadingTitles>
          <W.IdeaSubLeadingTitles>
            Let's build it
            <br />
            together!
          </W.IdeaSubLeadingTitles>

          <W.IdeaEmail>khk8300@naver.com</W.IdeaEmail>
          <W.IdeaIcon>
            <img src={TwitterIcon} />
            <img src={InIcon} />
          </W.IdeaIcon>
        </W.FlexColumnContainer>

        <W.IdeaImage>
          <img src={IdeaImage} style={{ borderRadius: "20px", width: "90%" }} />
        </W.IdeaImage>
      </W.IdeaFlexContainer>

      <W.JustFlexColumnContainer>
        <Link to="5" spy={true} smooth={true}>
          <W.GoUpButton>
            <BsFillArrowUpCircleFill />
          </W.GoUpButton>
        </Link>
        <W.IdeaFooter>
          Developed by Alessandro Achtenberg | Design by
          <br></br>
          <RafoLogo name="rafo" />
        </W.IdeaFooter>

        <M.IdeaFooterMobile>
          Developed by Alessandro Achtenberg
          <br />
          Design by
          <RafoLogo name="rafo" />
        </M.IdeaFooterMobile>
      </W.JustFlexColumnContainer>
    </>
  );
}

//W는 Web
//M은 Mobile

const W = {
  IdeaFlexContainer: styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
    gap 64px;
    justify-content:space-between;

    ${({ theme }) => theme.device.tablet} {
      margin-bottom:10px;
      text-align-last: center;
        justify-content: center;
    }
  `,

  JustFlexColumnContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,

  FlexColumnContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 4rem;
    margin-top: 2rem;

    ${({ theme }) => theme.device.tablet} {
      padding: 0;
    }
  `,

  IdeaLeadingTitles: styled.div`
    font-size: calc(10px + 4vw);
    line-height: 82px;
    font-weight: 700;
    font-family: Poppins;
    margin-bottom: 50px;

    ${({ theme }) => theme.device.mobile} {
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

    ${({ theme }) => theme.device.tablet} {
      justify-content: center;
    }
  `,

  IdeaImage: styled.div`
    padding: 0 20px 0 0;
    ${({ theme }) => theme.device.tablet} {
      display: none;
    }

    ${({ theme }) => theme.device.mobile} {
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

    ${({ theme }) => theme.device.tablet} {
      display: none;
    }
  `,

  IdeaFooterMobile: styled.div`
    display: none;
    ${({ theme }) => theme.device.tablet} {
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

    ${({ theme }) => theme.device.tablet} {
      font-size: 70px;
      margin-top: 50px;
    }
    ${({ theme }) => theme.device.mobile} {
      font-size: 50px;
    }
  `,
};

const RafoLogo = styled(IconComponent)`
  align-self: center;
`;

///////////아래부터 모바일///////////////

const M = {
  IdeaFooterMobile: styled.div`
    display: none;

    ${({ theme }) => theme.device.tablet} {
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
};

export default IdeaPage;
