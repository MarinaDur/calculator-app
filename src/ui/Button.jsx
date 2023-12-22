import { styled, css } from "styled-components";
import Flex from "./Flex";

const StyledButton = styled(Flex)`
  padding: 2rem 1.5rem 1rem;
  border-radius: 5px;
  border: none;
  justify-content: center;
  &:focus {
    border: none;
    outline: none;
  }

  ${(props) =>
    props.$type === "num" &&
    css`
      background: var(--cl-keys-all-bg);
      color: var(--cl-text-nums);

      &:hover {
        background: var(--cl-keys-all-bg-hover);
      }
      &:active {
        background: var(--cl-keys-all-bg-active);
        border: none;
      }
    `};

  ${(props) =>
    props.$type === "operator" &&
    css`
      background: ${(props) =>
        props.$clicked
          ? "var(--cl-keys-operator-clicked)"
          : "var(--cl-keys-operator)"};
      color: var(--cl-text-operator);

      &:hover {
        background: var(--cl-keys-operator-hover);
      }
      &:active {
        background: var(--cl-keys-operator-clicked);
        border: none;
      }
    `};

  ${(props) =>
    props.$type === "action" &&
    css`
      background: var(--cl-keys-bg-key);
      font-size: 1.8rem;
      color: var(--cl-text-action);

      &:hover {
        background: var(--cl-keys-bg-key-hover);
      }
      &:active {
        background: var(--cl-keys-bg-key-active);
        border: none;
      }
    `};

  ${(props) =>
    props.$name === "clear" &&
    css`
      grid-column: 1/3;
    `};

  ${(props) =>
    props.$name === "eq" &&
    css`
      grid-column: 3/5;
      background: var(--cl-keys-key-toggle);
      font-size: 1.8rem;
      color: var(--cl-text-equal);

      &:hover {
        background: var(--cl-keys-key-toggle-hover);
      }
      &:active {
        background: var(--cl-keys-key-toggle-active);
        border: none;
      }
    `};
`;

function Button({ label, type, name, dataAction, clicked }) {
  return (
    <StyledButton
      $type={type}
      as="button"
      $name={name}
      data-action={dataAction}
      $clicked={clicked}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
