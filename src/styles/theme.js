import { css } from "styled-components";

const breakPoint = {
  /* Demo Mobile - Height */
  firstHeightBreak: "740px", // used in refreshBtn
  secondHeightBreak: "720px", // used in leadingWrapper margin-top 12px -> 0px
  thirdHeightBreak: "710px", // used in gridbtn component
  fourthHeightBreak: "628px", //used in leadingWrapper(channelDetailInofoContainer) heightpx 128 -> 100px
  fifthHeightBreak: "608px", // used in grid btn grid count change 6-->4 , also in grid btn size(row) : 3->2

  /* Demo Mobile - Width */
  firstWidthBreak: "355", // used in gridcomponent item size

  /* Demo2 Mobile - Height */
  firstHeightBreakDemo2: "604px", // used in Demo2 > topSection > marginBottom
  secondHeightBreakDemo2: "578px", // used in Demo2 > topSection > marginBottom
  thirdHeightBreakDemo2: "562px",

  /* Demo2 Mobile - Width */
  firstWidthBreakDemo2: "400px", // used in gridcomponent item size

  /* Demo2 Mobile - Height */
  firstHeightBreakDemo3: "680px", // used in leading title margin bottom
  secondHeightBreakDemo3: "652px", // used in reinvestbutton vertical margin
  thirdHeightBreakDemo3: "648px", // used in profit card height
  fourthHeightBreakDemo3: "614px", // used in re invest btn vertical margin
  fifthHeightBreakDemo3: "584px", // used in porfit card height
  lastHeightBreakDemo3: "514px", // used in leading title margin bottom

  /* Demo2 Mobile - Width */
  firstWidthBreakDemo3: "362px", // used in gridcomponent item size
};

const deviceSizes = {
  mobileS: "340px",
  mobile: "768px",
  tablet: "1024px",
  desktop: "1440px",
  contentHeightM: "585px",
  contentHeight: "926px",
  investmentMobileContentHeight: "812px",
  pcAlignStartBp: "800px",
  tabletAlignStartBp: "720px",
  investPreventSizedHeight: "618px",
  investPreventSizedHeightM: "718px",
  // investPreventSizedHeight: '718px'
};

const colors = {
  // Brand
  blue10: "#CDE2FF",
  blue20: "#5297F6",
  blue30: "#026BFB",

  // Grey Scale
  white: "#FFFFFF",
  grey10: "#DCDEE5",
  grey20: "#C9CCD7",
  grey30: "#B6BAC7",
  grey40: "#969BAB",
  grey50: "#767B89",
  grey60: "#5C606B",
  grey70: "#4A4D57",
  grey80: "#2F3037",
  black: "#141414",

  // Background
  blueGrey10: "#F7F8FA",
  blueGrey20: "#F2F4F8",

  // Sub
  pink: "#FF628F",
  subBlue: "#0078D4",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,

  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  desktop: `only screen and (max-width: ${deviceSizes.desktop})`,
  contentHeightM: `only screen and (max-height: ${deviceSizes.contentHeightM})`,
  contentHeight: `only screen and (max-height: ${deviceSizes.contentHeight})`,
  investmentMobileContentHeight: `only screen and (max-height: ${deviceSizes.investmentMobileContentHeight})`,
  pcAlignStartBp: `only screen and (max-height: ${deviceSizes.pcAlignStartBp})`,
  tabletAlignStartBp: `only screen and (max-height: ${deviceSizes.tabletAlignStartBp})`,
  investPreventSizedHeight: `only screen and (max-height: ${deviceSizes.investPreventSizedHeight})`,
  investPreventSizedHeightM: `only screen and (max-height: ${deviceSizes.investPreventSizedHeightM})`,
};

const appearAnimation = {
  first: css`
    opacity: ${(props) => (props.activate ? 1 : 0.0)};
    top: ${(props) => (props.activate ? 0 : "50px")};
    transition: top 0.5s ease 0s, opacity 1s;
  `,

  second: css`
    opacity: ${(props) => (props.activate ? 1 : 0.0)};
    top: ${(props) => (props.activate ? 0 : "54px")};
    transition: top 1s ease 0s, opacity 1.2s;
  `,
};

export const theme = {
  colors,
  deviceSizes,
  device,
  appearAnimation,
  breakPoint,
};
