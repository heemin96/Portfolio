import styled, { css } from "styled-components";
import { useRef } from "react";

function AppButton({ children, variant, width }) {
  const variantStyle = VARIANTS[variant];

  return (
    <>
      <StyledButton width={width} variantStyle={variantStyle}>
        {children}
      </StyledButton>
    </>
  );
}

//왜 대문자?
const VARIANTS = {
  react: css`
    --button-color: #ffffff;
    --button-bg-color: #38bdf8;
  `,
  reactNative: css`
    --button-color: #ffffff;
    --button-bg-color: #38bdf8;
  `,
  html: css`
    --button-color: #ffffff;
    --button-bg-color: #38bdf8;
  `,
  restApi: css`
    --button-color: #ffffff;
    --button-bg-color: #f43f5e;
  `,
  redux: css`
    --button-color: #ffffff;
    --button-bg-color: #111827;
  `,
  js: css`
    --button-color: #ffffff;
    --button-bg-color: #f59e0b;
  `,

  css: css`
    --button-color: #ffffff;
    --button-bg-color: #34d399;
  `,
};

const StyledButton = styled.button`
  ${(p) => p.variantStyle}
  max-width: ${(props) =>
    (props.width = !undefined
      ? props.width
      : "400px")}; //할당이 안되면 undefined , null 은
  margin: 10px 5px 10px 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 32px;
  background: var(--button-bg-color, #0d6efd);
  color: var(--button-color, #ffffff);
`;

export default AppButton;
