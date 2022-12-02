import styled from "styled-components";
import IconComponent from "../utils/icon.js";
import React, { Component } from "react";
import RightVector from "../assets/icons/RightVector.png";

function IntroducePage() {
  return (
    <G.IntroduceFlexContainer>
      <G.IntroduceProfileImage id="1">
        <MemojiIcon name="memoji" />
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
        <G.BlackButton>Contact</G.BlackButton>
        <G.TransParentButton>
          Download CV <img src={RightVector} />
        </G.TransParentButton>
      </G.IntroduceContent3>
    </G.IntroduceFlexContainer>
  );
}

const G = {
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

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
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
    padding: 0 36px;
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
};

const MemojiIcon = styled(IconComponent)`
  padding-right: 15px;
`;

export default IntroducePage;
