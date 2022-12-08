import styled, { css } from "styled-components";

//3개 묶기 . 

const fontFamily = {
  title: "Poppins",
};

const fontSize = {
  title: "calc(12px + 4.5vw);",
};

const fontWeight = {
  title: "700",
};

const lineHeight = {
  title: "calc(12px + 3vw);",
};

const deviceSize = {
  mobile: "768px",
  tablet: "1024px",
};


const device = {
  mobile: `@media only screen and (max-width: ${deviceSize.mobile})`,
  tablet: `@media only screen and (max-width: ${deviceSize.tablet})`,
};

export const theme = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  deviceSize,
  device,
};
