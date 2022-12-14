import styled from "styled-components";
import IconComponent from "../utils/svgIcon.js";
import React, { Component } from "react";
import RightVector from "../assets/images/RightVector.png";

function IntroducePage() {
  return (
    <W.IntroduceFlexContainer>
      <W.IntroduceProfileImage id="1">
        <MemojiIcon name="memoji" />
      </W.IntroduceProfileImage>
      <W.IntroduceContent1>Hi i'm Heemin Kim 🤙</W.IntroduceContent1>
      <W.IntroduceContent2>
        I <span />
        <W.BlueText>develop</W.BlueText>
        <br /> ideas and help
        <br /> build a better world <br /> through <br /> software.
      </W.IntroduceContent2>

      <W.IntroduceContent3>
        <W.BlackButton>Contact</W.BlackButton>
        <W.TransParentButton>
          Download CV <img src={RightVector} />
        </W.TransParentButton>
      </W.IntroduceContent3>
    </W.IntroduceFlexContainer>
  );
}

const W = {
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
    font-size: calc(12px + 1.5vw);
    line-height: 60px;
    letter: -6%;
    margin: calc(-10px + 1vw);
  `,

  IntroduceContent2: styled.div`
    font-family: Poppins;
    font-weight: 700;
    font-size: calc(16px + 2.5vw);
    line-height: calc(20px + 3.5vw);
    text-align: center;
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
