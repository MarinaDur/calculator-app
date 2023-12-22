import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraphs from "../ui/Paragraphs";
import { useCalc } from "../context/CalcContext";

const StyledScreen = styled(Flex)`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: var(--cl-bg-screen);

  min-height: 12rem;
  padding: 2rem;
  justify-content: right;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
`;

function Screen() {
  const { display, fontSize } = useCalc();
  return (
    <StyledScreen>
      <Paragraphs $type="screen" $textSize={fontSize}>
        {display}
      </Paragraphs>
    </StyledScreen>
  );
}

export default Screen;
