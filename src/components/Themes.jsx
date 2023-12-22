import { styled, css } from "styled-components";
import Paragraphs from "../ui/Paragraphs";
import Flex from "../ui/Flex";
import { useTheme } from "../context/ThemeContext";

const StyledThemes = styled(Flex)`
  align-items: flex-end;
`;

const StyledThemeChoose = styled(Flex)`
  flex-direction: column;
  width: 65px;
  margin-left: 2rem;
  gap: 0.5rem;
`;

const StyledThemeChooseNums = styled(Flex)`
  justify-content: space-around;
  width: 100%;
`;

const StyledThemeChooseClick = styled(Flex)`
  width: 100%;
  padding: 0.5rem;
  border-radius: 20px;
  background: var(--cl-bg-toggle-keypad);
  justify-content: space-between;
`;

const StyledCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      background: ${(props) =>
        props.$theme === "two"
          ? "hsl(153, 9%, 52%)"
          : props.$theme === "three"
          ? "hsl(216, 82%, 53%)"
          : "hsl(321, 96%, 45%)"};
    `}

  &:hover {
    background: ${(props) =>
      props.$theme === "two"
        ? "hsl(153, 9%, 52%)"
        : props.$theme === "three"
        ? "hsl(216, 82%, 53%)"
        : "hsl(321, 96%, 45%)"};
  }
`;

function Themes() {
  const { theme, handleTheme } = useTheme();
  return (
    <StyledThemes>
      <Paragraphs $type="theme">theme</Paragraphs>
      <StyledThemeChoose>
        <StyledThemeChooseNums>
          <Paragraphs $type="theme">1</Paragraphs>
          <Paragraphs $type="theme">2</Paragraphs>
          <Paragraphs $type="theme">3</Paragraphs>
        </StyledThemeChooseNums>
        <StyledThemeChooseClick>
          <StyledCircle
            $active={theme === 1}
            $theme="one"
            onClick={() => handleTheme(1)}
          />
          <StyledCircle
            $active={theme === 2}
            $theme="two"
            onClick={() => handleTheme(2)}
          />
          <StyledCircle
            $active={theme === 3}
            $theme="three"
            onClick={() => handleTheme(3)}
          />
        </StyledThemeChooseClick>
      </StyledThemeChoose>
    </StyledThemes>
  );
}

export default Themes;
