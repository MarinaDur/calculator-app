import { styled, css } from "styled-components";

const Paragraphs = styled.p`
  text-transform: uppercase;
  margin: 0;
  line-height: 1;
  display: inline-block;
  padding: 0;
  height: fit-content;
  width: fit-content;

  ${(props) =>
    props.$type === "theme" &&
    css`
      font-size: 1.4rem;
      color: var(--cl-text-header);
      letter-spacing: 1.5px;
    `}

  ${(props) =>
    props.$type === "screen" &&
    css`
      font-size: ${(props) =>
        props.$textSize ? `${props.$textSize}rem` : "3.5rem"};
      color: var(--cl-text-screen);
      overflow-wrap: break-word;
      white-space: normal;
    `}

  ${(props) =>
    props.$type === "num" &&
    css`
      color: var(--cl-text-nums);
      text-transform: none;
    `}

  ${(props) =>
    props.$type === "action" &&
    css`
      font-size: 1.8rem;
      color: var(--cl-text-action);
    `}

  ${(props) =>
    props.$type === "equal" &&
    css`
      font-size: 1.8rem;
      color: var(--cl-text-equal);
    `}
`;

export default Paragraphs;
